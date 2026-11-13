Swag Labs – Playwright Automation Framework
===
Overview
---
This project is an automated testing framework for the Swag Labs web application, built using Playwright, TypeScript, and Page Object Model (POM).  
  
The framework supports both UI automation and REST API testing, following a modular and reusable architecture.  
  
swaglabs-automation/  
│  
├── src/  
│   ├── pages/  
│   │   ├── BasePage.ts  
│   │   ├── LoginPage.ts  
│   │   ├── InventoryPage.ts  
│   │   ├── CartPage.ts  
│   │   └── CheckoutPage.ts  
│   │  
│   ├── api/  
│   │   └── PostService.ts  
│   │  
│   ├── fixtures/  
│   │   ├── testFixtures.ts  
│   │   └── apiFixtures.ts  
│   │  
│   └── data/  
│       ├── users.ts  
│       └── products.ts  
│  
├── tests/  
│   ├── ui/  
│   │   ├── login.spec.ts  
│   │   ├── inventory.spec.ts  
│   │   ├── cart.spec.ts  
│   │   └── checkout.spec.ts  
│   │  
│   └── api/  
│       └── post.spec.ts  
│  
├── .github/  
│   └── workflows/  
│       └── playwright.yml  
│  
├── .env.example  
├── .gitignore  
├── package.json  
├── package-lock.json  
├── playwright.config.ts  
├── tsconfig.json  
└── README.md  

-------------------------------------------------------------------------

Prerequisites## Heading 2  
  
Before installing the project, make sure you have:  
  
-Node.js (LTS)                    | https://nodejs.org/en/download  
-Git                              | https://git-scm.com/install/  
-Visual Studio Code (recommended) | https://visualstudio.microsoft.com/downloads/  
  
-Verify installations using PowerShell:  
  
`node --version`  
`npm --version`  
`git --version`  

-------------------------------------------------------------------------

Installation## Heading 2  

1. Clone the repository  
*Open PowerShell and navigate to the directory where you want the project.*  

`git clone https://github.com/marianoperezqa/swaglabs-playwright-automation.git`  

2. Navigate to the project  

`cd swaglabs-playwright-automation`  

3. Install dependencies  
*This reads package.json and installs Playwright, TypeScript, dotenv and the other dependencies.*  
*If your repository contains package-lock.json, npm will use it to install the locked dependency versions.*  

`npm ci`  

4. Install Playwright browsers  

`npx playwright install`  

5. Configure environment variables  
-Copy the example environment file:  

`Copy-Item .env.example .env`  

-Configure the following variables:  
  
> [!IMPORTANT]
> BASE_URL=https://www.saucedemo.com  
> API_BASE_URL=https://jsonplaceholder.typicode.com  
  
> STANDARD_USER=standard_user  
> STANDARD_PASSWORD=secret_sauce  
  
> LOCKED_USER=locked_out_user  
    
*__Remember:__ .env should remain local and should not be committed to GitHub.*  
  
-------------------------------------------------------------------------
  
Running Tests## Heading 2  

-Execute all tests  

`npm test`  

-Execute UI tests  

`npm run test:ui`  

-Execute API tests  

`npm run test:api`  

-Execute tests in headed mode  

`npm run test:headed`  

-Execute tests in Chromium  

`npm run test:chrome`  

-Debug tests  

`npm run test:debug`  

-Validate TypeScript  

`npx tsc --noEmit`  

-Open HTML report  

`npm run report`  

-------------------------------------------------------------------------

UI Automation Coverage## Heading 2  
  
Test ID	         |  Scenario  
-----------------|-------------------  
TC_LOGIN_001	 |  Successful login  
TC_LOGIN_002	 |  Invalid credentials  
TC_LOGIN_003	 |  Locked out user  
TC_LOGIN_004	 |  Empty credentials  
TC_INV_001	     |  Verify inventory products  
TC_INV_002	     |  Add product to cart  
TC_INV_003	     |  Sort products by price  
TC_INV_004	     |  Logout  
TC_CART_001	     |  Add multiple products  
TC_CART_002	     |  Remove product from cart  
TC_CART_003	     |  Verify cart contents  
TC_CHECKOUT_001	 |  Complete purchase  
TC_CHECKOUT_002	 |  Validate required information  
  
API Automation Coverage## Heading 2  
  
Test ID	 | HTTP Method	|   Endpoint	     |  Scenario  
---------|--------------|--------------------|--------------------
API_001	 |  GET	        |   /posts	         |  Retrieve all posts  
API_002	 |  GET	        |   /posts/1	     |  Retrieve post by ID  
API_003	 |  GET	        |   /posts?userId=1	 |  Filter posts by user  
API_004	 |  POST	    |   /posts	         |  Create a post  
API_005	 |  PUT	        |   /posts/1	     |  Update a post  
API_006	 |  PATCH	    |   /posts/1	     |  Partially update a post  
API_007	 |  DELETE	    |   /posts/1	     |  Delete a post  
API_008	 |  GET	        |   /posts/9999	     |  Validate nonexistent resource  
  
*__Note:__ JSONPlaceholder simulates write operations. POST, PUT, PATCH and DELETE requests do not permanently modify the remote database.*  

-------------------------------------------------------------------------

Reporting## Heading 2  
  
Playwright HTML Reporter generates execution reports containing:  
  
.Test execution status  
.Execution duration  
.Error details  
.Screenshots on failure  
.Traces on failure  
.Video recordings on failure  
  
-Reports can be opened using:  

`npm run report`  

-------------------------------------------------------------------------

CI/CD Integration## Heading 2  
  
GitHub Actions is configured to execute automation tests automatically on:  
  
.Push to the main branch  
.Pull requests targeting main  
.Manual workflow execution  

*Test reports and execution artifacts are uploaded to GitHub Actions.*  

Architecture## Heading 2  
  
The framework follows Page Object Model principles:  
  
.Page classes encapsulate UI locators and actions.  
.API services encapsulate HTTP operations.  
.Fixtures provide reusable test dependencies.  
.Test data is separated from test logic.  
.Configuration is centralized in Playwright configuration files.  
.Future Enhancements  
.Allure reporting  
.JSON Schema validation  
.Data-driven testing  
.Smoke and regression test tagging  
.Docker integration  
.Extended API/UI integration testing  