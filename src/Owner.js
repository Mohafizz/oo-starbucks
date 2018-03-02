class Owner {
  constructor(name) {
    this.name = name;
    this.orderBook = [];
  }

  addOrder(items, custName) {
    this.items = items;
    this.custName = custName;
    var order = [this.items, this.custName];
    this.orderBook.push(order);
  }
}

module.exports = Owner;
