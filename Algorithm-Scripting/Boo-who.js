/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  if (bool === true || bool === false){
    return true;
  }
  return false;
}

booWho(null);   // false
booWho(true);   // true
booWho(false);   // true
booWho([1, 2, 3]);   // false
booWho([].slice);   // false
booWho({ "a": 1 });   // false
booWho(1);   // false
booWho(NaN);   // false
booWho("a");   // false
booWho("true");   // false
booWho("false");   // false
