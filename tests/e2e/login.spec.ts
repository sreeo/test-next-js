import { test, expect } from '@playwright/test'

test('Login page initial state', async ({ page }) => {
  await page.goto('http://localhost:3000/login')
  const pageTitle = page.locator('data-test-id=pageTitle')
  await expect(pageTitle).toBeVisible()

  const emailInput = page.locator('data-test-id=emailInput')
  const passwordInput = page.locator('data-test-id=passwordInput')

  const emailPlaceholder = await emailInput.getAttribute('placeholder')
  const passwordPlaceholder = await passwordInput.getAttribute('placeholder')

  await expect(emailPlaceholder).toBe('Enter your email')
  await expect(passwordPlaceholder).toBe('Enter your password')

  const loginButton = page.locator('data-test-id=loginButton')
  console.log('LOGINBUTTON', loginButton)
  await expect(loginButton).toContainText('Login')

  const signInWithGoogle = page.locator('data-test-id=signInWithGoogle')
  const signInWithFacebook = page.locator('data-test-id=signInWithFacebook')

  await expect(signInWithGoogle).toContainText('Continue with Google')
  await expect(signInWithFacebook).toContainText('Continue with Facebook')
})
