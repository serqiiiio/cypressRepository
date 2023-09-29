export class LoginPage {
    userLocator = () => {
        return cy.get("#username");
    };
    continueBtnLocator = () => {
        return cy.get("#login-submit > .css-178ag6o");
    };
    passwordLocator = () => {
        return cy.get("#password");
    };
    loginBtnLocator = () => {
        return cy.get("#login-submit > .css-178ag6o");
    };
}
