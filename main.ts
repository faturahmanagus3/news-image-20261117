// Entry program for make.fun's news-image-20261117 bounty (Node 22, standard library only).
//
// The image this entry submits ships in the repository as entry.png, right
// beside this file (poster.html is the page it was rendered from). The
// grader runs this program offline and reads /output/entry.png, so the
// program's whole job is to copy the shipped image into the output
// directory, byte for byte, every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

copyFileSync(join(repoDir, 'entry.png'), target);
console.log(`entry.png written to ${target}: ${statSync(target).size} bytes`);
