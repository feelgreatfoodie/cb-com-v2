const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to localhost
  await page.goto('http://localhost:3000');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Scroll to the Evidence section
  await page.evaluate(() => {
    const evidenceSection = document.querySelector('#evidence');
    if (evidenceSection) {
      evidenceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Wait a bit for animations
  await page.waitForTimeout(2000);

  // Take a screenshot of the Open Source section
  const openSourceSection = await page.locator('text=Open Source').locator('..').locator('..');
  await openSourceSection.screenshot({ path: 'ghost-bubbles-test.png' });

  console.log('Screenshot saved to ghost-bubbles-test.png');

  await browser.close();
})();
