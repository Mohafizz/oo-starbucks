var Owner = require("../src/Owner");
var Outlet = require("../src/Outlet");
var Menu = require("../src/Menu");
var Item = require("../src/Item");
var Customer = require("../src/Customer");

describe("Owner", () => {
  test("Owner should return name and orderBook", () => {
    var newOwner = new Owner("John");
    var item1 = new Item("name1", 5);
    var item2 = new Item("name2", 4);
    var item3 = new Item("name3", 5);
    var arrItems = [item1, item2, item3];
    var menu = new Menu(arrItems);
    var outlet = new Outlet(newOwner, menu);
    var custName = new Customer("Bob");
    newOwner.addOrder(arrItems, custName);

    expect(outlet.owner.name).toEqual(newOwner.name);
    expect(newOwner.orderBook[0]).toContain(arrItems);
    expect(newOwner.custName).toEqual(custName);
    expect(newOwner.items).toEqual(arrItems);
  });
});
