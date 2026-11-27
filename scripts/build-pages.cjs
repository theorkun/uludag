const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'dist');
const output = path.join(root, 'docs');
fs.mkdirSync(output, { recursive: true });
fs.cpSync(source, output, { recursive: true });
fs.writeFileSync(path.join(output, '.nojekyll'), '');
console.log('GitHub Pages files prepared in docs/');
