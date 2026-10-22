"""Decode a Figma .fig file (zip with a kiwi-encoded canvas.fig) into msg.json in the current directory.
Usage: python3 figkiwi.py path/to/file.fig   (needs the `zstd` command on PATH)"""
import struct, zlib, subprocess, sys, json
import zipfile,sys
z=zipfile.ZipFile(sys.argv[1])
d=z.read('canvas.fig')
off=12; chunks=[]
while off<len(d):
    n=struct.unpack('<I',d[off:off+4])[0]; chunks.append(d[off+4:off+4+n]); off+=4+n
def dec(c):
    if c[:4]==b'\x28\xb5\x2f\xfd': return subprocess.run(['zstd','-dc'],input=c,capture_output=True,check=True).stdout
    return zlib.decompress(c,-15)
schema_b, data_b = dec(chunks[0]), dec(chunks[1])
class R:
    def __init__(s,b): s.b=b; s.i=0
    def byte(s): v=s.b[s.i]; s.i+=1; return v
    def vu(s):
        r=0; sh=0
        while True:
            b=s.byte(); r|=(b&127)<<sh; sh+=7
            if not b&128: return r
    def vi(s):
        v=s.vu(); return (v>>1)^-(v&1)
    def str(s):
        j=s.b.index(0,s.i); v=s.b[s.i:j].decode('utf8','replace'); s.i=j+1; return v
    def flt(s):
        b0=s.byte()
        if b0==0: return 0.0
        bits=b0|(s.byte()<<8)|(s.byte()<<16)|(s.byte()<<24)
        bits=((bits<<23)|(bits>>9))&0xffffffff
        return struct.unpack('<f',struct.pack('<I',bits))[0]
r=R(schema_b); defs=[]
for _ in range(r.vu()):
    name=r.str(); kind=r.byte(); fields=[]
    for _ in range(r.vu()):
        fn=r.str(); t=r.vi(); arr=r.byte(); val=r.vu(); fields.append((fn,t,arr,val))
    defs.append((name,kind,fields))
byname={x[0]:i for i,x in enumerate(defs)}
BUILTIN={-1:'bool',-2:'byte',-3:'int',-4:'uint',-5:'float',-6:'string',-7:'int64',-8:'uint64'}
def read(r,t):
    if t<0:
        k=BUILTIN[t]
        if k=='bool': return bool(r.byte())
        if k=='byte': return r.byte()
        if k in('int','int64'): return r.vi()
        if k in('uint','uint64'): return r.vu()
        if k=='float': return r.flt()
        if k=='string': return r.str()
    name,kind,fields=defs[t]
    if kind==0:
        v=r.vu(); return next((f[0] for f in fields if f[3]==v),v)
    if kind==1:
        return {fn:readf(r,ft,arr) for fn,ft,arr,_ in fields}
    o={}; fm={f[3]:f for f in fields}
    while True:
        fid=r.vu()
        if fid==0: return o
        fn,ft,arr,_=fm[fid]; o[fn]=readf(r,ft,arr)
def readf(r,t,arr):
    if arr:
        n=r.vu()
        if t==-2: v=r.b[r.i:r.i+n]; r.i+=n; import base64; return base64.b64encode(v).decode()
        return [read(r,t) for _ in range(n)]
    return read(r,t)
msg=read(R(data_b),byname['Message'])
json.dump(msg,open('msg.json','w'),default=str)
nc=msg.get('nodeChanges',[])
from collections import Counter
print(len(nc), Counter(n.get('type') for n in nc).most_common(30))
