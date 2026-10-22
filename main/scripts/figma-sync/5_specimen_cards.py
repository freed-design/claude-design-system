"""Step 5: regenerate guidelines/*.card.html from the generated tokens."""
import json,re,os
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..')); G=ROOT+'/guidelines'
d=json.load(open('gen1.json')); TS=json.load(open('textstyles.json'))
P={n:v for n,v,u in d['prims']}; TH={r['name']:r for r in d['theme']}
def lum(h):
    c=[int(h[i:i+2],16)/255 for i in (1,3,5)]; f=lambda v:v/12.92 if v<=.03928 else ((v+.055)/1.055)**2.4
    r,g,b=map(f,c); return .2126*r+.7152*g+.0722*b
def cr(a,b): la,lb=lum(a),lum(b); return (max(la,lb)+.05)/(min(la,lb)+.05)
HEAD='''<!-- @dsCard group="%s" viewport="700x%d" name="%s" subtitle="%s" -->
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><link rel="stylesheet" href="../styles.css"><style>*{box-sizing:border-box}html,body{margin:0}body{font-family:var(--font-family-body);color:var(--text-color-primary);background:var(--background-primary);padding:16px 20px;-webkit-font-smoothing:antialiased}.mono{font-family:ui-monospace,'SF Mono',Menlo,monospace}%s</style></head><body>%s</body></html>
'''
def card(fn,group,h,name,sub,css,body): open(G+'/'+fn,'w').write(HEAD%(group,h,name,sub,css,body))
RAMP_CSS='.ramp{display:flex;border-radius:var(--border-radius-small);overflow:hidden;box-shadow:var(--effect-elevation-tiny)}.step{flex:1;height:82px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:7px;gap:2px}.step b{font:600 10px/1 var(--font-family-body)}.step span{font:400 9px/1 ui-monospace,Menlo,monospace;opacity:.8}.star{outline:2px solid var(--text-color-primary);outline-offset:-4px}'
def ramp(fam):
    steps=[(n,v) for n,v in P.items() if n.startswith(fam+'-') and re.match(r'^[a-z]+-\d+$',n)]
    steps.sort(key=lambda x:int(x[0].split('-')[1]))
    out='<div class="ramp">'
    base={'purple':600,'neutral':900,'saline':500,'pepto':400,'green':500,'xray':400,'yellow':400,'red':400,'orange':400}[fam]
    for n,v in steps:
        s=int(n.split('-')[1]); fg='#ffffff' if cr('#ffffff',v)>=cr('#212121',v) else '#212121'
        out+='<div class="step%s" style="background:var(--%s)"><b style="color:%s">%s%s</b><span style="color:%s">%s</span></div>'%(' star' if s==base else '',n,fg,s,'*' if s==base else '',fg,v[1:].upper())
    return out+'</div>'
card('color-01-purple.card.html','02 Colors',130,'Purple · primary','The hero ramp. 600* is Freed purple; * marks each ramp\'s base step (-0 in Base).',RAMP_CSS,ramp('purple'))
card('color-02-saline.card.html','02 Colors',130,'Saline · blue','Calm blue — base step 500*.',RAMP_CSS,ramp('saline'))
card('color-03-pepto.card.html','02 Colors',130,'Pepto · pink','Warm accent — base step 400*.',RAMP_CSS,ramp('pepto'))
card('color-04-green.card.html','02 Colors',130,'Focus Green · success','Success and annotations — base step 500*.',RAMP_CSS,ramp('green'))
card('color-05-xray.card.html','02 Colors',130,'X-ray · teal','Cool accent — base step 400*.',RAMP_CSS,ramp('xray'))
card('color-06-neutral.card.html','02 Colors',130,'Neutral','True greys. 900* (#212121) is primary text; 700 is secondary text.',RAMP_CSS,ramp('neutral'))
body=''.join('<p class="lab">%s</p>%s'%(t,ramp(f)) for f,t in (('yellow','Yellow · caution'),('red','Red · error'),('orange','Orange · warning')))
card('color-07-functional.card.html','02 Colors',330,'Yellow, Red and Orange','Caution, error and warning — 5 steps each',RAMP_CSS.replace('height:82px','height:56px')+'.lab{font:600 11px/1 var(--font-family-body);letter-spacing:.06em;text-transform:uppercase;color:var(--text-color-secondary);margin:10px 0 6px}',body)
# semantic, light + dark side by side
KEYS=['background-primary','background-secondary','background-alternate-01','background-alternate-02','text-color-primary','text-color-secondary','text-color-focus','text-color-error','text-color-success','text-color-warning','border-color-primary','buttons-bg-primary']
def sem(theme):
    out='<div class="col" data-theme="%s" style="background:var(--background-primary)"><p class="th">%s</p><div class="grid">'%(theme,'Default (light)' if theme=='light' else 'Dark mode')
    for k in KEYS:
        r=TH[k]; hx=r['Default_hex'] if theme=='light' else r['Dark mode_hex']
        out+='<div class="sw"><div class="chip" style="background:var(--%s)"></div><div><div class="n mono">--%s</div><div class="v mono">%s</div></div></div>'%(k,k,hx)
    return out+'</div></div>'
