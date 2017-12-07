/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1). If an item cannot be found,
add the new item and quantity into the inventory array. The returned inventory array should be
in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  // make arr1 into an object
  var arr1Obj = arr1.reduce(function(acc, next){
    acc[next[1]] = next[0];
    return acc;
  }, {});
  // make arr2 into an object
  var arr2Obj = arr2.reduce(function(acc, next){
    acc[next[1]] = next[0];
    return acc;
  }, {});
  // update arr1 object by adding the extra inventory
  for (var key in arr2Obj){
    if (arr1Obj.hasOwnProperty(key)){
      arr1Obj[key] = arr2Obj[key] + arr1Obj[key];
    } else {
      arr1Obj[key] = arr2Obj[key];
    }
  }
  // make arr1 object back into a list and order it alphabetically
  var result = Object.entries(arr1Obj);
  result = result.sort(function(a, b){
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;
  });
  // swap the inside arrays items, so it will be numbers first and items after
  result.map(function(list){
    var a = list[0];
    list[0] = list[1];
    list[1] = a;
    return list;
  });

  return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length;   // should return an array with a length of 6
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);   // [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);   // [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);   // [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);   // [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
