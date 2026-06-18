import { expect, test } from "@playwright/test";

test("home page shows the Vericus workspace and backend health", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Vericus" })).toBeVisible();
  await expect(page.getByText("Evidence-driven workspace")).toBeVisible();
  await expect(page.getByText("Connected")).toBeVisible();
  await expect(page.getByText('"status": "ok"')).toBeVisible();
  await expect(page.getByText('"backend": "django"')).toBeVisible();
  await expect(page.getByText('"api": "drf"')).toBeVisible();

  const screenshot = await page.screenshot({ fullPage: true });
  expect(screenshot.length).toBeGreaterThan(0);
});
