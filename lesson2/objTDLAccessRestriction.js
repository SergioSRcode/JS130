// Modify the makeList function so that it returns an object that 
// provides the interface shown above, including add, list, and remove methods.
// prevent access to the list of items from outside the object.


function makeList() {
  let listOfItems = [];

  return {
    remove(item) {
      let idxOfItem = listOfItems.indexOf(item);

      if (idxOfItem !== -1) {
        listOfItems.splice(idxOfItem, 1);
        console.log(`${item} removed!`);
      }
    },
  
    add(item) {
      let idxOfItem = listOfItems.indexOf(item);

      if (idxOfItem === -1) {
        listOfItems.push(item);
        console.log(`${item} added!`);
      }
    },
  
    list() {
      if (listOfItems.length === 0) {
        console.log("The list is empty");
      } else {
        listOfItems.forEach(item => console.log(item));
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
