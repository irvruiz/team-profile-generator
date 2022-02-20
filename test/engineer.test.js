const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Init Engineer...", () => {
  it("It should return id properties from Employee", () => {
    const test = new Engineer("Hiro", 2, "email", "github");
    expect(test.getGithub()).toEqual("github");
  });
});
