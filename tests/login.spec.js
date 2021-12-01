const assert = require('assert');
const loginPage = require('../pages/login.page');
const headerPage = require('../pages/header.page');

describe('Test Suite', () => {
  it('should dsiplay error when password is missing', () => {
    browser.url('/');
    loginPage.emailField.setValue('test@test.com');
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert Text is not the expected');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'The alert is still open');
  });

  it('should display error when email is missing', () => {
    browser.url('/');

    loginPage.passwordField.setValue('blah');
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email and password are missing', () => {
    browser.url('/');

    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is incorrect', () => {
    browser.url('/');

    loginPage.emailField.setValue('fake@fake.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password is incorrect', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('FAKE');
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password case is incorrect', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('PASSWORD');
    loginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should login with valid email and password', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    assert.strictEqual(loginPage.loginOverlay.isDisplayed(), false, 'Overlay is still displayed');
  });

  it('should remember login creds', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.rememberLoginCheckbox.click();
    loginPage.submitButton.click();

    assert.strictEqual(loginPage.loginOverlay.isDisplayed(), false, 'Overlay is still displayed');

    headerPage.logoutButton.click();

    assert.strictEqual(loginPage.loginOverlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.strictEqual(loginPage.emailField.getValue(), '1@2.com', 'The email was not remembered');
    assert.strictEqual(loginPage.passwordField.getValue().length, 8, 'The password was not remembered');
    assert.strictEqual(loginPage.rememberLoginCheckbox.isSelected(), true, 'The checkbox is not selected');
  });

  it.only('should not remember login creds',()=>{
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    assert.strictEqual(loginPage.loginOverlay.isDisplayed(), false, 'Overlay is still displayed');

    headerPage.logoutButton.click();

    assert.strictEqual(loginPage.loginOverlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.strictEqual(loginPage.emailField.getValue(), '', 'The email was remembered');
    assert.strictEqual(loginPage.passwordField.getValue().length, 0, 'The password was not remembered');
    assert.strictEqual(loginPage.rememberLoginCheckbox.isSelected(), false, 'The checkbox is not selected');
    

  })
});
