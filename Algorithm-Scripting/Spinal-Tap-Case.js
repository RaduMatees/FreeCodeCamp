/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  str = str.replace(/[A-Z]/g, function(x) {
    return '-' + x;
  });
  var strArr = str.split('');
  for (i=0; i<strArr.length; i++){
    if (str[i] === ' ' || strArr[i] === '_'){
      if (strArr[i+1] === '-'){
        strArr[i] = '';
      } else {
        strArr[i] = '-';
      }
    }
  }
  if (strArr[0] === '-'){strArr = strArr.slice(1);}
  return strArr.join('').toLowerCase();
}

spinalCase("This Is Spinal Tap");   // "this-is-spinal-tap"
spinalCase("thisIsSpinalTap");   // "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show");   // "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh");   // "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things");   // "all-the-small-things"
