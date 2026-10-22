// Re-transpile the listed components into _ds_bundle.js. Existing sections are replaced in place;
// new components are appended and registered in the bundle header and on window.<namespace>.
import { transformSync } from 'esbuild';
import fs from 'fs';
const ROOT = process.env.FREED_DS_ROOT;
const COMPONENTS = [
  ['components/cards/Card.jsx', 'Card'],
  ['components/icons/Icon.jsx', 'Icon'],
  ['components/tags/Tag.jsx', 'Tag'],
  ['components/buttons/Button.jsx', 'Button'],
  ['components/logos/Logo.jsx', 'Logo'],
];
let bundle = fs.readFileSync(ROOT + '/_ds_bundle.js', 'utf8');
const ns = JSON.parse(bundle.match(/^\/\* @ds-bundle: (.*?) \*\//)[1]);
for (const [path, name] of COMPONENTS) {
  let src = fs.readFileSync(ROOT + '/' + path, 'utf8');
  src = src.replace(/^import .*?;\s*$/mg, '').replace(/^export (function|const|class) /mg, '$1 ').replace(/^export default .*$/mg, '');
  const out = transformSync(src, { loader: 'jsx', jsx: 'transform', jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment', target: 'es2019', sourcefile: path }).code;
  const head = '// ' + path + '\ntry { (() => {\n';
  const reg = 'Object.assign(__ds_scope, { ' + name + ' });';
  const start = bundle.indexOf(head);
  if (start >= 0) {
    const end = bundle.indexOf(reg, start);
    bundle = bundle.slice(0, start) + head + out + '\n' + bundle.slice(end);
  } else {
    const section = head + out + '\n' + reg + '\n})(); } catch (e) { __ds_ns.__errors.push({ path: "' + path + '", error: String((e && e.message) || e) }); }\n\n';
    const at = bundle.indexOf('__ds_ns.' + ns.components[0].name + ' = __ds_scope.');
    bundle = bundle.slice(0, at) + section + bundle.slice(at);
    bundle = bundle.replace(/\n\}\)\(\);\s*$/, '\n__ds_ns.' + name + ' = __ds_scope.' + name + ';\n\n})();\n');
    ns.components.push({ name, sourcePath: path });
  }
}
bundle = bundle.replace(/^\/\* @ds-bundle: .*? \*\//, '/* @ds-bundle: ' + JSON.stringify(ns) + ' */');
bundle = bundle.split('var(--green-0, #62E774)').join('var(--text-annotations-primary, #62E774)');
if (/<\/script|<!--/i.test(bundle)) throw new Error('forbidden sequence in bundle');
fs.writeFileSync(ROOT + '/_ds_bundle.js', bundle);
console.log('ok', bundle.length, ns.components.map(c => c.name).join(', '));
