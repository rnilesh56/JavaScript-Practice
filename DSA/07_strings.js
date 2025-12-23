//! Print each character on new line;

// let str = "world";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//! Print in reverse order;

// let word = "elephant";
// let reverseWord = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   reverseWord += word[i];
// }
// console.log(reverseWord);

//! Check if string is pallindrome or not ?

// let word = "ele";
// let reverseWord = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   reverseWord += word[i];
// }
// if (word.toLowerCase() === reverseWord.toLowerCase()) {
//   console.log("Pallindrome");
// } else {
//   console.log("Not a palindrome");
// }

//*
// let word = "madam";
// let i = 0;
// let j = word.length - 1;
// let isPallindrome = true;

// while (i < j) {
//   if (word[i] !== word[j]) {
//     isPallindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }

// isPallindrome ? console.log("Pallindrome") : console.log("Not Pallindrome");

//! Toggle each character
// let word = "hEllO";
// let toggle = "";
// for (let i = 0; i < word.length; i++) {
//   let char = word.charCodeAt(i);

//   if (char >= 65 && char <= 90) {
//     toggle += String.fromCharCode(char + 32);
//   } else if (char >= 97 && char <= 122) {
//     toggle += String.fromCharCode(char - 32);
//   }
// }
// console.log(toggle);

//! Frequency of each character
let word = "abcabd";
let arr = new Array(128).fill(0);

for (let i = 0; i < word.length; i++) {
  let index = word.charCodeAt(i);
  arr[index] = arr[index] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + " appeared  " + arr[i] + " times");
  }
}
