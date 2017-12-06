/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  var sum = 0;
  var a = true;
  for (i=2; i<=num; i++){
    a = true;
    for (j=2; j<=i/2; j++){
      if (i % j === 0){
        a = false;
        break;
      }
    }
    if (a === true) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);   // 17
sumPrimes(977);   // 73156
