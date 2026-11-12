import { test, expect } from '../../src/fixtures/testFixtures';
import { users } from '../../src/data/users';
import { products } from '../../src/data/products';

test.describe('Swag Labs - Inventory', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );
  });

  test('TC_INV_001 - Verify inventory products', async ({
    inventoryPage
  }) => {
    await expect(inventoryPage.title)
      .toHaveText('Products');

    await expect(inventoryPage.products)
      .toHaveCount(6);
  });

  test('TC_INV_002 - Add product to cart', async ({
    inventoryPage
  }) => {
    await inventoryPage.addProduct(products.backpack);

    await expect(inventoryPage.cartBadge)
      .toHaveText('1');
  });

 test('TC_INV_003 - Sort products by price', async ({
  inventoryPage
}) => {
  await inventoryPage.sortProducts('lohi');

  const prices = await inventoryPage.getProductPrices();

  expect(prices).toEqual(
    [...prices].sort((a, b) => a - b)
  );
});

  test('TC_INV_004 - Logout', async ({
    inventoryPage,
    page
  }) => {
    await inventoryPage.logout();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/'
    );
  });

});