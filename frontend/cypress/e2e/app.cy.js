describe("App Routing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows Header and Description on home page", () => {
    cy.contains("Askan Energy").should("exist");
    cy.contains("Most homes could benefit with Askan").should("exist");
  });

//   it("redirects to login if accessing protected route without token", () => {
//     cy.visit("/tasks/1/comments/");
//     cy.url().should("include", "/login");
//   });

//   it("shows login page", () => {
//     cy.visit("/login");
//     cy.contains("Login").should("exist"); // Adjust if your LoginPage has a specific heading/button
//   });

//   it("shows Not Found page for unknown routes", () => {
//     cy.visit("/some/random/route", { failOnStatusCode: false });
//     cy.contains("Not Found").should("exist");
//   });

//   it("allows access to protected route with authToken", () => {
//     // Set auth token manually before visiting
//     window.localStorage.setItem("authToken", "fake-token");
//     cy.visit("/tasks/1/comments/");
//     cy.contains("Comments").should("exist"); // Adjust based on your CommentListPage content
//   });
});