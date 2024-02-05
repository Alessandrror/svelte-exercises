import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible()
})

test('index page has a paragraph', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('paragraph')).toContainText('Visit kit.svelte.dev to read the documentation')
})
