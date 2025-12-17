import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:8080',
    headless: true,
  },
  webServer: {
    command: 'npm run serve:site',
    url: 'http://localhost:8080',
    timeout: 60_000,
    reuseExistingServer: !process.env.CI,
  },
});
