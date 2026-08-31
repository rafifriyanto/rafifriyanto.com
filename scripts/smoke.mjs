/**
 * Smoke test the interactive bits against a running server.
 *
 *   node scripts/smoke.mjs [baseUrl]
 *
 * Exits non-zero on the first failure so it can gate a deploy.
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:4321';
const browser = await chromium.launch({ channel: 'chrome' });
let failures = 0;

const check = (name, pass, detail = '') => {
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  — ${detail}` : ''}`);
  if (!pass) failures += 1;
};

// --- mobile nav drawer ---
{
  const page = await browser.newPage({ viewport: { width: 375, height: 800 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });

  const drawer = page.locator('[data-nav-drawer]');
  const toggle = page.locator('[data-nav-toggle]');

  check('drawer starts closed', await drawer.isHidden());
  await toggle.click();
  check('drawer opens on tap', await drawer.isVisible());
  check('toggle reports expanded', (await toggle.getAttribute('aria-expanded')) === 'true');

  await page.keyboard.press('Escape');
  check('Escape closes drawer', await drawer.isHidden());

  await toggle.click();
  await page.locator('[data-nav-close]').first().click();
  check('picking a link closes drawer', await drawer.isHidden());

  await page.close();
}

// --- FAQ accordion ---
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });

  const first = page.locator('#faq details').first();
  check('FAQ starts collapsed', !(await first.getAttribute('open')));
  await first.locator('summary').click();
  check('FAQ opens on click', (await first.getAttribute('open')) !== null);

  await page.close();
}

// --- language switch ---
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });

  check('ID page lang attribute', (await page.locator('html').getAttribute('lang')) === 'id');
  await page.locator('.lang__opt', { hasText: 'EN' }).click();
  await page.waitForLoadState('networkidle');
  check('EN page lang attribute', (await page.locator('html').getAttribute('lang')) === 'en');
  check('EN headline rendered', (await page.locator('#hero-title').innerText()).includes('System'));

  await page.close();
}

// --- contact form validation ---
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });

  await page.locator('[data-contact-form] [data-submit]').click();
  const invalid = await page.evaluate(
    () => document.querySelectorAll('[data-contact-form] :invalid').length,
  );
  check('empty form is rejected', invalid > 0, `${invalid} invalid fields`);

  await page.close();
}

await browser.close();
console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
