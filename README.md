# Demoblaze QA Project

This is a small QA practice project.

## Project Overview

The project focuses on testing a demo e-commerce website and demonstrates both manual and basic automated testing skills.

## Website Under Test

https://www.demoblaze.com/index.html

## Scope

The following areas were tested:

- User registration, login, and logout
- Product selection and cart functionality
- Contact form validation

## Project Contents

### Manual Testing
- 3 test cases (`docs/test-cases.md`)
- 2 bug reports (`docs/bug-reports.md`)

### Automated Testing (Cypress)
- Login flow (`login.cy.js`)
- Add to cart flow (`cart.cy.js`)
- Contact form (negative scenario) (`contact.cy.js`)

## Tools & Technologies

- Manual testing techniques
- Cypress
- JavaScript
- Node.js
- Git & GitHub

## How to Run Tests

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Open Cypress:
    ```
    npx cypress open
    ```
4. Run any test from the cypress/e2e folder


## Notes
- The project includes both positive (happy path) and negative test scenarios.
- Some issues identified during testing are documented as bug reports.
- Automated tests were implemented for core user flows only.