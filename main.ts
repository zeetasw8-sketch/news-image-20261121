// The World Today — 21 November 2026 in one image
// (make.fun news-image-20261121).
//
// entry.png is the finished front page: it was drawn ahead of time from
// Saturday's news (Reuters / AP / AFP / BBC / AJP / IANS) with Python and
// Pillow — flat colours, simple pictograms, DejaVu type. This program
// runs with no network, so all it has to do is place that finished image
// at the output path, exactly as it is, and prove the copy is intact.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   # then compare: sha256sum out/entry.png entry.png

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The grader hands us a writable directory; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.png');
if (!existsSync(sourcePath)) {
  throw new Error(`missing bundled image: ${sourcePath}`);
}
const image = readFileSync(sourcePath);

// A real PNG starts with these eight bytes. If the bundled file is not
// a PNG, fail here instead of handing the grader a broken image.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (image.length < PNG_MAGIC.length || !image.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png does not start with the PNG signature');
}
// The rules cap the image at 1 MiB; refuse an oversize bundle outright
// rather than letting the gate reject the entry after the run.
const ONE_MIB = 1024 * 1024;
if (image.length > ONE_MIB) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);
}

const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, image);

// Read the file back and demand a byte-for-byte match: a short or
// corrupted write must fail loudly, not silently grade a broken image.
const written = readFileSync(outPath);
if (!written.equals(image)) {
  throw new Error('output entry.png differs from the bundled entry.png');
}
console.log(`wrote ${outPath} (${written.length} bytes, verified identical)`);
