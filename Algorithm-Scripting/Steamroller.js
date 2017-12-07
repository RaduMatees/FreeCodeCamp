/*
Flatten a nested array. You must account for varying levels of nesting.
*/

var newArr = [];
function steamrollArray(arr) {
  arr.map(function(amount) {
    if (!Array.isArray(amount)){
      newArr.push(amount);
    } else {
      steamrollArray(amount);
    }
  });
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);   // [1, 2, 3, 4]
steamrollArray([[["a"]], [["b"]]]);   // ["a", "b"]
steamrollArray([1, [], [3, [[4]]]]);   // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]);   // [1, {}, 3, 4]
