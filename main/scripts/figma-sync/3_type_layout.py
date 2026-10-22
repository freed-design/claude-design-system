"""Step 3: write tokens/typography.css and tokens/spacing.css (Layout)."""
import json,re,os
from resolve import *
import os
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
FIGNAME=os.environ.get('FIG_RELPATH','figma-references/<file>.fig')
slug=lambda s:re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
d=json.load(open('gen1.json'))
HDR='/* FREED — %s\n   GENERATED from the Figma file "01_Semantic - General" ('+FIGNAME+').\n   Figma is the source of truth: change values there, then regenerate. Names follow Figma\'s names. */\n'
def line(n,v,u=None): return '  --%s: %s;%s\n'%(n,v,(' /* %s */'%u) if u else '')
W={'Light':300,'Regular':400,'Medium':500,'SemiBold':600,'Semi Bold':600,'Bold':700,'ExtraBold':800,'Extra Bold':800}
m=json.load(open('msg.json'));nc=m['nodeChanges']
def live(sid): return [v for v in V if 'guid' in v['variableSetID'] and g(v['variableSetID']['guid'])==sid and not v.get('isSoftDeleted')]
# ---------- typography
FAMS={'heading':"'KitRounded', 'Nunito', system-ui, sans-serif",'body':"'Inter', system-ui, -apple-system, sans-serif",'product':"'Inter', system-ui, -apple-system, sans-serif",'button':"'Inter', system-ui, -apple-system, sans-serif"}
o=HDR%'Typography: families, weights, size variables and the Figma text styles as classes'
o+='/* KitRounded is proprietary and not shipped here: --font-family-heading falls back to Nunito, the agreed substitute,\n   until KitRounded webfont files are added to fonts/ and declared in tokens/fonts.css. */\n:root {\n  /* Base / Font Family */\n'
for k,v in FAMS.items(): o+=line('font-family-'+k,v,'Font Family / %s (Figma: %s).'%(k,'KitRounded' if k=='heading' else 'Inter'))
o+='\n  /* Base / Font Weight */\n'
for n,(val,ch) in d['basefont']:
    if n.startswith('Font Weight/'): o+=line('font-weight-'+slug(n.split('/')[1]),W[val],'Font Weight / %s (%s).'%(n.split('/')[1],val))
o+='\n  /* Base / Font Letterspacing */\n'
for n,(val,ch) in d['basefont']:
    if n.startswith('Font Letterspacing/'): o+=line('font-letterspacing-'+slug(n.split('/')[1]),'%gpx'%val,'Font Letterspacing / %s.'%n.split('/')[1])
o+='\n  /* Typography collection (line-height variables are 0 placeholders in Figma — "not in use due to Figma limitation" — so they are omitted; line heights live in the text styles below) */\n'
grp=None
for v in sorted(live(setid('Typography')),key=lambda v:v['name']):
    gname=v['name'].split('/')[0]
    if v['name'].endswith('line-height'): continue
    if gname!=grp: o+='\n  /* %s */\n'%gname; grp=gname
    val,ch=show(v,'Value'); n=slug(v['name'].split('/')[-1])
    if n=='h6-font-family': css="var(--font-family-heading)"; ch=['KitRounded — design decision 2026-10-21: the h6 text style wins over this variable (which says Inter)']
    elif 'font-family' in n: css="var(--font-family-body)"
    elif 'weight' in n: css=str(W[val])
    elif 'letter-spacing' in n: css='%gpx'%val
    else: css='%gpx'%val
    o+=line(n,css,'%s%s.'%(v['name'],(' → '+ch[0]) if ch else ''))
o+='}\n\n'
# text styles
styles=[n for n in nc if n.get('styleType')=='TEXT' and not n.get('sourceLibraryKey') and not n.get('isSoftDeleted') and not n['name'].startswith('_')]
ORDER=['headlines','body','eyebrows','buttons']
def skey(n):
    a,b=n['name'].split('/'); return (ORDER.index(a),-n['fontSize'],b)
