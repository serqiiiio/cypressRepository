export class MenuAtlassian {
    trelloBtnLocator = () => {
        Cypress.on("uncaught:exception", () => false);
        return cy.get(".sc-bwzfXH");
    };
}
