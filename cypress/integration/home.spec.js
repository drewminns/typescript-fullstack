describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('updates the input value when the button is clicked', () => {
    cy.visit('/');
    cy.get('button').click();
    cy.get('input')
      .invoke('val')
      .should('contain', 'drew');
  });

  it('updates the input value when the input is typed', () => {
    cy.visit('/');
    cy.get('input')
      .type('Hello, World!')
      .invoke('val')
      .should('contain', 'Hello, World!');
  });
});
