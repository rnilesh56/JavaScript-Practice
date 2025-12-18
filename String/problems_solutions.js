//! 1. The "Slugify" Task
//? Write a function slugify that takes a string and:
//* Converts it to lowercase.
//* Removes leading/trailing whitespace.
//* Replaces all spaces with dashes (-).

let input = "Advanced JavaScript Array Methods";

const slugify = (input) => input.toLowerCase().split(" ").join("-");
// console.log(slugify(input)); //~ "advanced-javascript-array-methods"

//! 2. Reverse the Words
//? Your Task: Write a function reverseWords(sentence) that takes a string and returns it with the words in reverse order.

let sentence = "The quick brown fox";

const reverseWords = (sentence) => sentence.split(" ").reverse().join(" ");
// console.log(reverseWords(sentence)); //~ fox brown quick The

//! 3. Check for
//? Your Task: Write a function isPalindrome(str) that returns true if a string is a palindrome and false otherwise. (Ignore case sensitivity: "Madam" should be true).

let word = "Racecar";

const isPalindrome = (word) => {
  let originalWord = word.toLowerCase();
  return originalWord === originalWord.split("").reverse().join("");
};
// console.log(isPalindrome(word)); //~ true

//! 4. Extract and Mask Email
//? Your Task: Take an email address and mask the part before the @ symbol, showing only the first character and replacing the rest with ....

let email = "victoria@example.com";

const maskEmail = (email) => {
  const [user, domain] = email.split("@");
  return user[0] + "...@" + domain;
};
// console.log(maskEmail(email)); //~ v...@example.com

//! 5. Title Case a Sentence
//? The Goal: Write a function toTitleCase(str) that converts the first letter of each word to uppercase and the rest to lowercase.

let rawText = "sToP yElLiNg At Me";

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// console.log(toTitleCase(rawText)); //~ Stop Yelling At Me

//! 6. Find the Longest Word
//? The Goal: Write a function findLongestWord(sentence) that returns the longest word in a string. If there are multiple, return the first one found.

let bio = "Exploring the vast universe of JavaScript";

const findLongestWord = (str) => {
  const words = str.split(" ");
  console.log(words);

  return words.reduce((longest, current) => {
    console.log("Longest", longest);
    console.log("Current", current);

    return current.length > longest.length ? current : longest;
  }, "");
};

// console.log(findLongestWord(bio)); //~ JavaScript
