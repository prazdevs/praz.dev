import { expect, test } from '@playwright/test'
import Axe from '@axe-core/playwright'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('automated a11y checks', async ({ page }) => {
  const results = await new Axe({ page }).analyze()
  expect(results.violations).toEqual([])
})

test.describe('social links', () => {
  test('twitter link works', async ({ page }) => {
    await page.context().route('https://twitter.com/**', route => route.fulfill({
      body: '<html><body><h1>Twitter</h1></body></html>',
    }))
    const [twitterPage] = await Promise.all([
      page.waitForEvent('popup'),
      await page.getByRole('link', { name: 'Twitter' }).click(),
    ])
    await expect(twitterPage).toHaveURL('https://twitter.com/prazdevs')
  })

  test('linkedin link works', async ({ page }) => {
    await page.context().route('https://www.linkedin.com/**', route => route.fulfill({
      body: '<html><body><h1>LinkedIn</h1></body></html>',
    }))
    const [linkedinPage] = await Promise.all([
      page.waitForEvent('popup'),
      await page.getByRole('link', { name: 'LinkedIn' }).click(),
    ])
    await expect(linkedinPage).toHaveURL('https://www.linkedin.com/in/sachabouillez')
  })

  test('github link works', async ({ page }) => {
    await page.context().route('https://www.github.com/**', route => route.fulfill({
      body: '<html><body><h1>GitHub</h1></body></html>',
    }))
    const [githubPage] = await Promise.all([
      page.waitForEvent('popup'),
      await page.getByRole('link', { name: 'GitHub' }).click(),
    ])
    await expect(githubPage).toHaveURL('https://github.com/prazdevs')
  })
})

test.describe('tech links', () => {
  test('nuxt link works', async ({ page }) => {
    await page.context().route('https://nuxt.com/**', route => route.fulfill({
      body: '<html><body><h1>Nuxt</h1></body></html>',
    }))
    const [nuxtPage] = await Promise.all([
      page.waitForEvent('popup'),
      await page.getByRole('link', { name: 'Nuxt' }).click(),
    ])
    await expect(nuxtPage).toHaveURL('https://nuxt.com')
  })

  test('netlify link works', async ({ page }) => {
    await page.context().route('https://nuxt.com/**', route => route.fulfill({
      body: '<html><body><h1>Netlify</h1></body></html>',
    }))
    const [netlifyPage] = await Promise.all([
      page.waitForEvent('popup'),
      await page.getByRole('link', { name: 'Netlify' }).click(),
    ])
    await expect(netlifyPage).toHaveURL('https://www.netlify.com')
  })
})
