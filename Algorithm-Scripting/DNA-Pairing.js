/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  var strArr = str.split('');
  var result = [];
  for (i=0; i<strArr.length; i++){
    var smArr = [];
    if (strArr[i] === 'A'){
      smArr.push(strArr[i], 'T');
    } else if (strArr[i] === 'T'){
      smArr.push(strArr[i], 'A');
    } else if (strArr[i] === 'C'){
      smArr.push(strArr[i], 'G');
    } else if (strArr[i] === 'G'){
      smArr.push(strArr[i], 'C');
    }
    result.push(smArr);
  }
  return result;
}

pairElement("ATCGA");   // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG");   // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA");   // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
