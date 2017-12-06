/*
Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.map(function(item) {
    if (arr2.indexOf(item) == -1) {
      newArr.push(item);
    }
  });
  arr2.map(function(item) {
    if (arr1.indexOf(item) == -1) {
      newArr.push(item);
    }
  });
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);   // ["pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);   // ["diorite", "pink wool"]
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);   // []
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);   // [4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);   // ["piglet", 4]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);   // ["snuffleupagus", "cookie monster", "elmo"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);   // [1, "calf", 3, "piglet", 7, "filly"]
