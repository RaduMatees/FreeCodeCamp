/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  for (i=0; i<secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);   // false
mutation(["hello", "Hello"]);   // true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);   // true
mutation(["Mary", "Army"]);   // true
mutation(["Mary", "Aarmy"]);   // true
mutation(["Alien", "line"]);   // true
mutation(["floor", "for"]);   // true
mutation(["hello", "neo"]);   // false
mutation(["voodoo", "no"]);   // false
