var Order = require("../src/Order");
var Item = require("../src/Item");
var Customer = require("../src/Customer");

describe("Order", () => {
  test("Order should return orderItem and custName", () => {
    var item = new Item("coffee", 5);
    var custName = new Customer("name");
    var newOrder = new Order(item, custName.name);

    expect(newOrder.item).toEqual(item);
    expect(newOrder.custName).toEqual(custName.name);
  });
});