styles.sort(key=skey)
o+='/* ---------- Text styles (Figma text styles; class = style name with "/" → "-") ---------- */\n'
rows=[]
for s in styles:
    fam=s['fontName']['family']; st=s['fontName']['style']
    fk='heading' if fam=='KitRounded' else ('button' if s['name'].startswith('buttons') else 'body')
    lh=s['lineHeight']; ls=s['letterSpacing']
    lhv=('%g'%round(lh['value'],2)) if lh['units']=='RAW' else ('%gpx'%lh['value'])
    lsv='0' if ls['value']==0 else (('%gem'%round(ls['value']/100,3)) if ls['units']=='PERCENT' else '%gpx'%ls['value'])
    decl=['font-family: var(--font-family-%s)'%fk,'font-size: %gpx'%s['fontSize'],'font-weight: %d'%W[st],'line-height: %s'%lhv,'letter-spacing: %s'%lsv]
    if s.get('textCase')=='UPPER': decl.append('text-transform: uppercase')
    if s.get('textDecoration')=='UNDERLINE': decl.append('text-decoration: underline')
    decl+=['color: var(--text-color-primary)','margin: 0']
    cls=slug(s['name'])
    o+='.%s { %s; }\n'%(cls,'; '.join(decl))
    rows.append({'name':cls,'figma':s['name'],'family':fk,'fontFamily':fam,'size':s['fontSize'],'weight':W[st],'lh':lhv,'ls':lsv,'upper':s.get('textCase')=='UPPER','underline':s.get('textDecoration')=='UNDERLINE'})
o+='''
/* Heading colour modifiers: black (text-color-primary) is the default; purple uses text-color-focus;
   white is for dark grounds (purple-0 and darker, or the dark theme). */
.heading-purple { color: var(--text-color-focus); }
.heading-white  { color: var(--neutral-l5); }

/* Opt-in root: apply .freed-type to get brand typography on plain HTML elements. */
.freed-type { font-family: var(--font-family-body); color: var(--text-color-primary); font-size: 18px; line-height: 1.4; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
.freed-type h1, .freed-type h2, .freed-type h3, .freed-type h4, .freed-type h5, .freed-type h6, .freed-type p { margin: 0; }
.freed-type h1 { font-family: var(--font-family-heading); font-size: 55px; font-weight: 400; line-height: 1.2; }
.freed-type h2 { font-family: var(--font-family-heading); font-size: 46px; font-weight: 400; line-height: 1.2; }
.freed-type h3 { font-family: var(--font-family-heading); font-size: 36px; font-weight: 400; line-height: 1.3; }
.freed-type h4 { font-family: var(--font-family-heading); font-size: 24px; font-weight: 500; line-height: 1.3; }
.freed-type h5 { font-family: var(--font-family-body); font-size: 20px; font-weight: 500; line-height: 1.4; }
.freed-type h6 { font-family: var(--font-family-heading); font-size: 18px; font-weight: 500; line-height: 1.4; }
.freed-type p  { text-wrap: pretty; }
'''
open(ROOT+'/tokens/typography.css','w').write(o)
json.dump(rows,open('textstyles.json','w'),indent=1)
# ---------- layout (spacing.css)
LU={'Border Radius':'Corner radius','Border Width':'Stroke width','Button Padding':'Button padding','Card Padding':'Card padding','Container':'Max content width','Spacing':'Spacing step'}
o=HDR%'Layout: border radius, border width, spacing, padding and containers'
o+=':root {\n'
grp=None
def lkey(v):
    a,b=v['name'].split('/'); return (a, show(v,'Mode 1')[0], b)
for v in sorted(live(setid('Layout')),key=lkey):
    a,b=v['name'].split('/')
    if a!=grp: o+='\n  /* %s */\n'%a; grp=a
    val=show(v,'Mode 1')[0]
    o+=line(slug(v['name']),'%gpx'%val,'%s / %s.'%(LU[a],b))
o+='}\n'
open(ROOT+'/tokens/spacing.css','w').write(o)
print('ok', len(rows))
