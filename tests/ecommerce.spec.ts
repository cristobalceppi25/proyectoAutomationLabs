import { test, expect } from '@playwright/test'
import { UserData } from '../pages/UserData'
import { userInvalidData, userLoginInvalidData, userLoginValidData, userValidData, filtros, sortProducts, nombreProductos } from '../data/testData'
import { UserLogin } from '../pages/UserLogin'
import { Products } from '../pages/Products'
import { UserDataCheckout } from '../pages/Checkout'
let userData: UserData
let userLogin: UserLogin
let products: Products
let userDataCheckout: UserDataCheckout


test.beforeEach(async ({ page }) => {
  userData = new UserData(page)
  userLogin = new UserLogin(page)
  products = new Products(page)
  userDataCheckout = new UserDataCheckout(page)
  console.log(`Test: ${test.info().title}`)
  await page.goto('https://shop.qaautomationlabs.com/')
})

test('TC-001 Creación de cuenta exitoso', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userValidData.dob)
  await userData.userCountry.selectOption(userValidData.country)
  await userData.userPassword.fill(userValidData.password)
  await userData.userConfirmPassword.fill(userValidData.confirmPassword)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-success-message')).toContainText('Registration successful! Redirecting to login page...')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-002 Campo [nombre] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.registerButton.click()
  await expect(page.getByTestId('register-firstname-error')).toContainText('Please enter your first name.')
})

test('TC-003 Campo [apellido en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-lastname-error')).toContainText('Please enter your last name.')
})


test('TC-004 Campo [email] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-email-error')).toContainText('Please enter your email.')
})

test('TC-005 Formato email incorrecto en el campo [email]', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userInvalidData.email)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-email-error')).toContainText('Please enter a valid email address.')
})

test('TC-006 Campo [teléfono] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-phone-error')).toContainText('Please enter your telephone number.')
})


test('TC-008 Campo [género] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-gender-error')).toContainText('Please select your gender.')
})

test('TC-009 Campo [Fecha de cumpleaños] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.registerButton.click()
  await expect(page.getByTestId('register-dob-error')).toContainText('Please select your date of birth.')
})

test('TC-010 Fecha de cumpleaños posterior a fecha actual', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userInvalidData.dob)
  await userData.userCountry.selectOption(userValidData.country)
  await userData.userPassword.fill(userValidData.password)
  await userData.userConfirmPassword.fill(userValidData.confirmPassword)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-success-message')).toContainText('Registration successful! Redirecting to login page...')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-011 Campo [país] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userValidData.dob)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-country-error')).toContainText('Please select your country.')
})

test('TC-012 Campo [contraseña] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userValidData.dob)
  await userData.userCountry.selectOption(userValidData.country)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-password-error')).toContainText('Please enter your password.')
})

test('TC-013 Contraseña débil', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userValidData.dob)
  await userData.userCountry.selectOption(userValidData.country)
  await userData.userPassword.fill(userInvalidData.password)
  await expect(page.getByTestId('register-password-strength')).toContainText('Password strength: Weak')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-014 Campo [confirmación de contraseña] en blanco', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userValidData.dob)
  await userData.userCountry.selectOption(userValidData.country)
  await userData.userPassword.fill(userValidData.password)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-confirm-password-error')).toContainText('Please confirm your password.')
})


test('TC-015 Ambas contraseñas son distintas', async ({ page }) => {
  await userData.gotoPageButton.click()
  await userData.userFirstName.fill(userValidData.name)
  await userData.userLastName.fill(userValidData.lastName)
  await userData.userEmail.fill(userValidData.email)
  await userData.userPhone.fill(userValidData.phone)
  await userData.userGender.click()
  await userData.userDoB.fill(userValidData.dob)
  await userData.userCountry.selectOption(userValidData.country)
  await userData.userPassword.fill(userValidData.password)
  await userData.userConfirmPassword.fill(userInvalidData.password)
  await userData.registerButton.click()
  await expect(page.getByTestId('register-confirm-password-error')).toContainText('Passwords do not match.')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-016 Login exitoso', async ({ page }) => {
  await userLogin.userLogin()
  await expect(page).toHaveURL('https://shop.qaautomationlabs.com/shop.php')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})


test('TC-017 Campo [email] en blanco en el login', async ({ page }) => {
  await userLogin.loginButton.click()
  await expect(page.getByTestId('login-email-error')).toContainText('Please enter your email.')
})

