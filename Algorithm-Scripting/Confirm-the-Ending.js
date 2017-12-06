/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  return target === (str.substr(-target.length));
}

confirmEnding("Bastian", "n");   // true
confirmEnding("Connor", "n");   // false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");   // false
confirmEnding("He has to give me a new name", "name");   // true
confirmEnding("Open sesame", "same");   // true
confirmEnding("Open sesame", "pen");   // false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");   // false
