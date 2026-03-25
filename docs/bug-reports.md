# Bug Reports

## BUG-01 Contact Form Allows Submission with Empty Required Fields

**Environment:**
- URL: https://www.demoblaze.com/index.html
- Browser: Chrome
- OS: Windows 10

**Steps to Reproduce:**
1. Open https://www.demoblaze.com/index.html
2. Click on the "Contact" button
3. Leave all fields empty:
   - Contact Email
   - Contact Name
   - Message
4. Click on "Send message"

**Actual Result:**
- Form is submitted successfully
- Alert message "Thanks for the message!!" is displayed
- No validation errors are shown

**Expected Result:**
- Form submission should be blocked
- Validation messages should be displayed indicating required fields
- User should remain on the Contact modal until valid data is entered

**Severity:** Medium  
**Priority:** Low / Medium  
**Type:** Functional Bug (Validation Issue)

---

## BUG-02 Modal Throws JavaScript Exception During Transition After Submitting Contact Form

**Environment:**
- URL: https://www.demoblaze.com/index.html
- Browser: Chrome
- OS: Windows 10

**Steps to Reproduce:**
1. Open https://www.demoblaze.com/index.html
2. Click on the "Contact" button
3. Enter any data or leave fields empty
4. Click on "Send message"

**Actual Result:**
- Alert message "Thanks for the message!!" is displayed
- After that, a JavaScript error occurs: "Modal is transitioning"
- The error is thrown as an uncaught exception in the browser console

**Expected Result:**
- Form should be submitted successfully
- Modal should close without any JavaScript errors
- No uncaught exceptions should occur during UI transitions

**Severity:** Low  
**Priority:** Low  
**Type:** UI / JavaScript Error