"""Step 6: export the Figma "Logos/*" components as SVG (assets/logos/) and refresh the path data in components/logos/Logo.jsx."""
import os
ROOT=os.environ.get('FREED_DS_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
import json,base64,struct,math,sys,re
m=json.load(open('msg.json')); nc=m['nodeChanges']; BL=m['blobs']
g=lambda x:'%d:%d'%(x['sessionID'],x['localID'])
by={g(n['guid']):n for n in nc}
kids={}
for n in nc:
    p=n.get('parentIndex',{}).get('guid')
    if p: kids.setdefault(g(p),[]).append(n)
for k in kids: kids[k].sort(key=lambda n:n['parentIndex']['position'])
V={g(n['guid']):n for n in nc if n.get('type')=='VARIABLE'}
VK={n.get('key'):n for n in nc if n.get('type')=='VARIABLE' and n.get('key')}
BB=[1e9,1e9,-1e9,-1e9]
def blob(i): return base64.b64decode(BL[i]['bytes'])
def path(i, M=None):
    b=blob(i); o=0; out=[]
    def pt(x,y):
        if M: x,y=M[0]*x+M[1]*y+M[2], M[3]*x+M[4]*y+M[5]
        return '%s %s'%(fmt(x),fmt(y))
    N={0:0,1:2,2:2,3:4,4:6}; L={0:'Z',1:'M',2:'L',3:'Q',4:'C'}
    while o<len(b):
        c=b[o]; o+=1; n=N[c]; fl=struct.unpack_from('<%df'%n,b,o); o+=4*n
        if c==0 and (not out or out[-1]=='Z'): continue
        for j in range(0,n,2):
            x,y=fl[j],fl[j+1]
            if M: x,y=M[0]*x+M[1]*y+M[2], M[3]*x+M[4]*y+M[5]
            BB[0]=min(BB[0],x);BB[1]=min(BB[1],y);BB[2]=max(BB[2],x);BB[3]=max(BB[3],y)
        out.append(L[c]+' '.join(pt(fl[j],fl[j+1]) for j in range(0,n,2)))
    return ''.join(out)
def fmt(v): s='%.3f'%v; s=s.rstrip('0').rstrip('.'); return '0' if s in ('-0','') else s
def mat(n):
    t=n.get('transform') or {}
    return [t.get('m00',1),t.get('m01',0),t.get('m02',0),t.get('m10',0),t.get('m11',1),t.get('m12',0)]
def mul(A,B):
    return [A[0]*B[0]+A[1]*B[3], A[0]*B[1]+A[1]*B[4], A[0]*B[2]+A[1]*B[5]+A[2],
            A[3]*B[0]+A[4]*B[3], A[3]*B[1]+A[4]*B[4], A[3]*B[2]+A[4]*B[5]+A[5]]
def hexa(c,a):
    h='#%02x%02x%02x'%tuple(round(c[k]*255) for k in 'rgb'); return h,a
def varname(p):
    cv=p.get('colorVar') or {}
    a=cv.get('value',{}).get('alias') if isinstance(cv,dict) else None
    if not a: return None
    t=V.get(g(a['guid'])) if 'guid' in a else VK.get(a.get('assetRef',{}).get('key'))
    return t['name'] if t else None
def paint(ps):
    for p in ps or []:
        if not p.get('visible',True): continue
        if p['type']=='SOLID':
            h,a=hexa(p['color'],p['color'].get('a',1)*p.get('opacity',1)); return ('solid',h,a,varname(p))
        return (p['type'],None,None,None)
    return None
seen_types=set()
def okey(n): return g(n.get('overrideKey') or n['guid'])
def walk(n,M,out,op=1.0,ov=None,scope=(),me=None):
    ov=ov or {}; me=me or {}
    if (me.get('visible', n.get('visible',True)) is False) or n.get('isSoftDeleted'): return
    op*=me.get('opacity', n.get('opacity',1))
    t=n['type']
    fills=me.get('fillPaints', n.get('fillPaints'))
    if t=='TEXT':
        f=paint(fills)
        dd=me.get('derivedTextData') or n.get('derivedTextData') or {}
        for gl in dd.get('glyphs',[]):
            if 'commandsBlob' not in gl: continue
            fs=gl['fontSize']; G=mul(M,[fs,0,gl['position']['x'],0,-fs,gl['position']['y']])
            out.append((path(gl['commandsBlob'],G),f,op,n.get('name')))
    else:
        f=paint(fills)
        for fg in me.get('fillGeometry', n.get('fillGeometry')) or []:
            if f: out.append((path(fg['commandsBlob'],M),f,op,n.get('name')))
        s_=paint(me.get('strokePaints', n.get('strokePaints')))
        for sg in me.get('strokeGeometry', n.get('strokeGeometry')) or []:
            if s_ and me.get('strokeWeight', n.get('strokeWeight',0))>0: out.append((path(sg['commandsBlob'],M),s_,op,(n.get('name') or '')+':stroke'))
        if f and f[0]!='solid': seen_types.add(f[0]+':'+(n.get('name') or ''))
    if t=='INSTANCE':
        sd=n.get('symbolData') or {}
        master=by.get(g(sd['symbolID'])) if sd.get('symbolID') else None
        children=kids.get(g(master['guid']),[]) if master else []
        nscope=scope+(okey(n),) if scope or ov else ()
        nov=dict(ov) if nscope else {}
        base=nscope
        for src in (sd.get('symbolOverrides') or [], n.get('derivedSymbolData') or []):
            for e in src:
                key=base+tuple(g(x) for x in e['guidPath']['guids'])
                d=dict(nov.get(key,{})); d.update({k:v for k,v in e.items() if k!='guidPath'}); nov[key]=d
        sc=base
    else:
        children=kids.get(g(n['guid']),[]); nov=ov; sc=scope
    for c in children:
        cme=nov.get(sc+(okey(c),),{})
        walk(c,mul(M,mat(cme) if 'transform' in cme else mat(c)),out,op,nov,sc,cme)
def svg(node,mode='hex',color=None):
    BB[:]=[1e9,1e9,-1e9,-1e9]
    out=[]; walk(node,[1,0,0,0,1,0],out)
    x0,y0=min(0,BB[0]),min(0,BB[1]); x1,y1=max(node['size']['x'],BB[2]),max(node['size']['y'],BB[3])
    import math
    x0,y0,x1,y1=math.floor(x0),math.floor(y0),math.ceil(x1),math.ceil(y1)
    w,h=x1-x0,y1-y0
    ps=[]
    for d,(kind,hx,a,vn),op,name in out:
        if kind!='solid': continue
        fill=color or hx
        alpha=a*op
        ps.append('<path d="%s" fill="%s"%s/>'%(d,fill,'' if alpha>=0.999 else ' fill-opacity="%s"'%fmt(alpha)))
    return '<svg xmlns="http://www.w3.org/2000/svg" width="%s" height="%s" viewBox="%s %s %s %s">%s</svg>'%(fmt(w),fmt(h),fmt(x0),fmt(y0),fmt(w),fmt(h),''.join(ps)), out

def comp(setname, variant=None):
    for n in nc:
        if n.get('type')!='SYMBOL' or n.get('isSoftDeleted'): continue
        par=by.get(g(n['parentIndex']['guid']),{})
        if (variant and par.get('name')==setname and n['name']==variant) or (not variant and n['name']==setname): return n
    raise SystemExit('Logo component not found in Figma: %s %s' % (setname, variant or ''))
TARGETS={'freed-full':('Logos/Freed','Color=Primary,Type=Full'),'freed-icon':('Logos/Freed','Color=Primary,Type=Icon'),'freed-text':('Logos/Freed','Color=Primary,Type=Text'),
 'hipaa':('Logos/HIPAA',None),'soc2':('Logos/SOC2',None),'loved-by':('Logos/Loved By',None),'certification':('Logos/CERTIFICATION-Comobined',None)}
# approved colours: purple-600, neutral-900 (#212121) and white
COL={'purple':'#6a3cdf','black':'#212121','white':'#ffffff'}
os.makedirs(ROOT+'/assets/logos',exist_ok=True)
art={}
for k,(s_,v) in TARGETS.items():
    n=comp(s_,v)
    cur,_=svg(n,color='currentColor')
    art[k]={'viewBox':re.search(r'viewBox="([^"]+)"',cur)[1],'paths':re.search(r'<svg[^>]*>(.*)</svg>',cur,re.S)[1].replace(' fill="currentColor"','')}
    for c in (['purple','black','white'] if k.startswith('freed') else ['black','white']):
        open(ROOT+'/assets/logos/%s-%s.svg'%(k,c),'w').write(svg(n,color=COL[c])[0])
p=ROOT+'/components/logos/Logo.jsx'; js=open(p).read()
js=re.sub(r'^const ART = .*;$', lambda m_: 'const ART = '+json.dumps(art,separators=(',',':'))+';', js, count=1, flags=re.M)
open(p,'w').write(js)
print('logos ok', len(art))
