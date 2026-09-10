import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'config.js'),'utf8'),context);
const c=context.window.LETTER_CONFIG;
if(!c||typeof c.text!=='string'||!c.text.trim())throw Error('text must not be empty');
const count=Array.from(c.text).filter(ch=>! /\s/.test(ch)).length;
if(!Array.isArray(c.imagesByPosition)||c.imagesByPosition.length!==count)throw Error('One image array required per non-space character (use [] for text only)');
let files=0;
for(const pair of c.imagesByPosition){if(!Array.isArray(pair))throw Error('Each position must be an array');for(const name of pair){if(!fs.existsSync(path.join(root,'assets',name)))throw Error('Missing asset: '+name);files++;}}
if(c.backgroundVideo&&!fs.existsSync(path.join(root,c.backgroundVideo)))throw Error('Missing video');
console.log(`Validated ${count} positions and ${files} image references.`);
