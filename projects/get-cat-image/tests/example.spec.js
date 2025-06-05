// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_URL = 'http://localhost:5173/'
const PREFIX_IMG = 'https://cataas.com/cat/'

test('Validar que haya imagen y nombre', async ({ page }) => {
  await page.goto(LOCAL_URL)
  const p = await page.locator('h3')
  const img = await page.getByRole('img').first()// hay 2 imagenes en el render
  const img2 = await page.getByRole('img', { name: 'Imagen recomendada para la palabra gato' })

  const textContent = await p.textContent()
  const imgSrc = await img.getAttribute('src')
  const imgSrc2 = await img2.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(PREFIX_IMG)).toBeTruthy()
  await expect(imgSrc2?.startsWith(PREFIX_IMG)).toBe(true)
})