card('color-08-semantic-tokens.card.html','02 Colors',430,'Semantic tokens','Theme tokens, Default and Dark mode — reach for these before the ramps','.wrap{display:grid;grid-template-columns:1fr 1fr;gap:12px}.col{border-radius:var(--border-radius-small);padding:12px;color:var(--text-color-primary);border:1px solid var(--border-color-primary)}.th{margin:0 0 8px;font:600 11px/1 var(--font-family-body);letter-spacing:.06em;text-transform:uppercase;color:var(--text-color-secondary)}.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.sw{display:flex;gap:8px;align-items:center}.chip{width:26px;height:26px;border-radius:var(--border-radius-xsmall);border:1px solid var(--border-color-secondary);flex-shrink:0}.n{font-size:10px;color:var(--text-color-primary)}.v{font-size:10px;color:var(--text-color-secondary)}','<div class="wrap">'+sem('light')+sem('dark')+'</div>')
# contrast
pairs=[('text-color-primary','background-primary'),('text-color-secondary','background-primary'),('text-color-focus','background-primary'),('text-color-error','background-primary'),('text-color-success','background-primary'),('text-color-warning','background-primary'),('buttons-text-primary','buttons-bg-primary'),('tags-text-primary','tags-bg-primary'),('tags-text-secondary','tags-bg-secondary'),('tags-text-secondary','tags-bg-alternate-01')]
def blend(fg,bg):
    m=re.match(r'rgba\((\d+),(\d+),(\d+),([\d.]+)\)',fg)
    if not m: return fg
    a=float(m[4]); bb=[int(bg[i:i+2],16) for i in (1,3,5)]
    return '#%02x%02x%02x'%tuple(round(int(m[k+1])*a+bb[k]*(1-a)) for k in range(3))
def ctab(theme):
    out='<div class="g" data-theme="%s">'%theme
    for fg,bg in pairs:
        key='Default_hex' if theme=='light' else 'Dark mode_hex'
        b=TH[bg][key]; f=blend(TH[fg][key],b); r=cr(f,b); ok=r>=4.5
        out+='<div class="s" style="background:var(--%s);color:var(--%s)"><span class="t">%s on %s</span><span class="r">%.2f:1 · %s</span></div>'%(bg,fg,fg.replace('text-color-','').replace('-text-',' text '),bg.replace('background-','bg ').replace('-bg-',' bg '),r,'pass' if ok else 'FAIL — flagged')
    return out+'</div>'
