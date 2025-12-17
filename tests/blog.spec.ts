import { test, expect } from '@playwright/test';

test('blog index lists posts and open a detail', async ({ page }) => {
  await page.goto('/blog/');
  await expect(page.getByRole('heading', { name: /Blog|Resources|Articles/i })).toBeVisible();
  const firstPost = page.locator('a[href^="/blog/"]').first();
  const href = await firstPost.getAttribute('href');
  await firstPost.click();
  await expect(page).toHaveURL(href!);
  await expect(page.getByRole('heading')).toBeVisible();
});
