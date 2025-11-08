describe("Main webpage", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.contains("h1", "Interview Helper").should("be.visible");
  });

  describe("Login flow", () => {
    beforeEach(function () {
      cy.fixture("example").as("testData");
    });

    it("should successfully login with valid credentials", function () {
      const { email, password } = this.testData.validUser;
      cy.contains("button", "Login")
        .as("loginButton")
        .should("be.visible")
        .click();
      cy.url().should("include", "/login");

      cy.get('[data-cy="input-email"]').should("be.visible").type(email);
      cy.get('[data-cy="input-password"]').should("be.visible").type(password);
      cy.contains("button", "Login").click();

      cy.url().should("include", "/panel");
      cy.contains("h2", "List of candidates:").should("be.visible");
      cy.contains("button", "Add a new candidate")
        .should("be.visible")
        .and("be.enabled");
    });
  });
});
