Swag Labs – Playwright Automation Framework<br>
<br>
//Overview//<br>
<br>
This project is an automated testing framework for the Swag Labs web application, built using Playwright, TypeScript, and Page Object Model (POM).<br>
<br>
The framework supports both UI automation and REST API testing, following a modular and reusable architecture.<br>
<br>
swaglabs-automation/<br>
│<br>
├── src/<br>
│   ├── pages/<br>
│   │   ├── BasePage.ts<br>
│   │   ├── LoginPage.ts<br>
│   │   ├── InventoryPage.ts<br>
│   │   ├── CartPage.ts<br>
│   │   └── CheckoutPage.ts<br>
│   │<br>
│   ├── api/<br>
│   │   └── PostService.ts<br>
│   │<br>
│   ├── fixtures/<br>
│   │   ├── testFixtures.ts<br>
│   │   └── apiFixtures.ts<br>
│   │<br>
│   └── data/<br>
│       ├── users.ts<br>
│       └── products.ts<br>
│<br>
├── tests/<br>
│   ├── ui/<br>
│   │   ├── login.spec.ts<br>
│   │   ├── inventory.spec.ts<br>
│   │   ├── cart.spec.ts<br>
│   │   └── checkout.spec.ts<br>
│   │<br>
│   └── api/<br>
│       └── post.spec.ts<br>
│<br>
├── .github/<br>
│   └── workflows/<br>
│       └── playwright.yml<br>
│<br>
├── .env.example<br>
├── .gitignore<br>
├── package.json<br>
├── package-lock.json<br>
├── playwright.config.ts<br>
├── tsconfig.json<br>
└── README.md<br>

-------------------------------------------------------------------------

//Prerequisites//<br>
<br>
Before installing the project, make sure you have:<br>
<br>
-Node.js (LTS)                      https://nodejs.org/en/download<br>
-Git                                https://git-scm.com/install/<br>
-Visual Studio Code (recommended)   https://visualstudio.microsoft.com/downloads/<br>
<br>
-Verify installations using PowerShell:<br>
<br>
`node --version`<br>
`npm --version`<br>
`git --version`<br>

-------------------------------------------------------------------------

//Installation//<br>

1. Clone the repository<br>
*Open PowerShell and navigate to the directory where you want the project.*<br>
`git clone https://github.com/marianoperezqa/swaglabs-playwright-automation.git`<br>

2. Navigate to the project<br>

`cd swaglabs-playwright-automation`<br>

3. Install dependencies<br>
*This reads package.json and installs Playwright, TypeScript, dotenv and the other dependencies.*<br>
*If your repository contains package-lock.json, npm will use it to install the locked dependency versions.*<br>

`npm ci`<br>

4. Install Playwright browsers<br>

`npx playwright install`<br>

5. Configure environment variables<br>
-Copy the example environment file:<br>

`Copy-Item .env.example .env`<br>

-Configure the following variables:<br>
//////////////////////////////////////////////////<br>
BASE_URL=https://www.saucedemo.com<br>
API_BASE_URL=https://jsonplaceholder.typicode.com<br>
<br>
STANDARD_USER=standard_user<br>
STANDARD_PASSWORD=secret_sauce<br>
<br>
LOCKED_USER=locked_out_user<br>
//////////////////////////////////////////////////<br>
*Remember: .env should remain local and should not be committed to GitHub.*<br>
<br>
-------------------------------------------------------------------------
<br>
//Running Tests//<br>

-Execute all tests<br>

`npm test`<br>

-Execute UI tests<br>

`npm run test:ui`<br>

-Execute API tests<br>

`npm run test:api`<br>

-Execute tests in headed mode<br>

`npm run test:headed`<br>

-Execute tests in Chromium<br>

`npm run test:chrome`<br>

-Debug tests<br>

`npm run test:debug`<br>

-Validate TypeScript<br>

`npx tsc --noEmit`<br>

-Open HTML report<br>

`npm run report`<br>

-------------------------------------------------------------------------

//UI Automation Coverage//<br>
<br>
Test ID	            Scenario<br>
TC_LOGIN_001	    Successful login<br>
TC_LOGIN_002	    Invalid credentials<br>
TC_LOGIN_003	    Locked out user<br>
TC_LOGIN_004	    Empty credentials<br>
TC_INV_001	        Verify inventory products<br>
TC_INV_002	        Add product to cart<br>
TC_INV_003	        Sort products by price<br>
TC_INV_004	        Logout<br>
TC_CART_001	        Add multiple products<br>
TC_CART_002	        Remove product from cart<br>
TC_CART_003	        Verify cart contents<br>
TC_CHECKOUT_001	    Complete purchase<br>
TC_CHECKOUT_002	    Validate required information<br>
<br>
//API Automation Coverage//<br>
<br>
Test ID	    HTTP Method	    Endpoint	    Scenario<br>
API_001	    GET	            /posts	        Retrieve all posts<br>
API_002	    GET	            /posts/1	    Retrieve post by ID<br>
API_003	    GET	            /posts?userId=1	Filter posts by user<br>
API_004	    POST	        /posts	        Create a post<br>
API_005	    PUT	            /posts/1	    Update a post<br>
API_006	    PATCH	        /posts/1	    Partially update a post<br>
API_007	    DELETE	        /posts/1	    Delete a post<br>
API_008	    GET	            /posts/9999	    Validate nonexistent resource<br>
<br>
*Note: JSONPlaceholder simulates write operations. POST, PUT, PATCH and DELETE requests do not permanently modify the remote database.*<br>

-------------------------------------------------------------------------

//Reporting//<br>
<br>
Playwright HTML Reporter generates execution reports containing:<br>
<br>
.Test execution status<br>
.Execution duration<br>
.Error details<br>
.Screenshots on failure<br>
.Traces on failure<br>
.Video recordings on failure<br>
<br>
-Reports can be opened using:<br>

`npm run report`<br>

-------------------------------------------------------------------------

//CI/CD Integration//<br>
<br>
GitHub Actions is configured to execute automation tests automatically on:<br>
<br>
.Push to the main branch<br>
.Pull requests targeting main<br>
.Manual workflow execution<br>

*Test reports and execution artifacts are uploaded to GitHub Actions.*<br>

//Architecture//<br>
<br>
The framework follows Page Object Model principles:<br>
<br>
.Page classes encapsulate UI locators and actions.<br>
.API services encapsulate HTTP operations.<br>
.Fixtures provide reusable test dependencies.<br>
.Test data is separated from test logic.<br>
.Configuration is centralized in Playwright configuration files.<br>
.Future Enhancements<br>
.Allure reporting<br>
.JSON Schema validation<br>
.Data-driven testing<br>
.Smoke and regression test tagging<br>
.Docker integration<br>
.Extended API/UI integration testing<br>