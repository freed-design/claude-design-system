"""Step 2: write tokens/colors.css and tokens/theme.css."""
import json,re,os
from resolve import *
import os
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
FIGNAME=os.environ.get('FIG_RELPATH','figma-references/<file>.fig')
slug=lambda s:re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
d=json.load(open('gen1.json'))
HDR='/* FREED — %s\n   GENERATED from the Figma file "01_Semantic - General" ('+FIGNAME+').\n   Figma is the source of truth: change values there, then regenerate. Names follow Figma\'s variable names. */\n'
def line(n,v,u=None): return '  --%s: %s;%s\n'%(n,v,(' /* %s */'%u.replace('*/','*∕')) if u else '')
# ---------- colors.css: primitives + Base
o=HDR%'Color primitives and Base (relative steps + opacity variants)'
o+=':root {\n  /* ---------- PRIMITIVE RAMPS (primitives library, as of the Figma file) ---------- */\n'
fam=None
for n,v,u in d['prims']:
    f=n.split('-')[0]
    if f!=fam: o+='\n  /* %s */\n'%f; fam=f
    o+=line(n,v,u)
o+='\n  /* ---------- BASE: relative steps (-l = lighter, -0 = base step, -d = darker) and opacity variants ---------- */\n'
fam=None
for n,css,ds,u in d['base']:
    f=n.split('-')[0]
    if f!=fam: o+='\n  /* %s */\n'%f; fam=f
    o+=line(n,css,u)
o+='}\n'
open(ROOT+'/tokens/colors.css','w').write(o)
# ---------- theme.css
TN={r['name']:r for r in d['theme']}
def ref(x): return 'var(--%s)'%x
def lum(h):
    m=re.match(r'#([0-9a-f]{6})$',h)
    if not m: return None
    c=[int(h[i:i+2],16)/255 for i in (1,3,5)]; f=lambda v:v/12.92 if v<=.03928 else ((v+.055)/1.055)**2.4
    r,g_,b=map(f,c); return .2126*r+.7152*g_+.0722*b
def blend(fg,bg):
    m=re.match(r'rgba\((\d+),(\d+),(\d+),([\d.]+)\)',fg)
    if not m: return fg
    a=float(m[4]); bb=[int(bg[i:i+2],16) for i in (1,3,5)]
    return '#%02x%02x%02x'%tuple(round(int(m[k+1])*a+bb[k]*(1-a)) for k in range(3))
def cr(a,b):
    la,lb=lum(a),lum(b); return (max(la,lb)+.05)/(min(la,lb)+.05)
def tusage(r):
    grp=r['figma'].split('/')
    u='%s. Light: %s (%s); dark: %s (%s).'%(' / '.join(grp),r['Default'],r['Default_hex'],r['Dark mode'],r['Dark mode_hex'])
    if r['name'].startswith(('text-color','link-color')):
        lb=TN['background-primary']['Default_hex']; db=TN['background-primary']['Dark mode_hex']
        lt=blend(r['Default_hex'],lb); dt=blend(r['Dark mode_hex'],db)
        u+=' On background-primary: %.2f:1 light, %.2f:1 dark.'%(cr(lt,lb),cr(dt,db))
    if r['name']=='tags-text-secondary':
        u+=' On tags-bg-secondary (saline-500) this is 2.30:1 and FAILS AA for 14px labels — kept as Figma defines it; fix in Figma.'
    return u
o=HDR%'Theme (semantic) tokens, Default (light) and Dark mode'
o+=':root, [data-theme="light"] {\n'
grp=None
for r in d['theme']:
    gname=r['figma'].split('/')[0]
    if gname!=grp: o+='\n  /* %s */\n'%gname; grp=gname
    o+=line(r['name'],ref(r['Default']),tusage(r))
o+='}\n\n[data-theme="dark"] {\n'
grp=None
for r in d['theme']:
    gname=r['figma'].split('/')[0]
    if gname!=grp: o+='\n  /* %s */\n'%gname; grp=gname
    o+=line(r['name'],ref(r['Dark mode']))
o+='}\n'
open(ROOT+'/tokens/theme.css','w').write(o)
print('ok colors/theme')
