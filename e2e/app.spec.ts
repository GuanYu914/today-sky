import { test, expect } from '@playwright/test';

test.describe('Today Sky 應用程式', () => {
  test('應該顯示首頁標題和內容', async ({ page }) => {
    await page.goto('/');

    // 檢查標題
    await expect(page.getByRole('heading', { name: 'Today Sky' })).toBeVisible();

    // 檢查副標題
    await expect(page.getByText('View the sky from anywhere in the world')).toBeVisible();

    // 檢查功能標籤
    await expect(page.getByText(/Location Search/)).toBeVisible();
    await expect(page.getByText(/Live Weather/)).toBeVisible();
    await expect(page.getByText(/Wallpaper Mode/)).toBeVisible();
  });

  test('應該有響應式設計', async ({ page }) => {
    // 測試桌面尺寸
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Today Sky' })).toBeVisible();

    // 測試平板尺寸
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByRole('heading', { name: 'Today Sky' })).toBeVisible();

    // 測試手機尺寸
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('heading', { name: 'Today Sky' })).toBeVisible();
  });
});
