import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title: Locator;
  readonly products: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);

    this.title = page.locator('.title');
    this.products = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async getProductCount(): Promise<number> {
    return this.products.count();
  }

  async getProductPrices(): Promise<number[]> {
  const prices = await this.page
    .locator('.inventory_item_price')
    .allTextContents();

  return prices.map(price =>
    Number(price.replace('$', ''))
  );
  }

  async addProduct(productName: string) {
    const product = this.products.filter({
      hasText: productName
    });

    await expect(product).toHaveCount(1);

    await product.locator('button').click();
  }

  async removeProduct(productName: string) {
    const product = this.products.filter({
      hasText: productName
    });

    await product.locator('button').click();
  }

  async getCartCount(): Promise<number> {
    if (await this.cartBadge.count() === 0) {
      return 0;
    }

    return Number(await this.getText(this.cartBadge));
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortProducts(option: string) {
    await this.sortDropdown.selectOption(option);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}