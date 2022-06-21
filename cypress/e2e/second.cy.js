import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('My First Test', () => {
    qase(2, it('Gets, types and asserts', () => {
        cy.visit('https://qase.io');
        cy.get('h1').contains('type')
    }));
});
