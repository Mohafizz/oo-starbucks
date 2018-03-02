var Menu = require("../src/Menu");
var Item = require("../src/Item");
var Order = require("../src/Order");

describe("Menu", () => {
  test.only("Menu should return a List of items", () => {
    var item1 = new Item("name1", 5);
    var item2 = new Item("name2", 4);
    var item3 = new Item("name3", 5);
    var arrItems = [item1, item2, item3];
    var menu = new Menu(arrItems);

    expect(menu.items).toEqual(arrItems);
  });
});
