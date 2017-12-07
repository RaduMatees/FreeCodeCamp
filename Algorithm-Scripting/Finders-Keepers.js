/*
Create a function that looks through an array (first argument) and returns the first element
in the array that passes a truth test (second argument).
*/

function findElement(arr, func) {
  var list = arr.filter(function(number){
    return func(number);
  });
  return list[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });   // 8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });   // undefined
