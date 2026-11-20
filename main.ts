// The World in One Page — 20 Nov 2026 (make.fun news-image-20261120).
// The entry is a pre-composed 1024x1024 newspaper front page (entry.png, next to
// this file), typeset by compose.py in news-image-20261120-build/ from the day's
// verified wires. This program copies it to the grader's output directory byte for
// byte, so the entry is deterministic: run it twice, get identical bytes.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

copyFileSync(src, dest);

const before = readFileSync(src);
const after = readFileSync(dest);
const digest = (b: Buffer) => createHash('sha256').update(b).digest('hex');
if (digest(before) !== digest(after)) throw new Error('entry.png copy mismatch');
console.log(`entry.png -> ${dest} (${after.length} bytes, sha256 ${digest(after).slice(0, 12)})`);
