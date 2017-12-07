/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by
all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  var newArr = [];
  var sortedArr = arr.sort(function(a, b){
    return a - b;
  });
  for (i=sortedArr[0]; i<=sortedArr[1]; i++){
    newArr.push(i);
  }

  var i = 2;
  var a = true;
  while (true){
    for (k=newArr.length-2; k>=0; k--){
      a = true;
      if (!Number.isInteger(newArr[newArr.length-1] * i / newArr[k])){
        i++;
        a = false;
        break;
      }
    }
    if(a === true){break;}
  }
  return newArr[newArr.length-1] * i;
}


smallestCommons([1,5]);   // 60
smallestCommons([5, 1]);   // 60
smallestCommons([1, 13]);   // 360360
smallestCommons([23, 18]);   // 6056820
