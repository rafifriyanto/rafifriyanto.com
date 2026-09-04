/**
 * Render an HTML or SVG file to PNG at an exact pixel size.
 *
 *   node scripts/render.mjs <in.html|in.svg> <out.png> <width> <height> [scale]
 *
 * Chromium is the only rasteriser on this machine -- there is no rsvg-convert,
 * inkscape or magick, and cairosvg is not installed. Playwright is already a
 * devDependency here for shoot.mjs, so this reuses it rather than adding a tool.
 */
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const [file, out, w, h, scale = '2'] = process.argv.slice(2);
if (!file || !out || !w || !h) {
  console.error('usage: render.mjs <in> <out.png> <width> <height> [scale]');
  process.exit(1);
}

const width = Number(w), height = Number(h);
// Drive the installed Chrome rather than downloading Playwright's own build,
// matching shoot.mjs. The bundled build in the cache is a stale major.
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: Number(scale),
});
await page.goto(pathToFileURL(path.resolve(file)).href, { waitUntil: 'networkidle' });
// Webfonts: networkidle can settle before the faces are actually usable.
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width, height } });
await browser.close();
console.log(`${out}  ${width * scale}x${height * scale}`);
