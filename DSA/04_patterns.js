// process.stdout.write("Hello ");
// process.stdout.write("world");

let prompt = require("prompt-sync")();

//! square
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//! Right angle Triangle
//~ CASE-1
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//~ CASE-2
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

//~ CASE-3
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

//! Inverted Right Angle Triangle
//~ Logic-1
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//~ Logic-2
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//! Mirror right angle Triangle
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   //inverted
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   //Right angle
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

//! Pyramid
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   // Space
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   // Start
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

//! X pattern
//* Only possible for odd number
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

//! V pattern

// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (i == j || i + j == 2 * n) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }
