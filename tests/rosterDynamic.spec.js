const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Should create multiple items', () => {
  it('should create single item', () => {
    browser.url('');

    LoginPage.login('1@2.com', 'password');

    RosterPage.addHero('Spongebob')

    assert.strictEqual(RosterPage.rosterItems[5].getText(), 'Spongebob', 'Hero text is not the same');
  });
  it('should have default list of heros', () => {
    let heros = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];
    browser.url('');

    LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heros.length; i++) {
      assert.strictEqual(RosterPage.rosterItems[i].getText(), heros[i], 'Hero text is not the same');
    }
  });
  it('should create multiple items', () => {
    let heros = ['Bob', 'Joe', 'Steve', 'Sally'];

    browser.url('');
    LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heros.length; i++) {
        RosterPage.addHero(heros[i])

    }
    for (let i = 0; i < heros.length; i++) {
      assert.strictEqual(RosterPage.rosterItems[i + 5].getText(), heros[i], 'Hero text is not the same');
    }
    browser.pause(3000);
  });
});
