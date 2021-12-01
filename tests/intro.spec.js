const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page')

describe('Intro Test Suite', ()=>{
    it('should display correct title', () =>{
        browser.url('/')

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.strictEqual(IntroPage.titleText.getText(),'Superhero Roster', 'The text is not the expected');

    })

    it('should display correct image', ()=>{
        browser.url('/')

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.strictEqual(IntroPage.mainImage.getAttribute('src'),'./images/superhero.png', 'Source is not the expected' );
        assert.strictEqual(IntroPage.mainImage.getAttribute('alt'),'Superhero Image', 'Alt is not the expected' )

    })
})