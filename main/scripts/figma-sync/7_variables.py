"""Step 7: write tokens/figma-variables.json, the Figma variable collections in Figma's own structure.

Collections (Base, Theme, Typography, Layout) in order, each with its modes and its variables in
Figma's order: the Figma path, the CSS custom property it becomes, and per mode the resolved value
and what it points to (another variable, an opacity expression, or a plain value).
The design system's Variables page is built from this file."""
import json,re,glob,os
from resolve import *
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
FIGNAME=os.environ.get('FIG_RELPATH','figma-references/<file>.fig')
slug=lambda s:re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
css=set()
for f in glob.glob(os.path.join(ROOT,'tokens','*.css')):
    css|=set(re.findall(r'--([\w-]+)\s*:',open(f).read()))
def cssname(coll,n):
    p=n.split('/')
    if coll=='Base':
        for grp,pre in (('Font Family','font-family-'),('Font Weight','font-weight-'),('Font Letterspacing','font-letterspacing-')):
            if p[0]==grp: return pre+slug(p[-1])
        return slug(p[-1])
    if coll=='Theme': return slug('-'.join(p))
    if coll=='Typography': return slug(p[-1])
    return slug(n)
def num(x): return round(x,4) if isinstance(x,float) else x
out={'source':FIGNAME,'file':'01_Semantic - General','collections':[]}
for coll in ['Base','Theme','Typography','Layout']:
    sid=setid(coll); s=sets[sid]
    modes=[m['name'] for m in s['variableSetModes']]
    vs=[v for v in V if 'guid' in v['variableSetID'] and g(v['variableSetID']['guid'])==sid and not v.get('isSoftDeleted')]
    vs.sort(key=lambda v:v.get('sortPosition',''))
    rows=[]
    for v in vs:
        c=cssname(coll,v['name'])
        r={'path':v['name'],'css':c if c in css else None,'type':v['variableResolvedType'].lower(),'values':{}}
        if v.get('description'): r['description']=v['description']
        for md in modes:
            val,ch=show(v,md); vd=entry(v,md).get('value',{}); e={'value':num(val)}
            if 'alias' in vd:
                t=target(vd['alias'])
                if t:
                    ts=setof(t); tc=(ts or {}).get('name')
                    e['alias']=t['name']; e['aliasCollection']='Primitives library' if 'guid' not in t['variableSetID'] else (tc or '?')
            elif 'expressionValue' in vd and ch: e['expression']=ch[0]
            r['values'][md]=e
        rows.append(r)
    out['collections'].append({'name':coll,'modes':modes,'variables':rows})
json.dump(out,open(os.path.join(ROOT,'tokens','figma-variables.json'),'w'),indent=1,ensure_ascii=False)
print('figma-variables.json:',', '.join('%s %d'%(c['name'],len(c['variables'])) for c in out['collections']))
