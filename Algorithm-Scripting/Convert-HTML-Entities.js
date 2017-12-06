/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

convertHTML("Dolce & Gabbana");   // Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos");   // Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve");   // Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"');   // Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List");   // Shindler&​apos;s List
convertHTML("<>");   // &​lt;&​gt;
convertHTML("abc");   // abc
