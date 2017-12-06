/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the
two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  var fibList = [1, 1];
  var sum = 0;
  var i = 1;
  while (fibList[i] + fibList[i-1] <= num){
    fibList.push(fibList[i] + fibList[i-1]);
    i += 1;
  }
  fibList.map(function(number){
    if (number % 2 !== 0){
      sum += number;
    }
  });
  return sum;
}

sumFibs(4);   // 5
sumFibs(1000);   // 1785
sumFibs(4000000);   // 4613732
sumFibs(75024);   // 60696
sumFibs(75025);   // 135721
