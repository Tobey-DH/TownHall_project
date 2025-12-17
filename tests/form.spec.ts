import { test, expect } from '@playwright/test';

// Intercept external webhooks so tests don't post outward.
const interceptWebhooks = async (page) => {
  await page.route(/discord(app)?\.com\/api\/webhooks\//, route => route.fulfill({ status: 204 }));
  await page.route(/hooks\.zapier\.com\/hooks\/catch\//, route => route.fulfill({ status: 200, body: '{}' }));
};

test('volunteer form happy path shows success banner', async ({ page }) => {
  await interceptWebhooks(page);
  await page.goto('/get-involved/');
  await page.fill('#vol-name', 'Test User');
  await page.fill('#vol-email', 'test@example.com');
  await page.selectOption('#vol-role', 'instructor');
  await page.fill('#vol-experience', 'Some experience');
  await page.click('button[type="submit"]');
  await expect(page.locator('#volunteer-success')).toBeVisible();
});
