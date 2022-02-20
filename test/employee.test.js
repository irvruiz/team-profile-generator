const Employee = require("../lib/Employee");

describe("Init Employee...", () => {
  it("It should return name properties from Employee", () => {
    const test = new Employee("Hiro");
    expect(test.getName()).toEqual("Hiro");
  });

  it("It should return id properties from Employee", () => {
    const test = new Employee("Hiro", 1);
    expect(test.getId()).toEqual(1);
  });
  it("It should return email properties from Employee", () => {
    const test = new Employee("Hiro", 1, "Hiro@gmail.com");
    expect(test.getEmail()).toEqual("Hiro@gmail.com");
  });
});
