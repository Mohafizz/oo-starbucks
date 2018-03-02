var Item = require("../src/Item");

describe("Item", () => {
  test("Item should contain a name and price", () => {
    var item = new Item("name", 5);

    expect(item.name).toEqual("name");
    expect(item.price).toEqual(5);
  });
});
