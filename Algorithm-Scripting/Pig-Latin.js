/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var strArr = str.split('');
  var newArr = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (i=0; i<strArr.length; i++){
    if (vowels.indexOf(strArr[0]) !== -1){
      strArr.push('w', 'a', 'y');
      return strArr.join('');
    } else if(vowels.indexOf(strArr[i]) !== -1){
      return strArr.slice(i).concat(strArr.slice(0, i)).join('')+'ay';
    }
  }
}

translatePigLatin("california");   // "aliforniacay"
translatePigLatin("paragraphs");   // "aragraphspay"
translatePigLatin("glove");   // "oveglay"
translatePigLatin("algorithm");   // "algorithmway"
translatePigLatin("eight");   // "eightway"
