"""Step 4: write tokens/effects.css from the effect styles; fills.json holds the glow/petri border gradients."""
import json,re,os,math
from resolve import *
import os
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
FIGNAME=os.environ.get('FIG_RELPATH','figma-references/<file>.fig')
slug=lambda s:re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
HDR='/* FREED — %s\n   GENERATED from the Figma file "01_Semantic - General" ('+FIGNAME+').\n   Figma is the source of truth: change values there, then regenerate. */\n'
m=json.load(open('msg.json'));nc=m['nodeChanges']
d=json.load(open('gen1.json')); TN={r['figma']:r for r in d['theme']}
def tname(n): return slug(n)
eff=[n for n in nc if n.get('styleType')=='EFFECT' and not n.get('sourceLibraryKey') and not n.get('isSoftDeleted') and n.get('visible',True) is not False]
out={}; notes={}
def num(x): return ('%g'%round(x,2))+'px' if x else '0'
for s in eff:
    parts={'light':[],'dark':[],'css':[]}; extra=[]
    for e in s['effects']:
        if not e.get('visible',True): continue
        t=e['type']
        if t in ('DROP_SHADOW','INNER_SHADOW'):
            cv=e.get('colorVar') or {}; a=cv.get('value',{}).get('alias') if isinstance(cv,dict) else None
            tv=target(a) if a else None
            geo='%s%s %s %s %s'%('inset ' if t=='INNER_SHADOW' else '',num(e['offset']['x']),num(e['offset']['y']),num(e.get('radius',0)),num(e.get('spread',0)))
            if tv and tv['name'] in TN:
                r=TN[tv['name']]
                parts['css'].append(geo+' var(--%s)'%r['name'])
                parts['light'].append(geo+' '+r['Default_hex']); parts['dark'].append(geo+' '+r['Dark mode_hex'])
            else:
                c=hexa(e['color']); parts['css'].append(geo+' '+c); parts['light'].append(geo+' '+c); parts['dark'].append(geo+' '+c)
        elif t=='GLASS': extra.append('glass: frost blur %gpx (CSS: backdrop-filter: blur(%gpx)); Figma also adds refraction %g and a specular edge that CSS cannot reproduce'%(e['radius'],e['radius'],e.get('refractionRadius',0)))
        elif t=='NOISE': extra.append('noise grain in %s'%hexa(e['color']))
    n='effect-'+slug(s['name'])
    out[n]=parts; notes[n]=(s['name'],extra)
o=HDR%'Effects: the Figma effect styles as box-shadow values'
o+='''/* Each --effect-* is a complete box-shadow list. Colours come from the Theme tokens, so they switch with
   [data-theme="dark"] automatically. Figma "Glass" and "Noise" layers have no box-shadow equivalent:
   glass-card and icon/glass also need backdrop-filter: blur(4px); petri-card/inner adds a purple grain (see Card).
   Declared on every [data-theme] element too, so the var() colours resolve against that element's theme. */
:root, [data-theme] {
'''
for n,p in sorted(out.items()):
    nm,extra=notes[n]
    o+='  --%s: %s; /* %s%s */\n'%(n,', '.join(p['css']) or 'none',nm,('. '+'; '.join(extra)) if extra else '')
o+='}\n'
open(ROOT+'/tokens/effects.css','w').write(o)
json.dump({'shadows':out,'notes':notes},open('effects.json','w'),indent=1)
# glow border gradients (stroke fill styles)
fills=[n for n in nc if n.get('styleType')=='FILL' and not n.get('sourceLibraryKey') and not n.get('isSoftDeleted') and n.get('visible',True) is not False]
gl={}
for s in fills:
    lay=[]
    for p in s['fillPaints']:
        if not p.get('visible',True): continue
        if p['type']=='SOLID': lay.append({'type':'solid','color':hexa(p['color'],p['color']['a']*p.get('opacity',1))})
        else:
            T=p.get('transform') or {}
            # angle: invert gradient transform, map gradient-space (0,.5)->(1,.5) back to unit box
            a,b,c,dd,e,f=T.get('m00',1),T.get('m01',0),T.get('m02',0),T.get('m10',0),T.get('m11',1),T.get('m12',0)
            det=a*e-b*dd
            def inv(x,y): x-=c; y-=f; return ((e*x-b*y)/det, (-dd*x+a*y)/det)
            p0=inv(0,.5); p1=inv(1,.5); ang=(math.degrees(math.atan2(p1[0]-p0[0], -(p1[1]-p0[1])))+360)%360
            lay.append({'type':p['type'].lower(),'angle':round(ang),'stops':[(round(st['position'],3),hexa(st['color'])) for st in p['stops']]})
    gl[slug(s['name'])]=lay
json.dump(gl,open('fills.json','w'),indent=1)
print(json.dumps(gl,indent=0)[:1500])