test('TC-018 Ingresar un formato de email incorrecto', async ({ page }) => {
  await userLogin.userEmail.fill('demo@')
  await userLogin.userPassword.fill(userLoginValidData.password)
  await userLogin.loginButton.click()
  await expect(page.getByTestId('login-email-error')).toContainText('Please enter a valid email address.')
})

test('TC-019 Campo [contraseña] en blanco', async ({ page }) => {
  await userLogin.userEmail.fill(userLoginValidData.email)
  await userLogin.loginButton.click()
  await expect(page.getByTestId('login-password-error')).toContainText('Please enter your password.')
})

test('TC-020 Email y contraseña inválidos', async ({ page }) => {
  await userLogin.userEmail.fill(userLoginInvalidData.email)
  await userLogin.userPassword.fill(userLoginInvalidData.password)
  await userLogin.loginButton.click()
  await expect(page.getByTestId('login-error-message')).toContainText('Invalid email or password!')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-021 Productos en Mens Fashion visibles', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  const filterSize = page.getByTestId('product-list')
  const count = await filterSize.count()
  expect(count).toBeGreaterThanOrEqual(1)
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-022 Filtrar por categoría [Footwear]', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.filtro(filtros.tipo.Footwear)
  await page.waitForLoadState('networkidle')

  const categories = page.getByTestId('product-list').locator('[data-testid^="product-category-"]')


  const count = await categories.count()

  expect(count).toBeGreaterThan(0)
  for (let i = 0; i < await categories.count(); i++) {
    await expect(categories.nth(i)).toHaveText('Men - Footwear')
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })

})

