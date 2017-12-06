/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
but do pass them on.
*/

function rot13(str) {
  var myArray = str.split('');
  var newArray = [];
  for (i=0; i<myArray.length; i++) {
    var myLetter = myArray[i].charCodeAt();
    var newLetter = myLetter + 13;
    if (myLetter < 65) {
      newLetter = myLetter;
    }
    if (newLetter > 90) {
      newLetter = 65 + 13 - 91 + myArray[i].charCodeAt();
    }
    newArray.push(String.fromCharCode(newLetter));
  }
  return newArray.join('');
}

rot13("SERR CVMMN!");   // "FREE PIZZA!"
rot13("SERR PBQR PNZC");   // "FREE CODE CAMP"
rot13("SERR YBIR?");   // "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");   // "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
