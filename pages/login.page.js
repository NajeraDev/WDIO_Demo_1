class loginPage {

    get headingText(){
        return $('#login-title')          
    }

    get emailLabel(){
        return $('#form-login > div:nth-child(1) > label');
    }

    get emailField(){
        return $('#loginEmail')
    }

    get passwordField(){
        return $('#loginPassword')
    }

    get rememberLoginCheckbox(){
        return $('#rememberLoginChk')
    }
    
    get rememberLoginLabel(){
        return $('#form-login > div.form-check > label');
    }

    get submitButton(){
        return $('#form-login > button');
    }

    get loginOverlay(){
        return $('#overlay');
    }

    /**
     * 
     * @param {string} email 
     * @param {string} password 
     */
    login(email, password){
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
        this.submitButton.click();
    }
}

module.exports = new loginPage();