test('TC-023 Filtrar por precio', async ({ page }) => {
  await userLogin.userLogin()
  await products.womenFashionButton.click()
  await products.filtro(filtros.precio.b)
  await page.waitForLoadState('networkidle')
  const filterPrice = page.getByTestId('product-list').locator('[data-testid^="product-price-"]')

  const count = await filterPrice.count()

  expect(count).toBeGreaterThan(0)
  for (let i = 0; i < await filterPrice.count(); i++) {
    const priceText = await filterPrice.nth(i).textContent()
    const price = Number(priceText?.replace('$', ''))

    expect(price).toBeGreaterThanOrEqual(101)
    expect(price).toBeLessThanOrEqual(200)
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-024 Filtrar por talla', async ({ page }) => {
  await userLogin.userLogin()

  await products.kidsFashionButton.click()
  await products.filtro(filtros.tamaño.Medium)

  await page.waitForLoadState('networkidle')
  const filterSize = page.getByTestId('product-list').locator('[data-testid^="product-meta-"]')

  const count = await filterSize.count()

  expect(count).toBeGreaterThan(0)

  for (let i = 0; i < count; i++) {
    await expect(filterSize.nth(i)).toContainText('Size: M')
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-025 Filtrar por color', async ({ page }) => {
  await userLogin.userLogin()

  await products.kidsFashionButton.click()
  await products.filtro(filtros.color.Green)

  await page.waitForLoadState('networkidle')
  const filterSize = page.getByTestId('product-list').locator('[data-testid^="product-meta-"]')

  const count = await filterSize.count()

  expect(count).toBeGreaterThan(0)

  for (let i = 0; i < count; i++) {
    await expect(filterSize.nth(i)).toContainText('Color: Green')
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-026 Filtrar por marca', async ({ page }) => {
  await userLogin.userLogin()
  await products.electronicsButton.click()
  await products.filtro(filtros.marca.Samsung)
  await page.waitForLoadState('networkidle')
  const filterBrand = page.getByTestId('product-list').locator('[data-testid^="product-name-"]')
  const count = await filterBrand.count()

  expect(count).toBeGreaterThan(0)

  for (let i = 0; i < count; i++) {
    await expect(filterBrand.nth(i)).toContainText('Samsung')
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-027 Filtrar por categoría [Footwear] y precio entre $201 y $300', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.filtro(filtros.tipo.Footwear)
  await products.filtro(filtros.precio.c)
  await page.waitForLoadState('networkidle')

  const categories = page.getByTestId('product-list').locator('[data-testid^="product-category-"]')
  const filterPrice = page.getByTestId('product-list').locator('[data-testid^="product-price-"]')
  const count = await categories.count()

  expect(count).toBeGreaterThan(0)
  for (let i = 0; i < await categories.count(); i++) {
    await expect(categories.nth(i)).toHaveText('Men - Footwear')
  }
  expect(count).toBeGreaterThan(0)
  for (let i = 0; i < await filterPrice.count(); i++) {
    const priceText = await filterPrice.nth(i).textContent()
    const price = Number(priceText?.replace('$', ''))
    expect(price).toBeGreaterThanOrEqual(201)
    expect(price).toBeLessThanOrEqual(300)
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-028 Ordenar precios de menor a mayor en Mens Fashion', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.sortProduct.selectOption(sortProducts.price_asc)
  await page.waitForLoadState('networkidle')
  const prices = page
    .getByTestId('product-list')
    .locator('[data-testid^="product-price-"]')

  const count = await prices.count()

  expect(count).toBeGreaterThan(0)

  for (let i = 0; i < count - 1; i++) {
    const currentPrice = Number((await prices.nth(i).textContent())?.replace('$', ''))
    const nextPrice = Number((await prices.nth(i + 1).textContent())?.replace('$', ''))
    expect(currentPrice).toBeLessThanOrEqual(nextPrice)
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-029 Ordenar productos por orden alfabético Mens Fashion', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.sortProduct.selectOption(sortProducts.name_asc)
  await page.waitForLoadState('networkidle')
  const productNames = page
    .getByTestId('product-list')
    .locator('[data-testid^="product-name-"]')

  const count = await productNames.count()

  expect(count).toBeGreaterThan(0)

  for (let i = 0; i < count - 1; i++) {
    const currentName = (await productNames.nth(i).textContent())?.trim() ?? ''
    const nextName = (await productNames.nth(i + 1).textContent())?.trim() ?? ''

    expect(currentName.localeCompare(nextName)).toBeLessThanOrEqual(0)
  }
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-030 Búsqueda de producto', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.searchProduct.fill('Black Short')
  await page.waitForLoadState('networkidle')
  await expect(page.getByTestId('product-list').locator('[data-testid^="product-name-"]')).toContainText('Black Short')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-031 Ver el detalle completo de un producto', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  const name = await page.getByTestId('product-name-21').textContent()
  await page.getByTestId('product-name-21').click()
  await expect(page.getByTestId('product-detail-name')).toContainText(`${name}`)
})

test('TC-032 Añadir un producto al carro de compra', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await expect(page.locator('[data-testid^="cart-item-name-"]')).toContainText(`${nombreProductos.polera_blanca}`)
})

test('TC-033 Icono carro de compras muestra cantidad de productos comprados', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await expect(page.getByTestId('header-cart-count')).toContainText("1")
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-034 Carro de compras vacío', async ({ page }) => {
  await userLogin.userLogin()
  await products.cart.click()
  await expect(page.getByTestId('cart-table')).toContainText('Your Cart is Empty')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-035 Aumentar cantidad de un producto', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_verde)
  await products.cart.click()
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_verde}` }).fill("2")
  await expect(page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_verde}` })).toHaveValue("2")
})

test('TC-036 Disminuir la cantidad de un producto', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_verde)
  await products.addProductToCart(nombreProductos.polera_verde)
  await products.cart.click()
  await page.screenshot({ path: `screenshots/${test.info().title}_antes.png` })
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_verde}` }).fill("1")
  await expect(page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_verde}` })).toHaveValue("1")
  await page.screenshot({ path: `screenshots/${test.info().title}_después.png` })
})

