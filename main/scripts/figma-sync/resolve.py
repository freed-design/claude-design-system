"""Shared helpers: load msg.json, resolve variable aliases and COMPOSE_COLOR expressions per mode."""
import json
m=json.load(open('msg.json'));nc=m['nodeChanges']
g=lambda x:'%d:%d'%(x['sessionID'],x['localID'])
V=[n for n in nc if n.get('type')=='VARIABLE']
byid={g(n['guid']):n for n in V}; bykey={n['key']:n for n in V if n.get('key')}
sets={g(n['guid']):n for n in nc if n.get('type')=='VARIABLE_SET'}
setkey={n['key']:n for n in sets.values() if n.get('key')}
def setof(v):
    s=v['variableSetID']; return sets.get(g(s['guid'])) if 'guid' in s else setkey.get(s['assetRef']['key'])
def modename(v,mid):
    s=setof(v)
    for md in (s or {}).get('variableSetModes',[]):
        if g(md['id'])==mid: return md['name']
    return mid
def target(a):
    return byid.get(g(a['guid'])) if 'guid' in a else bykey.get(a.get('assetRef',{}).get('key'))
def hexa(c,a=None):
    a=c['a'] if a is None else a
    h='#%02x%02x%02x'%tuple(round(c[k]*255) for k in 'rgb')
    return h if abs(a-1)<1e-3 else 'rgba(%d,%d,%d,%s)'%(round(c['r']*255),round(c['g']*255),round(c['b']*255),('%.2f'%a).rstrip('0').rstrip('.'))
def entry(v,mode):
    es=v['variableDataValues']['entries']
    for e in es:
        if modename(v,g(e['modeID']))==mode: return e['variableData']
    return es[0]['variableData']
def res(vd,mode,depth=0):
    """returns (raw_color_dict_or_value, chain)"""
    val=vd.get('value',{})
    if 'colorValue' in val: return val['colorValue'],[]
    if 'alias' in val:
        t=target(val['alias'])
        if not t: return None,['?missing']
        r,ch=res(entry(t,mode),mode,depth+1); return r,[t['name']]+ch
    if 'expressionValue' in val:
        ex=val['expressionValue']
        if ex['expressionFunction']=='COMPOSE_COLOR':
            c,ch=res(ex['expressionArguments'][0],mode,depth+1)
            op,_=res(ex['expressionArguments'][1],mode,depth+1)
            if isinstance(c,dict): c=dict(c); c['a']=op/100.0
            return c,['compose('+(ch[0] if ch else '?')+',%s%%)'%op]
        return None,[ex['expressionFunction']]
    for k in ('floatValue','textValue','boolValue'):
        if k in val: return val[k],[]
    return None,['?']
def show(v,mode):
    r,ch=res(entry(v,mode),mode)
    if isinstance(r,dict): r=hexa(r)
    if isinstance(r,float) and r.is_integer(): r=int(r)
    return r,ch

def setid(name):
    for k,s in sets.items():
        if s.get('name')==name and not s.get('isSoftDeleted') and not s.get('sourceLibraryKey'): return k
    raise SystemExit('No live local variable collection named %r in the Figma file' % name)
