import ProductPageObject from "../../../support/pages/module/sw-product.page-object";

describe('Product: Edit in various ways', function () {
    beforeEach(function () {
        return cy.createProductFixture('product', {
            manufacturerName: 'shopware AG',
            taxName: '19%'
        })
    });
    it('register as customer and run though checkout', function () {
        cy.visit();

        cy.get('.logo-main-img').should('be.visible');
    });
    afterEach(function () {
        return cy.removeFixtureByName('Product name', 'product')
    });
});