test('TC-037 Producto con cantidad 0', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_verde)
  await products.cart.click()
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_verde}` }).fill("0")
  await page.getByTestId('cart-table').click()
  await page.screenshot({ path: `screenshots/${test.info().title}_cart.png` })
  await products.checkoutButton.click()
  await page.screenshot({ path: `screenshots/${test.info().title}_checkout.png` })
})

test('TC-038 Quitar un  producto del carro', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.addProductToCart(nombreProductos.polera_negra)
  await products.cart.click()
  await page.screenshot({ path: `screenshots/${test.info().title}_dosProductos.png` })
  await page.getByRole('button', { name: `Remove ${nombreProductos.polera_blanca} from cart` }).click()
  await expect(page.getByTestId('cart-table')).toContainText(`${nombreProductos.polera_negra}`)
  await expect(page.getByTestId('cart-table')).not.toContainText(`${nombreProductos.polera_blanca}`)
  await page.screenshot({ path: `screenshots/${test.info().title}_unProducto.png` })
})

test('TC-039 Datos del producto se conservan al agregarlo al carro', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await expect(page.getByTestId('cart-table').locator('[data-testid^="cart-item-name-"]')).toContainText(`${nombreProductos.polera_blanca}`)
  await expect(page.getByTestId('cart-table').locator('[data-testid^="cart-item-price-"]')).toContainText(`$500`)
})

test('TC-040 Total del producto se actualiza en el carro de compra', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await page.screenshot({ path: `screenshots/${test.info().title}_cantidad_1.png` })
  const price = Number((await page.locator('[data-testid^="cart-item-total-"]').textContent())?.replace('$', ''))
  const quantity = 3
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_blanca}` }).fill(`${quantity}`)
  await page.getByTestId('cart-table').click()
  const total = Number((await page.locator('[data-testid^="cart-item-total-"]').textContent())?.replace('$', ''))
  await expect(quantity * price).toBe(total)
  await page.screenshot({ path: `screenshots/${test.info().title}_cantidad_3.png` })
})

test('TC-041 Total de la compra se actualiza en el carro de compras', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.addProductToCart(nombreProductos.polera_negra)
  await products.cart.click()
  await page.screenshot({ path: `screenshots/${test.info().title}_antes.png` })
  const quantity = 4
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_negra}` }).fill(`${quantity}`)
  await page.getByTestId('cart-table').click()
  const total1 = Number((await page.locator('[data-testid^="cart-item-total-"]').nth(0).textContent())?.replace('$', ''))
  const total2 = Number((await page.locator('[data-testid^="cart-item-total-"]').nth(1).textContent())?.replace('$', ''))
  const totalProducto = total1 + total2
  await expect(page.getByTestId('cart-total')).toContainText(`Total: $${totalProducto}`)
  await page.screenshot({ path: `screenshots/${test.info().title}_después.png` })
})

test('TC-042 Ver página de checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await expect(page).toHaveURL('https://shop.qaautomationlabs.com/checkout.php')
})

test('TC-043 Campo [nombre] vacío en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-firstname-error')).toContainText('Please enter your first name.')
})

test('TC-044 Campo [apellido] en blanco en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-lastname-error')).toContainText('Please enter your last name.')
})

test('TC-045 Campo [email] en blanco en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-email-error')).toContainText('Please enter your email.')
})

test('TC-046 Formato de email inválido en el campo [email] en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.userEmail.fill(userInvalidData.email)
  await userDataCheckout.continueButton.click()
})

test('TC-047 Campo [teléfono] en blanco en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.userEmail.fill(userValidData.email)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-phone-error')).toContainText('Please enter your phone number.')
})


test('TC-049 Campo [dirección] vacío en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.userEmail.fill(userValidData.email)
  await userDataCheckout.userPhone.fill(userValidData.phone)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-address-error')).toContainText('Please enter your address.')
})

test('TC-050 Campo [estado] en vacío en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.userEmail.fill(userValidData.email)
  await userDataCheckout.userPhone.fill(userValidData.phone)
  await userDataCheckout.userAddress.fill(userValidData.address)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-state-error')).toContainText('Please enter your state.')
})

test('TC-051 Campo [ciudad] vacío en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.userEmail.fill(userValidData.email)
  await userDataCheckout.userPhone.fill(userValidData.phone)
  await userDataCheckout.userAddress.fill(userValidData.address)
  await userDataCheckout.userState.fill(userValidData.state)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-city-error')).toContainText('Please enter your city.')
})

test('TC-052 Campo [pin code] vacío en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userFirstName.fill(userValidData.name)
  await userDataCheckout.userLastName.fill(userValidData.lastName)
  await userDataCheckout.userEmail.fill(userValidData.email)
  await userDataCheckout.userPhone.fill(userValidData.phone)
  await userDataCheckout.userAddress.fill(userValidData.address)
  await userDataCheckout.userState.fill(userValidData.state)
  await userDataCheckout.userCity.fill(userValidData.city)
  await userDataCheckout.continueButton.click()
  await expect(page.getByTestId('checkout-pincode-error')).toContainText('Please enter your pincode.')
})


test('TC-054 Datos del producto se conservan al llegar al checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  const name = await page.getByTestId('cart-table').locator('[data-testid^="cart-item-name-"]').nth(0).textContent()
  const price = Number((await page.getByTestId('cart-table').locator('[data-testid^="cart-item-price-"]').nth(0).textContent())?.replace('$', ''))
  console.log(name)
  console.log(price)
  await products.checkoutButton.click()
  await expect(page.getByTestId('checkout-cart-table').locator('[data-testid^="checkout-item-name-"]')).toContainText(`${name}`)
  await expect(page.getByTestId('checkout-cart-table').locator('[data-testid^="checkout-item-price-"]')).toContainText(`$${price}`)
})

test('TC-055 Total de la compra en el checkout', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.addProductToCart(nombreProductos.polera_negra)
  await products.cart.click()
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_negra}` }).fill("4")
  await page.getByTestId('cart-table').click()
  const total = Number((await page.getByTestId('cart-total').textContent())?.replace('Total: $', ''))
  await products.checkoutButton.click()
  await expect(page.getByTestId('order-total')).toContainText(`$${total}`)
})

