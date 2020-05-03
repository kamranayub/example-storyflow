describe("login", () => {
  before(() => {
    cy.visit("/iframe.html?id=login-form--blank");
  });

  describe("with missing information", () => {
    it("should show validation errors", () => {
      cy.findByTestId("submit").click();
      cy.findByText("Username is required").should("exist");
      cy.findByText("Password is required").should("exist");
    });
  });
});
