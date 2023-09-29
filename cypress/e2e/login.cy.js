import { LoginPage } from "../support/page_object/loginPage";
import { MenuAtlassian } from "../support/page_object/menuAtlassian";
const loginPage = new LoginPage();
const menuAtlassian = new MenuAtlassian();
describe("template spec", () => {
    it("passes", () => {
        cy.visit(Cypress.env("url"));
        loginPage.userLocator().type(Cypress.env("userName"));
        loginPage.continueBtnLocator().click();
        loginPage.passwordLocator().type(Cypress.env("password"));
        loginPage.loginBtnLocator().click();
        menuAtlassian.trelloBtnLocator().click({ force: true });
        cy.origin("https://trello.com", () => {
            cy.contains("Boards").should("be.visible");
        });
    });
});
