var Outlet = require("../src/Outlet");
var Owner = require("../src/Owner");
var Menu = require("../src/Menu");

describe("Outlet", () => {
  test("Outlet should return an owner and menu", () => {
    var menu = [{ name: "Noodle", price: 6 }, { name: "Coke", price: 4 }];
    var owner = new Owner("Hafiz");
    var outlet = new Outlet(owner, menu);

    expect(outlet.menu).toEqual(menu);
    expect(outlet.owner).toEqual(owner);
  });
});
