import {  expect } from '@playwright/test';

import { test } from '../auth.setup' //

test('has title', async ({ page, auth }) => {

  await page.goto('/', { waitUntil: 'networkidle' })
  await auth.login(page) // <-- we need to pass in the pag
  
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, auth }) => {
  await page.goto('https://playwright.dev/');
  await auth.login(page) // <-- we need to pass in the pag

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