card('color-09-contrast-aa.card.html','02 Colors',330,'Text contrast · AA','Theme text pairs, light then dark. 4.5:1 for text; failing Figma pairs are flagged, not re-tinted','.g{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:8px}.s{border-radius:var(--border-radius-xsmall);padding:8px;min-height:58px;display:flex;flex-direction:column;justify-content:space-between;border:1px solid var(--border-color-primary)}.t{font:500 11px/1.25 var(--font-family-body)}.r{font:600 11px/1 var(--font-family-body)}',ctab('light')+ctab('dark'))
# elevation
el=['effect-elevation-tiny','effect-elevation-small','effect-elevation-primary','effect-bubble-card-elevation-small','effect-glow-card-primary']
card('elevation.card.html','08 Layout',180,'Elevation and card effects','Figma effect styles — one elevation layer per surface, never stacked','.row{display:flex;gap:22px;padding:10px 6px 16px}.c{display:flex;flex-direction:column;align-items:center;gap:10px}.b{width:100px;height:72px;border-radius:var(--border-radius-primary);background:var(--background-primary)}.l{font-size:10px;color:var(--text-color-secondary);text-align:center}','<div class="row">'+''.join('<div class="c"><div class="b" style="box-shadow:var(--%s)"></div><div class="l mono">--%s</div></div>'%(e,e) for e in el)+'</div>')
# radii
rad=[('border-radius-xsmall',4),('border-radius-small',8),('border-radius-primary',16),('border-radius-large',32),('border-radius-full',999)]
card('radii.card.html','08 Layout',160,'Corner radii','xsmall 4 · small 8 · primary 16 · large 32 · full','.row{display:flex;gap:16px}.c{display:flex;flex-direction:column;align-items:center;gap:7px}.b{width:100px;height:72px;background:var(--purple-100);border:1px solid var(--purple-300)}.l{font-size:10px;color:var(--text-color-secondary);text-align:center}','<div class="row">'+''.join('<div class="c"><div class="b" style="border-radius:var(--%s)"></div><div class="l mono">--%s<br>%spx</div></div>'%(n,n,v) for n,v in rad)+'</div>')
sp=[('spacing-tiny',2),('spacing-xxxsmall',4),('spacing-xxsmall',8),('spacing-xsmaller',12),('spacing-smaller',16),('spacing-small',20),('spacing-medium',32),('spacing-large',48),('spacing-xlarge',64),('spacing-xxlarge',80),('spacing-huge',96),('spacing-xhuge',128),('spacing-xxhuge',192)]
card('space-scale.card.html','08 Layout',260,'Spacing scale','Figma Layout / Spacing — tiny 2 … xxhuge 192','.row{display:flex;align-items:flex-end;gap:8px;flex-wrap:wrap}.c{display:flex;flex-direction:column;align-items:center;gap:6px}.b{background:var(--purple-400);border-radius:2px}.l{font-size:9px;color:var(--text-color-secondary);text-align:center}','<div class="row">'+''.join('<div class="c"><div class="b" style="width:min(var(--%s),96px);height:var(--%s);max-height:192px"></div><div class="l mono">%s<br>%d</div></div>'%(n,n,n.replace('spacing-',''),v) for n,v in sp)+'</div>')
TYCSS='.r{display:flex;align-items:baseline;gap:16px;padding:5px 0;border-bottom:1px solid var(--border-color-primary)}.r>span:first-child{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:470px}.s{font-size:10px;color:var(--text-color-secondary);margin-left:auto;white-space:nowrap}'
def rows(names,text):
    by={t['name']:t for t in TS}; out=''
    for n in names:
        t=by[n]; out+='<div class="r"><span class="%s">%s</span><span class="s mono">.%s · %s %gpx/%s%s</span></div>'%(n,text if not t['upper'] else text.upper(),n,t['fontFamily'],t['size'],t['lh'],(' · '+str(t['weight'])) )
    return out
card('type-display.card.html','04 Type',360,'Headlines','KitRounded (Nunito stand-in) — h1-large 96 / h1 55 / h2 46 / h3 36 / h4 24 / h6 18; h5 is Inter',TYCSS,rows(['headlines-h1-large','headlines-h1','headlines-h2','headlines-h3','headlines-h4','headlines-h5','headlines-h6'],'Focus on people'))
card('type-body.card.html','04 Type',300,'Body sizes','Inter — x-large 24 / large 22 / medium 20 / primary 18 / small 16 / xsmall 14 / tiny 12 (captions only)',TYCSS,rows(['body-x-large','body-large','body-medium','body-primary','body-small','body-xsmall','body-tiny'],'Turn every visit into a finished note.'))
card('type-eyebrows-buttons.card.html','04 Type',260,'Eyebrows and buttons','Eyebrows: Inter Medium, uppercase, 4px tracking. Buttons: Inter SemiBold, line-height 1',TYCSS,rows(['eyebrows-primary','eyebrows-small','eyebrows-tiny','buttons-large','buttons-primary','buttons-small','buttons-xsmall'],'Ambient AI scribe'))
card('type-fonts.card.html','04 Type',170,'Font families','Heading: KitRounded (Nunito stand-in) · body, product, button: Inter','.g{display:grid;grid-template-columns:1fr 1fr;gap:16px}.k{margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--text-color-secondary)}.sp{font-size:44px;line-height:1.1}.m{font-size:10px;color:var(--text-color-secondary);margin-top:4px}','<div class="g"><div><p class="k">Heading</p><div class="sp" style="font-family:var(--font-family-heading)">Aa Bb Gg</div><div class="m mono">--font-family-heading<br>KitRounded → Nunito until the files are added · 300/400/500</div></div><div><p class="k">Body · product · button</p><div class="sp" style="font-family:var(--font-family-body)">Aa Bb Gg</div><div class="m mono">--font-family-body / -product / -button<br>Inter 400/500/600/700</div></div></div>')
print('cards ok')
