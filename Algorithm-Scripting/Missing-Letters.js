/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var strArr = str.split('');
  for (i=0; i<strArr.length-1; i++){
    var curLetter = strArr[i].charCodeAt();
    var nextLetter = strArr[i+1].charCodeAt();
    if (nextLetter - curLetter > 1) {
      return String.fromCharCode(curLetter+1);
    }
  }
}

fearNotLetter("abce");   // "d"
fearNotLetter("abcdefghjklmno");   // "i"
fearNotLetter("bcd");   // undefined
fearNotLetter("yz");   // undefined
