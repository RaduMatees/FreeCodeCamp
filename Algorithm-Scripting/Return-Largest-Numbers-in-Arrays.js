/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  var newArray = [];
  for (i=0; i<arr.length; i++) {
    var largestNr = 0;
    for (j=0; j<arr[i].length; j++) {
      if (arr[i][j] > largestNr) {
        largestNr = arr[i][j];
      }
    }
    newArray.push(largestNr);
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);   // [5,27,39,1001]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);   // [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);   // [9, 35, 97, 1000000]
