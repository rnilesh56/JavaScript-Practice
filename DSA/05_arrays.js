//* Array is linear Data Structure which stores multiple value in a continuous manners

// let prompt = require("prompt-sync")();

//!
// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter a value: "));
// }
// console.log(arr);

//! Sum of n number of array;
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//! Max element from n number of array;
// let arr = [5, 2, 6, 90, 11];
// let maxElement = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (maxElement < arr[i]) {
//     maxElement = arr[i];
//   }
// }
// console.log(maxElement);

//! Min element from n number of array
// let arr = [8, 45, 87, 23];
// let minElement = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (minElement > arr[i]) {
//     minElement = arr[i];
//   }
// }
// console.log(minElement);

//! 2nd max element from n number of array
// let arr = [80, 45, 87, 23];
// let firstMaxElement = arr[0];
// let secondMaxElement = arr[1];

// if (secondMaxElement > firstMaxElement) {
//   let temp = firstMaxElement;
//   firstMaxElement = secondMaxElement;
//   secondMaxElement = temp;
// }

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > firstMaxElement) {
//     secondMaxElement = firstMaxElement;
//     firstMaxElement = arr[i];
//   } else if (arr[i] > secondMaxElement && arr[i] !== firstMaxElement) {
//     secondMaxElement = arr[i];
//   }
// }

// console.log(firstMaxElement);
// console.log(secondMaxElement);

//! Reverse the array;

// let arr = [32, 345, 14, 54, 2];

//* CASE-1 : Created extra space revesedArry
// let revesedArry = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   revesedArry[j] = arr[i];
//   j++;
// }
// console.log(revesedArry);

//* CASE-2 : no extra space

// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

//! swap 0's to left and 1's to right

// let arr = [1, 1, 0, 1, 0, 0, 1, 0, 1];

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);
