const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');
const VotePage = require('../pages/vote.page');

describe('Test Suite', () => {
  it('should veriffy static elements are present', () => {
    browser.url('/');

    // verify the Login
    assert.strictEqual(LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText');
    assert.strictEqual(LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel');
    assert.strictEqual(LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField');
    assert.strictEqual(LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField');
    assert.strictEqual(LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox');
    assert.strictEqual(LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel');
    assert.strictEqual(LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton');
    assert.strictEqual(LoginPage.loginOverlay.isDisplayed(), true, 'LoginPage.loginOverlay');

    //Login
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    //verify Header
    assert.strictEqual(HeaderPage.logoutButton.isDisplayed(), true, 'HeaderPage.logoutButton');
    assert.strictEqual(HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink');
    assert.strictEqual(HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink');

    //Expand 

    HeaderPage.heroFactsLink.click();
    assert.strictEqual(HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption');
    assert.strictEqual(HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage.spidermanOption');
    assert.strictEqual(HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField');
    assert.strictEqual(HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton');

    //verify Intro
    assert.strictEqual(IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText');
    assert.strictEqual(IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage');

    //verify Roster
    assert.strictEqual(RosterPage.instructionText.isDisplayed(), true, 'RosterPage.instructionText');
    assert.strictEqual(RosterPage.listTitle.isDisplayed(), true, 'RosterPage.listTitle');
    assert.strictEqual(RosterPage.wolverneItem.isDisplayed(), true, 'RosterPage.wolverneItem');
    assert.strictEqual(RosterPage.ironmanItem.isDisplayed(), true, 'RosterPage.ironmanItem');
    assert.strictEqual(RosterPage.deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem');
    assert.strictEqual(RosterPage.thorItem.isDisplayed(), true, 'RosterPage.thorItem');
    assert.strictEqual(RosterPage.spidermanItem.isDisplayed(), true, 'RosterPage.spidermanItem');
    assert.strictEqual(RosterPage.addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel');
    assert.strictEqual(RosterPage.addHeroField.isDisplayed(), true, 'RosterPage.addHeroField');
    assert.strictEqual(RosterPage.submitButton.isDisplayed(), true, 'RosterPage.submitButton');

    //verify Vote
    assert.strictEqual(VotePage.voteTitle.isDisplayed(), true, 'VotePage.voteTitle');
    assert.strictEqual(VotePage.voteItem1.isDisplayed(), true, 'VotePage.voteItem1');
    assert.strictEqual(VotePage.voteItem2.isDisplayed(), true, 'VotePage.voteItem2');
    assert.strictEqual(VotePage.voteItem3.isDisplayed(), true, 'VotePage.voteItem3');
    assert.strictEqual(VotePage.voteItem4.isDisplayed(), true, 'VotePage.voteItem4');
    assert.strictEqual(VotePage.voteItem5.isDisplayed(), true, 'VotePage.voteItem5');
    assert.strictEqual(VotePage.voteItemLabel1.isDisplayed(), true, 'VotePage.voteItemLabel1');
    assert.strictEqual(VotePage.voteItemLabel2.isDisplayed(), true, 'VotePage.voteItemLabel2');
    assert.strictEqual(VotePage.voteItemLabel3.isDisplayed(), true, 'VotePage.voteItemLabel3');
    assert.strictEqual(VotePage.voteItemLabel4.isDisplayed(), true, 'VotePage.voteItemLabel4');
    assert.strictEqual(VotePage.voteItemLabel5.isDisplayed(), true, 'VotePage.voteItemLabel5');
    assert.strictEqual(VotePage.voteItemText1.isDisplayed(), true, 'VotePage.voteItemText1');
    assert.strictEqual(VotePage.voteItemVal1.isDisplayed(), true, 'VotePage.voteItemVal1');
    assert.strictEqual(VotePage.voteItemText2.isDisplayed(), true, 'VotePage.voteItemText2');
    assert.strictEqual(VotePage.voteItemVal2.isDisplayed(), true, 'VotePage.voteItemVal2');
    assert.strictEqual(VotePage.voteItemText3.isDisplayed(), true, 'VotePage.voteItemText3');
    assert.strictEqual(VotePage.voteItemVal3.isDisplayed(), true, 'VotePage.voteItemVal3');
    assert.strictEqual(VotePage.voteItemText4.isDisplayed(), true, 'VotePage.voteItemText4');
    assert.strictEqual(VotePage.voteItemVal4.isDisplayed(), true, 'VotePage.voteItemVal4');
    assert.strictEqual(VotePage.voteItemText5.isDisplayed(), true, 'VotePage.voteItemText5');
    assert.strictEqual(VotePage.voteItemVal5.isDisplayed(), true, 'VotePage.voteItemVal5');
    assert.strictEqual(VotePage.submitButton.isDisplayed(), true, 'VotePage.submitButton');
  });
});
