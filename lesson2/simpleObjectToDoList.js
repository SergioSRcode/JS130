// Modify the makeList function so that it returns an object that 
// provides the interface shown above, including add, list, and remove methods.


function makeList() {
  return {
    listOfItems: [],

    remove(item) {
      let idxOfItem = this.listOfItems.indexOf(item);

      if (idxOfItem !== -1) {
        this.listOfItems.splice(idxOfItem, 1);
        console.log(`${item} removed!`);
      }
    },
  
    add(item) {
      let idxOfItem = this.listOfItems.indexOf(item);

      if (idxOfItem === -1) {
        this.listOfItems.push(item);
        console.log(`${item} added!`);
      }
    },
  
    list() {
      if (this.listOfItems.length === 0) {
        console.log("The list is empty");
      } else {
        this.listOfItems.forEach(item => console.log(item));
      }
    },
  };
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn