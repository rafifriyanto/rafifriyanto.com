/**
 * Screenshot every section at a set of breakpoints.
 *
 *   node scripts/shoot.mjs [baseUrl] [outDir]
 *
 * Scroll reveals are forced on before capture, so a shot never comes back
 * blank just because the element had not entered the viewport yet.
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = process.argv[2] ?? 'http://localhost:4330';
const OUT = process.argv[3] ?? 'screenshots';
const SECTIONS = ['hero', 'services', 'work', 'process', 'pricing', 'about', 'contact', 'faq'];
const WIDTHS = [1440, 768, 375];

await mkdir(OUT, { recursive: true });

// Drive the Chrome already installed on this machine rather than downloading
// Playwright's own build.
const browser = await chromium.launch({ channel: 'chrome' });

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate(() =>
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible')),
  );
  // The hero log lines stagger in over ~2.2s; capture after they have landed.
  await page.waitForTimeout(2800);

  for (const section of SECTIONS) {
    const selector = section === 'hero' ? '.hero' : `#${section}`;
    const target = page.locator(selector).first();
    if ((await target.count()) === 0) continue;

    await target.scrollIntoViewIfNeeded();
    await page.waitForTimeout(220);
    await page.screenshot({ path: `${OUT}/${width}-${section}.png` });
    console.log(`${width}px  ${section}`);
  }

  await page.close();
}

await browser.close();
console.log(`\nSaved to ${OUT}/`);
