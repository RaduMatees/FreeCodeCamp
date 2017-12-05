/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var myArray = str.toLowerCase().split(' ');
  var newArray = [];
  for (i=0; i<myArray.length; i++) {
    var word = myArray[i].replace(myArray[i][0], myArray[i][0].toUpperCase());
    newArray.push(word);
  }
  return newArray.join(' ');
}

titleCase("I'm a little tea pot");
