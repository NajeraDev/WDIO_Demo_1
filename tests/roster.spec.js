const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Test Suite', ()=>{
    it('should have default values', ()=>{
        browser.url('/');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var instructions = 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.'

        var title = 'Build Your Superhero Roster:'
        
        assert.strictEqual(RosterPage.instructionText.getText(), instructions, 'Instruction text is not the expected');
        assert.strictEqual(RosterPage.listTitle.getText(), title, 'Instruction text is not the expected');

        assert.strictEqual(RosterPage.wolverneItem.getText(),'Wolverine','Wolverine text is not the same');
        assert.strictEqual(RosterPage.ironmanItem.getText(),'Iron Man','Iron Man text is not the same');
        assert.strictEqual(RosterPage.deadpoolItem.getText(),'Deadpool','Deadpool text is not the same');
        assert.strictEqual(RosterPage.thorItem.getText(),'Thor','Thor text is not the same');
        assert.strictEqual(RosterPage.spidermanItem.getText(),'Spider-Man','Spiderman text is not the same');

        assert.strictEqual(RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'The text is not the same');
        assert.strictEqual(RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero', 'Placeholder is not the same');

    });
    it('should test a new hero', ()=>{
        browser.url('/');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var newItem = 'Bob';
        
        RosterPage.addHeroField.setValue(newItem);
        RosterPage.submitButton.click();

        assert.strictEqual(RosterPage.newItem.getText(), newItem, `New Item is not ${newItem}`);
    });

})