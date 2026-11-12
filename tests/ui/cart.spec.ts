import { test, expect } from '../../src/fixtures/testFixtures';
import { users } from '../../src/data/users';
import { products } from '../../src/data/products';

test.describe('Swag Labs - Shopping Cart', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );
  });

  test('TC_CART_001 - Add multiple products', async ({
    inventoryPage
  }) => {
    await inventoryPage.addProduct(products.backpack);
    await inventoryPage.addProduct(products.bikeLight);

    expect(await inventoryPage.getCartCount()).toBe(2);
  });

  test('TC_CART_002 - Remove product from cart', async ({
    inventoryPage,
    cartPage,
    page
  }) => {
    await inventoryPage.addProduct(products.backpack);
    await inventoryPage.openCart();

    await cartPage.removeProduct(products.backpack);

    expect(await cartPage.getItemCount()).toBe(0);
  });

  test('TC_CART_003 - Verify cart contents', async ({
    inventoryPage,
    cartPage
  }) => {
    await inventoryPage.addProduct(products.backpack);
    await inventoryPage.openCart();

    await expect(cartPage.cartItems)
      .toContainText(products.backpack);
  });

});