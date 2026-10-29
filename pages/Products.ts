import { Locator, Page } from "@playwright/test";
import { nombreProductos } from '../data/testData'

export class Products {
  readonly menFashionButton: Locator
  readonly womenFashionButton: Locator
  readonly kidsFashionButton: Locator
  readonly electronicsButton: Locator
  readonly sortProduct: Locator
  readonly searchProduct: Locator
  readonly productList: Locator
  readonly cart: Locator
  readonly checkoutButton: Locator


  constructor(private page: Page) {
    this.menFashionButton = page.getByTestId('shop-now-mens-wear')
    this.womenFashionButton = page.getByTestId('shop-now-womens-wear')
    this.kidsFashionButton = page.getByTestId('shop-now-kids-wear')
    this.electronicsButton = page.getByTestId('shop-now-electronics')
    this.sortProduct = page.getByTestId('sort-select')
    this.searchProduct = page.getByTestId('search-input')
    this.productList = page.getByTestId('product-list')
    this.cart = page.getByTestId('header-cart-link')
    this.checkoutButton = page.getByTestId('proceed-to-checkout-btn')
  }

  filtro(nombre: string) {
    return this.page.getByRole('checkbox', { name: nombre }).locator('..').getByText(nombre).click()
  }

  async addProductToCart(productName: string) {
    const product = this.productList
      .locator('[data-testid^="product-card-"]')
      .filter({ hasText: productName })

    await product.getByRole('button', { name: `Add ${productName} to cart` }).click()
  }


}