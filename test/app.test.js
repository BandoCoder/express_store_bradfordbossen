const app = require("../src/app");

describe("App", () => {
  it("POST validation works", () => {
    return supertest(app).get("/").expect(200, "Hello, boilerplate; BRUV");
  });
});
