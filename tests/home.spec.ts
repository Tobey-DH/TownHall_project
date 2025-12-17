import { test, expect } from '@playwright/test';

test('home loads and has primary CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /AI Education for/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /View Upcoming Events/i })).toBeVisible();
});

test('navigate to events page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /View Upcoming Events/i }).click();
  await expect(page).toHaveURL(/\/events\/?$/);
  await expect(page.getByRole('heading', { name: /Events/i })).toBeVisible();
});
