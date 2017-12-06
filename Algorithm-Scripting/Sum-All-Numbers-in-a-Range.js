/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  var lgNr = Math.max.apply(null, arr);
  var smNr = Math.min.apply(null, arr);
  var sortedArr = [smNr, lgNr];
  var allNumbers = [];
  while (smNr <= lgNr) {
    allNumbers.push(smNr);
    smNr += 1;
  }
  return allNumbers.reduce(function(total, currentValue) {
    return total + currentValue;
  });
}

sumAll([5, 10]);   // 45
sumAll([10, 5]);   // 45
sumAll([1, 4]);   // 10
