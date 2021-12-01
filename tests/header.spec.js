const assert = require('assert');
const headerPage = require('../pages/header.page');
const loginPage = require('../pages/login.page');

describe('Test Suite', () => {
  it('should redirect to new site', () => {
    browser.url('/');
    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.linkLink.click();
    assert.strictEqual(browser.getUrl(), 'https://glitchitsystem.com/', 'The url is not the expected');
    browser.pause(3000);
  });

  it('should open wolverine modal', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.heroFactsLink.click();
    headerPage.wolverineOption.click();
    browser.pause(1000);

    assert.strictEqual(headerPage.wolverineModalWindow.isDisplayed(), true, 'The modal is not displayed');
    assert.strictEqual(headerPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Title is not the expected');
    assert.strictEqual(
      headerPage.wolverineModalContentText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Content is not the expected'
    );

    browser.pause(3000);
  });

  it('should close wolvernie modal', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.heroFactsLink.click();
    headerPage.wolverineOption.click();
    browser.pause(1000);

    assert.strictEqual(headerPage.wolverineModalWindow.isDisplayed(), true, 'The modal is not displayed');
    headerPage.wolverineModalCloseButton.click();

    browser.pause(1000);

    assert.strictEqual(headerPage.wolverineModalWindow.isDisplayed(), false, 'The modal is still displayed');
  });

  it('should open spiderman modal', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.heroFactsLink.click();
    headerPage.spidermanOption.click();
    browser.pause(1000);

    assert.strictEqual(headerPage.spidermanModalWindow.isDisplayed(), true, 'The modal is not displayed');
    assert.strictEqual(headerPage.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Title is not the expected');
    assert.strictEqual(
      headerPage.spidermanModalContentText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Content is not the expected'
    );

    browser.pause(3000);
  });

  it('should close spiderman modal', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.heroFactsLink.click();
    headerPage.spidermanOption.click();
    browser.pause(1000);

    assert.strictEqual(headerPage.spidermanModalWindow.isDisplayed(), true, 'The modal is not displayed');
    headerPage.spidermanModalCloseButton.click();

    browser.pause(1000);

    assert.strictEqual(headerPage.spidermanModalWindow.isDisplayed(), false, 'The modal is still displayed');
  });

  it('should search for Wolverine', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.searchField.setValue('wolverine');
    headerPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Wolverine is awesome!', 'Text is not the expected');

    browser.pause(3000);
  });

  it('should error because you did not search for wolverine', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.searchField.setValue('asd');
    headerPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(
      browser.getAlertText(),
      'Your search for asd returned 0 reults. Try something else.',
      'Text is not the expected'
    );

    browser.pause(3000);
  });

  it.only('should close the alert', () => {
    browser.url('/');

    loginPage.emailField.setValue('1@2.com');
    loginPage.passwordField.setValue('password');
    loginPage.submitButton.click();

    headerPage.searchField.setValue('asd');
    headerPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
});
