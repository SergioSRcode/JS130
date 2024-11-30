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

  inStock() {
    let list = [];
    let itemsInStock = this.items.filter(item => item.quantity > 0);
    itemsInStock.forEach(item => list.push(item.itemName));
    console.log(list.join(", "));
  }

  itemsInCategory(category) {
    let list = [];
    let itemsOfCategory = this.items.filter(item => item.category === category);
    itemsOfCategory.forEach(item => list.push(item.itemName));

    console.log(list.join(", "));
  }
}

class ReportManager {
  constructor() {
    this.items = [];
  }

  init(itemManagerObj) {
    this.items.push(itemManagerObj);
  }

  createReporter(skuCode) {
    let reporterItems = this.items.slice();  // using closure to access a copy of items

    return {
      itemInfo() {
        reporterItems.forEach(itemManager => {
          itemManager.items.forEach(item => {
            if (item.sku === skuCode) {
              let keyValuePairs = Object.entries(item);

              keyValuePairs.forEach(pair => console.log(`${pair[0]}: ${pair[1]}`));
            }
          });
        });
      }
    };
  }

  reportInStock() {
    this.items.forEach(itemManager => itemManager.inStock());
  }
}

let itemManager = new ItemManager();
let reportManager = new ReportManager();

itemManager.create('basket ball', 'sports', 0);           // valid item
itemManager.create('asd', 'sports', 0);
itemManager.create('soccer ball', 'sports', 5);           // valid item
itemManager.create('football', 'sports');
itemManager.create('football', 'sports', 3);              // valid item
itemManager.create('kitchen pot', 'cooking items', 0);
itemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
itemManager.items;

reportManager.init(itemManager);
// logs soccer ball,football,kitchen pot
reportManager.reportInStock();

itemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
itemManager.inStock();
// football,kitchen pot
reportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
itemManager.itemsInCategory('sports');

itemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
itemManager.items;

let kitchenPotReporter = reportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

itemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10


// let ball = new Item("foot ball", "sports", 2);
// let john = new ItemManager();
// let peter = new ReportManager();
// john.create("foot ball", "sports", 2);
// john.create("basketball", "sports", 0);
// john.create("milchreis", "cooking", 1);
// peter.init(john);

// peter.reportInStock();
// let footballReporter = peter.createReporter("FOOSP");
// footballReporter.itemInfo();


// // console.log(john.items);
// // john.inStock();
// // john.update("FOOSP", {quantity: 10});
// // console.log(john.items);
// // console.log(john.items);
// john.itemsInCategory("sports");
// john.itemsInCategory("cooking");


// console.log(ball);
// console.log(ball.sku);
// console.log(ball.itemName);
// console.log(ball.category);
// console.log(ball.quantity);