/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var strToArray = str.split(' ');
  var longestWord = '';
  for (i=0; i<strToArray.length; i++) {
    if (strToArray[i].length > longestWord.length) {
      longestWord = strToArray[i];
    }
  }
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
