var Customer = require("../src/Customer");

describe("Test", () => {
  test("Customer should have a string name ", () => {
    var customer = new Customer("name");
    expect(customer.name).toEqual("name");
  });
});
