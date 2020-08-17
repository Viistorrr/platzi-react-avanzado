describe("Petgram", function() {
  it("para ver si la App funciona", function() {
    cy.visit("/");
  });

  it("navegar a una categopria y ver fotos", function() {
    cy.visit("/pet/1");
    cy.get("article");
  });

  it("si podemos navegar con la navbar al home", function() {
    cy.visit("/pet/1");
    cy.get("nav a")
      .first()
      .click();
    cy.url().should("include", "/");
  });

  it("asegurar que los usuarios no registrador ven el form de registro e inicio de sesion", function() {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});
