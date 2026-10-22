"""Step 1: collect primitives, Base and Theme variables into gen1.json."""
import json,re,os
from resolve import *
import os
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
FIGNAME=os.environ.get('FIG_RELPATH','figma-references/<file>.fig')
slug=lambda s:re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
BASE_ID,THEME_ID=setid('Base'),setid('Theme')
def live(sid): return [v for v in V if 'guid' in v['variableSetID'] and g(v['variableSetID']['guid'])==sid and not v.get('isSoftDeleted')]
# ---------- primitives (library snapshot; newest version wins on duplicate names)
PRIMKEY='49736ade148385c89980389fa4d7da70c4398db9'
prims={}
for v in V:
    if v['variableSetID'].get('assetRef',{}).get('key')!=PRIMKEY or v.get('isSoftDeleted') or v['variableResolvedType']!='COLOR': continue
    nm=v['name']
    if nm.endswith('-hex'): continue
    ver=tuple(int(x) for x in v.get('version','0:0').split(':'))
    if nm in prims and prims[nm][0]>=ver: continue
    prims[nm]=(ver,v)
def pname(nm): return slug(nm.replace('*',''))
FAMS=['purple','neutral','saline','pepto','green','xray','yellow','red','orange']
FAMLABEL={'purple':'Purple (Freed purple, the hero ramp)','neutral':'Neutral (true greys)','saline':'Saline (calm blue)','pepto':'Pepto (pink)','green':'Focus Green','xray':'X-ray (teal)','yellow':'Yellow (caution)','red':'Red (error)','orange':'Orange (warning)'}
def stepkey(nm):
    m=re.match(r'([a-z ]+)/(\d+)',nm); return (FAMS.index(m[1]) if m and m[1] in FAMS else 99, int(m[2]) if m else 0, nm)
primrows=[]
for nm,(ver,v) in sorted(prims.items(),key=lambda kv:stepkey(kv[0])):
    val=show(v,'Value')[0]
    base='*' in nm
    fam=nm.split('/')[0]
    desc=v.get('description','').replace('&amp;','&')
    if fam=='misc aurora': u='Aurora-only color from the primitives library ('+nm+').'
    else:
        u=f"{FAMLABEL.get(fam,fam)} step {nm.split('/')[1].replace('*','')}"+(' — the base step of this ramp (starred in Figma)' if base else '')+'.'
        if desc: u+=' '+desc.rstrip('.')+'.'
    primrows.append((pname(nm),val,u))
primnames={n for n,_,_ in primrows}
# ---------- Base
base=live(BASE_ID)
def leaf(v): return slug(v['name'].split('/')[-1])
basecolor=[];basefont=[]
for v in sorted(base,key=lambda v:v.get('sortPosition','')):
    vd=entry(v,'Mode 1'); val=vd.get('value',{})
    if v['variableResolvedType']=='COLOR':
        if 'alias' in val:
            t=target(val['alias']); ref=pname(t['name'])
            basecolor.append((leaf(v),'var(--%s)'%ref,'{%s}'%ref, f"Relative step for {v['name'].split('/')[0]}: alias of {ref}."+(' The ramp\'s base step.' if leaf(v).endswith('-0') else '')))
        else:
            c,ch=res(vd,'Mode 1'); src=ch[0][len('compose('):].split(',')[0]; pct=ch[0].split(',')[1].rstrip('%)')
            basecolor.append((leaf(v),hexa(c),hexa(c), f"{slug(src.split('/')[-1])} at {float(pct):g}% opacity."))
    else:
        basefont.append((v['name'],show(v,'Mode 1')))
# order: by family then solid then opacity
def bkey(r):
    m=re.match(r'([a-z]+)-(l|d)?(\d+)(?:-(\d+))?$',r[0])
    fam=m[1]; i=FAMS.index(fam) if fam in FAMS else 99
    lv=m[2]; n=int(m[3]); pos=(-n if lv=='l' else (n if lv=='d' else 0))
    return (i, 0 if m[4] is None else 1, pos, -int(m[4] or 0))
basecolor.sort(key=bkey)
# ---------- Theme
theme=live(THEME_ID)
def tname(v): 
    parts=v['name'].split('/'); return slug('-'.join(parts))
themerows=[]
for v in sorted(theme,key=lambda v:v['name']):
    row={'name':tname(v),'figma':v['name']}
    for md in ('Default','Dark mode'):
        vd=entry(v,md); val=vd.get('value',{})
        if 'alias' in val:
            t=target(val['alias'])
            # alias may point to another Theme var or a Base var
            tset=g(t['variableSetID']['guid']) if 'guid' in t['variableSetID'] else None
            ref=tname(t) if tset==THEME_ID else leaf(t)
            row[md]=ref
        else:
            row[md]=None
        row[md+'_hex']=show(v,md)[0]
    themerows.append(row)
json.dump({'prims':primrows,'base':basecolor,'basefont':basefont,'theme':themerows},open('gen1.json','w'),indent=1)
print(len(primrows),len(basecolor),len(basefont),len(themerows))
assert all(r['Default'] and r['Dark mode'] for r in themerows), 'Theme token without an alias'
