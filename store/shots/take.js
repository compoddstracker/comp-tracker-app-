// Takes iPhone 6.9" App Store screenshots (1320 x 2868) of the live site as the app shows it.
const { chromium, devices } = require('playwright');
const pages = [
  ['1-home', '/'],
  ['2-big-prizes', '/big-prizes'],
  ['3-all-comps', '/all-comps'],
  ['4-trusted-sites', '/trusted-sites'],
  ['5-codes', '/codes'],
  ['6-quick-fill', '/my-details'],
];
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 15 Pro Max'], viewport: { width: 440, height: 956 }, deviceScaleFactor: 3 });
  const p = await ctx.newPage();
  await p.goto('https://compoddstracker.co.uk/?src=app', { waitUntil: 'networkidle' });
  await p.waitForTimeout(9000);
  for (const [name, path] of pages) {
    await p.goto('https://compoddstracker.co.uk' + path, { waitUntil: 'networkidle' });
    await p.waitForTimeout(7000);
    // close any intro / pop-up so the page itself shows
    await p.keyboard.press('Escape').catch(() => {});
    await p.waitForTimeout(800);
    await p.screenshot({ path: `store/shots/out/${name}.png` });
    console.log('shot', name);
  }
  await b.close();
})();
