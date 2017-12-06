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

findLongestWord("The quick brown fox jumped over the lazy dog");   // 6
findLongestWord("May the force be with you");   // 5
findLongestWord("Google do a barrel roll");   // 6
findLongestWord("What is the average airspeed velocity of an unladen swallow");   // 8
findLongestWord("What if we try a super-long word such as otorhinolaryngology");   // 19
