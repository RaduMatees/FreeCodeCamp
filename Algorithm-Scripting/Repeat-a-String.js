/*
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  var newString = "";
  if (num > 0) {
    for (i=1; i<=num; i++) {
      newString = newString + str;
    }
    return newString;
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
