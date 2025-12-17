import { statSync, readdirSync } from 'fs';
import path from 'path';

const root = path.resolve(process.cwd(), '_site');
const cssDir = path.join(root, 'styles');
const jsDir = path.join(root, 'js');

function sumDir(dir, ext) {
  let total = 0;
  try {
    for (const f of readdirSync(dir)) {
      if (ext && !f.endsWith(ext)) continue;
      const s = statSync(path.join(dir, f));
      if (s.isFile()) total += s.size;
    }
  } catch {}
  return total;
}

const cssBytes = sumDir(cssDir, '.css');
const jsBytes = sumDir(jsDir, '.js');

const kb = n => Math.round(n / 1024);

const limits = {
  cssKB: 350,
  jsKB: 200,
};

console.log(`CSS: ${kb(cssBytes)} KB (limit ${limits.cssKB} KB)`);
console.log(` JS: ${kb(jsBytes)} KB (limit ${limits.jsKB} KB)`);

let failed = false;
if (kb(cssBytes) > limits.cssKB) { console.error('CSS bundle too large'); failed = true; }
if (kb(jsBytes) > limits.jsKB) { console.error('JS bundle too large'); failed = true; }

process.exit(failed ? 1 : 0);
