"use strict";

/*
Item obj
1. SKU code
2. name
3. category
4. quantity

items managaer can: create, update, delete, 
inStock (look-up), itemsInCategory (look-up)
Property: items (list)

reports manager can: 
1. init(itemManager) => items: itemManager
2. createReporter(SKU) => returns obj
  - obj has itemInfo method => logs all properties + values
3. reportInStock => logs names of all items in stock
*/

class Item {
  static getSKUCode(item, category) {
    let noSpacesItem = Item.validateItem(item);
    let noSpacesCategory = Item.validateCategory(category);
    if (noSpacesItem === false || noSpacesCategory === false) return false;

    item = Item.removeSpaces(item);
    
    return (item.slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }

  static removeSpaces(word) {
    if (typeof word !== "string") return ""; 
    if (word.includes(" ")) return word.split(" ").join("");
    
    return word;
  }

  static validateLength(minChars, word) {
    word = Item.removeSpaces(word);
    if (minChars > word.length) return false;

    return word;
  }

  static validateItem(item) {
    if (!Item.exists(item)) return false;
    if (!Item.validateLength(5, item)) return false;
    return item;
  }

  static validateCategory(category) {
    if (!Item.exists(category)) return false;

    if (!Item.validateLength(5, category) || 
        category.includes(" ")) return false;
    
    return category;
  }

  static validateQuantity(quantity) {
    if (typeof quantity !== "number") return false;
    return quantity;
  }

  static exists(info) {
    return info !== undefined;
  }

  constructor(item, category, amount) {
    this.itemName = Item.validateLength(5, item);
    this.category = Item.validateCategory(category); // min 5 chars, only 1 word
    this.sku = Item.getSKUCode(item, category);// items first 3 letters + 2 of cat
    this.quantity = Item.validateQuantity(amount); // cannot be blank

    if (!this.allInfoIsValid()) return {notValid: true};
  }

  allInfoIsValid() {
    return ![this.itemName, this.category, this.quantity].includes(false);
  }
}

class ItemManager {
  constructor() {
    this.items = [];
  }

  create(item, category, amount) {
    let newItem = new Item(item, category, amount);
    let values = Object.values(newItem);

    if (values.includes(false)) return false;
    this.items.push(newItem);
  }

  update(skuCode, infoObj) {
    this.items.forEach(item => {
      if (item.sku === skuCode) Object.assign(item, infoObj);
    });
  }

  delete(skuCode) {
    let itemIdx = this.items.findIndex(item => item.sku === skuCode);

    this.items.splice(itemIdx, 1);
  }
}

// let ball = new Item("foot ball", "sports", 2);
let john = new ItemManager();

john.create("foot ball", "sports", 2);
john.create("basketball", "sports", 5);
console.log(john.items);
// john.update("FOOSP", {quantity: 10});
// console.log(john.items);
john.delete("FOOSP");
console.log(john.items);

// console.log(ball);
// console.log(ball.sku);
// console.log(ball.itemName);
// console.log(ball.category);
// console.log(ball.quantity);

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
// ItemManager.items;

// ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();

// ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// // football,kitchen pot
// ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10