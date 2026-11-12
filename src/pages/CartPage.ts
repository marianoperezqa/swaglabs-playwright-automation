import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton =
      page.locator('#continue-shopping');
  }

  async getItemCount(): Promise<number> {
    return this.cartItems.count();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async removeProduct(productName: string) {
    const item = this.cartItems.filter({
      hasText: productName
    });

    await item.locator('button').click();
  }
}