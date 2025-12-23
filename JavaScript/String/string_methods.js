//^ Strings In JAVASCRIPT
//* String is a collection of characters which is enclosed in double quotes(""), single quotes('') or backticks(``).
//* String which is enclosed in single and double quotes are known as string literals.
//* String which is enclosed in backticks is know as template literal/strings. (ES6)
//* Template string allow us to write JS expression in the string with the help of placholder.
//* Template strig allows us to write multiple strings.
//* String is immutable (Cannot change the value).
//* String is an iterable type.

//? Examples:

// let string = "example";

// console.log(string); //~ example
// console.log(string.length); //~ 7
// console.log(string[4]); //~ p
// string[4] = "y"; //* Cannot mutate
// console.log(string); //~ //~ example

// let array = ["e", "x", "a", "m", "l", "e"];

// array[4] = "y"; //* Mutable
// console.log(array); //~ [ 'e', 'x', 'a', 'm', 'y', 'e' ]

// let string = `hello
//               JavaScript`; //* Passes string using backticks and it passes multiple line

// console.log(string);
//~ hello
//~               JavaScript

// let a = 20;
// let b = 30;
// let c = a + b;

//! String literals
// console.log("The sum of ${a} and ${b} is ${c}."); //~ The sum of ${a} and ${b} is ${c}.

//! Temporal String
// console.log(`The sum of ${a} and ${b} is ${c}.`); //~ The sum of 20 and 30 is 50.

//! toLowerCase()
// let str = "Hello JavaScript";
// console.log(str.toLowerCase()); //~ hello javascript

//! toUpperCase()
// let str = "Hello JavaScript";
// console.log(str.toUpperCase()); //~ HELLO JAVASCRIPT

//! slice()
//* Accepts two arguments where first arg is the starting index postion of the string which is included and 2nd arg. which is also optional, index position is the end index position which will be excluded
//* If you pass only one arg then from that index position to last it will return

// let str = "Hello JavaScript";

// console.log(str.slice(2, 3)); //~ l
// console.log(str.slice(6)); //~ JavaScript
// console.log(str.slice(-8, -3)); //~ vaScr

//! includes()
//* Accepts two arguments where 1st arg is the character you want check and 2nd arg. which is also optional is the index position from where to check if found return true else false
//* If you pass only one arg it will start checking from staring index and if the char found it return true else false

// let str = "Hello JavaScript";

// console.log(str.includes("ll", 6)); //~ false
// console.log(str.includes("l")); //~ true

//! indexOf()
//* Accepts two arguments where 1st arg is the character you want check and 2nd arg. which is also optional is the index position from where to check if found return index position of the character else it will return -1
//* If you pass only one arg it will start checking from staring index and if the char found it return index position of the character else it will return -1

// let str = "Hello JavaScript";

// console.log(str.indexOf("p", 6)); //~ 14
// console.log(str.indexOf("z")); //~ -1

//! lastIndexOf()
//* Accepts two arguments where 1st arg is the character you want check and 2nd arg. which is also optional is the index position from where to check if found return last occurrence index position of the character else it will return -1
//* If you pass only one arg it will start checking from last index and if the char found it return last occurrence index position of the character else it will return -1

// let str = "Hello JavaScript";

// console.log(str.lastIndexOf("e", 10)); //~ 1
// console.log(str.lastIndexOf("z")); //~ -1

//! startsWith()
//* Accepts one arguments
//* values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

// let str = "Hello JavaScript";

// console.log(str.startsWith("o")); //~ fasle
// console.log(str.startsWith("H")); //~ true

//! trimStart(), trimEnd(), trim()
//* trim all the extra spaces from the string

// let str = "   Hello JavaScript   ";

// console.log(str.trimStart()); //~ 'Hello JavaScript   '
// console.log(str.trimEnd()); //~ '   Hello JavaScript'
// console.log(str.trim()); //~ 'Hello JavaScript'

//! padStart()
//* The padStart() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the start of this string.

// const str = "5";

// console.log(str.padStart(3, "0")); //~ 005

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(maskedNumber); //~ ************5581

//! padEnd()
//* The padEnd() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the end of this string.

// const str1 = "Breaded Mushrooms";
// console.log(str1.length);

// console.log(str1.padEnd(25, ".")); //~ 'Breaded Mushrooms........'

// const str2 = "200";

// console.log(str2.padEnd(5)); //~ '200  '

//! subString()
//* The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// const str = "JavaScript";

// console.log(str.substring(1, 3)); //~ av

// console.log(str.substring(2)); //~ vaScript

//! split()
//* Split method is used to split the string based on some character of string.
//* Split method eaccepts 2 arguments where 1st arg is seperator based on which you want to.
//* Split string and 2nd arg. is the limit which decide number of splits.
//* Split methods return an array of splitted string where splittedstring will be element of the array
//* No strig method is affecting original string

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[3]); //~ fox

// const chars = str.split("");
// console.log(chars[8]); //~ k

// const strCopy = str.split();
// console.log(strCopy); //~ [ 'The quick brown fox jumps over the lazy dog.' ]

// let str = "JavaScript";
// console.log(str.split("a")); //~ [ 'J', 'v', 'Script' ]
// console.log(str.split("")); //~ ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
// console.log(str.split()); //~ [ 'JavaScript' ]
// console.log(str.split("a", 1)); //~ [ 'J' ]

// console.log(str.split("").reverse()); //~ ["t", "p", "i", "r", "c", "S", "a", "v", "a", "J"];
// console.log(str.split("").reverse().join("")); //~ tpircSavaJ
