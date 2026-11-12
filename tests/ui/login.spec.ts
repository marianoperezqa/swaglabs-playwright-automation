import { test, expect } from '../../src/fixtures/testFixtures';
import { users } from '../../src/data/users';

test.describe('Swag Labs - Login', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('TC_LOGIN_001 - Successful login', async ({
    loginPage,
    page
  }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory.html/);
  });

  test('TC_LOGIN_002 - Invalid credentials', async ({
    loginPage
  }) => {
    await loginPage.login(
      users.invalid.username,
      users.invalid.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

  test('TC_LOGIN_003 - Locked out user', async ({
    loginPage
  }) => {
    await loginPage.login(
      users.locked.username,
      users.locked.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('locked out');
  });

  test('TC_LOGIN_004 - Empty credentials', async ({
    loginPage
  }) => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage)
      .toContainText('Username is required');
  });

});