# Test Cases

## TC-01 Register, Login and Logout User

**Preconditions:**
- User is on homepage: https://www.demoblaze.com/index.html
- Browser is opened

**Steps:**
1. Verify that the homepage is displayed
2. Click on the "Sign up" button
3. Verify that the "Sign up" modal is displayed
4. Enter a valid username and password
5. Click the "Sign up" button
6. Verify that the alert "Sign up successful." is displayed
7. Close the alert
8. Click on the "Log in" button
9. Verify that the "Log in" modal is displayed
10. Enter the registered username and password
11. Click the "Log in" button
12. Verify that the user is logged in successfully
13. Verify that "Welcome [username]" is displayed
14. Click on the "Log out" button
15. Verify that the "Log in" button is visible again

**Expected Result:**
- User is successfully registered
- User is able to log in with valid credentials
- User is able to log out successfully

---

## TC-02 Add Phone Product to Cart

**Preconditions:**
- User is on homepage: https://www.demoblaze.com/index.html

**Steps:**
1. Verify that the homepage is displayed
2. Click on the "Phones" category
3. Click on the first product in the list
4. Verify that the product detail page is displayed
5. Verify that the product description is visible
6. Click on "Add to cart"
7. Verify that the alert "Product added" is displayed
8. Close the alert
9. Click on the "Cart" button
10. Verify that the selected product is displayed in the cart
11. Verify that the product price and total price are displayed correctly

**Expected Result:**
- Product is successfully added to the cart
- Product name, price, and total price are displayed correctly in the cart

---

## TC-03 Submit Contact Form with Empty Required Fields

**Preconditions:**
- User is on homepage: https://www.demoblaze.com/index.html

**Steps:**
1. Verify that the homepage is displayed
2. Click on the "Contact" button
3. Verify that the "New message" modal is displayed
4. Leave all input fields empty:
   - Contact Email
   - Contact Name
   - Message
5. Click on the "Send message" button

**Expected Result:**
- Form submission should be blocked
- Validation messages should be displayed for required fields
- User should remain on the Contact modal

**Actual Result:**
- The form is submitted successfully
- Alert "Thanks for the message!!" is displayed
- No validation errors are shown