test('TC-056 Ver página de confirm details', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userDataCheckout()
  await expect(page).toHaveURL('https://shop.qaautomationlabs.com/confirm.php')
})

test('TC-057 Datos del producto se conservan al llegar a confirm details', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  const name = await page.getByTestId('checkout-cart-table').locator('[data-testid^="checkout-item-name-"]').nth(0).textContent()
  const quantity = await page.getByTestId('checkout-cart-table').locator('[data-testid^="checkout-item-qty-"]').nth(0).textContent()
  const price = Number((await page.getByTestId('checkout-cart-table').locator('[data-testid^="checkout-item-price-"]').nth(0).textContent())?.replace('$', ''))
  await userDataCheckout.userDataCheckout()
  await expect(page.getByTestId('confirm-cart-table').locator('[data-testid^="confirm-item-name-"]')).toContainText(`${name}`)
  await expect(page.getByTestId('confirm-cart-table').locator('[data-testid^="confirm-item-price-"]')).toContainText(`$${price}`)
  await expect(page.getByTestId('confirm-cart-table').locator('[data-testid^="confirm-item-qty-"]')).toContainText(`${quantity}`)
})


test('TC-058 Total de la compra se mantiene en el confirm details', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.addProductToCart(nombreProductos.polera_negra)
  await products.cart.click()
  const quantity = 4
  await page.getByRole('spinbutton', { name: `Quantity for ${nombreProductos.polera_negra}` }).fill(`${quantity}`)
  await page.getByTestId('cart-table').click()
  await products.checkoutButton.click()
  const total = Number((await page.getByTestId('order-total').textContent())?.replace('$', ''))
  await userDataCheckout.userDataCheckout()
  await expect(page.getByTestId('order-total')).toContainText(`$${total}`)
})

test('TC-059 Datos de usuario se mantienen entre el checkout y confirm details', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userDataCheckout()
  await expect(page.getByTestId("confirm-firstname")).toContainText(userValidData.name)
  await expect(page.getByTestId("confirm-lastname")).toContainText(userValidData.lastName)
  await expect(page.getByTestId("confirm-email")).toContainText(userValidData.email)
  await expect(page.getByTestId("confirm-phone")).toContainText(userValidData.phone)
  await expect(page.getByTestId("confirm-address")).toContainText(userValidData.address)
  await expect(page.getByTestId("confirm-state")).toContainText(userValidData.state)
  await expect(page.getByTestId("confirm-city")).toContainText(userValidData.city)
  await expect(page.getByTestId("confirm-pincode")).toContainText(userValidData.pin_code)
})

test('TC-060 Flujo completo de una compra', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userDataCheckout()
  await userDataCheckout.finishButton.click()
  await expect(page).toHaveURL('https://shop.qaautomationlabs.com/thanks.php')
  await page.screenshot({ path: `screenshots/${test.info().title}.png` })
})

test('TC-061 Mensaje de confirmación de compra', async ({ page }) => {
  await userLogin.userLogin()
  await products.menFashionButton.click()
  await products.addProductToCart(nombreProductos.polera_blanca)
  await products.cart.click()
  await products.checkoutButton.click()
  await userDataCheckout.userDataCheckout()
  await userDataCheckout.finishButton.click()
  await expect(page.getByTestId('order-success-title')).toContainText('🎉 Thank You for Your Order!')
  await expect(page.getByTestId('order-success-message')).toContainText('Your order has been placed successfully.')
})


