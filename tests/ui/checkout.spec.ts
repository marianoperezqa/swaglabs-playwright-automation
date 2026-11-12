import { test, expect } from '../../src/fixtures/testFixtures';
import { users } from '../../src/data/users';
import { products } from '../../src/data/products';

test.describe('Swag Labs - Checkout', () => {

  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.open();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await inventoryPage.addProduct(products.backpack);
    await inventoryPage.openCart();
  });

  test('TC_CHECKOUT_001 - Complete purchase', async ({
    cartPage,
    checkoutPage
  }) => {
    await cartPage.checkout();

    await checkoutPage.enterCustomerInformation(
      'John',
      'Doe',
      '10001'
    );

    await expect(checkoutPage.finishButton)
      .toBeVisible();

    await checkoutPage.finishOrder();

    await expect(checkoutPage.completeHeader)
      .toHaveText('Thank you for your order!');
  });

  test('TC_CHECKOUT_002 - Validate required information', async ({
    cartPage,
    checkoutPage
  }) => {
    await cartPage.checkout();

    await checkoutPage.enterCustomerInformation(
      '',
      '',
      ''
    );

    await expect(checkoutPage.errorMessage)
      .toContainText('First Name is required');
  });

});