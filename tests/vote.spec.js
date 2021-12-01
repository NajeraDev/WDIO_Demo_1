const assert = require('assert');
const LoginPage = require('../pages/login.page')
const VotePage = require('../pages/vote.page');

describe('Test Suite', ()=>{
    it('should increment vote', ()=>{
        browser.url('/');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        let originalValue = Number(VotePage.voteItemVal1.getText());

        //Usign the default x-men selection
        VotePage.submitButton.click();
        assert.strictEqual(VotePage.voteItemVal1.getText(),String(originalValue + 1), 'Values are note the same');
        assert.strictEqual(VotePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
        assert.strictEqual(VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Text is not the same');
    });
    

})