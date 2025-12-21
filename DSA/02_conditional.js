//! Valid voter

// let age = Number(prompt("What is you age"));

// if (isNaN(age)) {
//   console.log("Not valid input");
// } else if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You can not vote");
// }

//! Shop discount
// let amount = Number(prompt("Enter the bill amount"));

//* Brut force
// if (isNaN(amount)) {
//   console.log("Invalid input");
// } else if (amount === 0) {
//   console.log("Buy something please!");
// } else if (amount > 0 && amount <= 5000) {
//   console.log("Amount is: ", amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log("Amount is: ", amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log("Amount is: ", amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//   console.log("Amount is: ", amount - Math.floor((20 * amount) / 100));
// }

//* Optimal Solution
// let discount = 0;

// if (isNaN(amount)) {
//   console.log("Invalid input");
// } else if (amount === 0) {
//   console.log("Buy something please!");
// } else if (amount > 0 && amount <= 5000) {
//   discount = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// }

// if (!isNaN(amount) && amount > 0) {
//   console.log(
//     `You got ${discount}% on shop of ${amount}. Please pay rs ${
//       amount - Math.floor(discount * amount) / 100
//     }`
//   );
// }

//! Electric Bill
// let unit = 123;
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13; //~ 3900
//   unit = 400;
// } //~ 400
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8; //~ 1600
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6; //~ 600
//   unit = 100;
// }

// amount += unit * 4;
// console.log(amount);

//! INR denomination
// let amount = 1234;

// if (amount >= 500) {
//   console.log("500 currency", Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log("200 currency", Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log("100 currency", Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50 currency", Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 10) {
//   console.log("10 currency || 10 coin", Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log("5 Coin", Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log("2 Coin", Math.floor(amount / 2));
//   amount = amount % 2;
// }

// if (amount === 1) {
//   console.log("1 Coin", amount);
// }

//! ternary operator (? :)

// 12 > 13 ? console.log("Yes") : console.log("Nope");

// console.log(12 > 13 ? "Yes" : "Nope");

//! Nested ternary operator

// let num = 0;
// console.log(num > 0 ? "+ve" : num < 0 ? "-ve" : "Zero");

//! Switch Case

//? CASE-1
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

//? CASE-2
// let day = 5;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Moday");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

//? CASE-3
// switch (true) {
//   case 19 > 6:
//     console.log("Hello");
//     break;
//   case 10 < 9:
//     console.log("Hey");
//     break;

//   default:
//     console.log("Invalid");
//     break;
// }

//? CASE-4
// let num = 0.2 + 0.3;
// switch (num) {
//   case 0.4:
//     console.log("Hello");
//     break;
//   case 0.5:
//     console.log("Hey");
//     break;

//   default:
//     console.log("Invalid");
//     break;
// } //~ Hey

//? CASE-6
// let num = 0.1 + 0.2;
// switch (num) {
//   case 0.3:
//     console.log("Hello");
//     break;
//   case 0.5:
//     console.log("Hey");
//     break;

//   default:
//     console.log("Invalid");
//     break;
// } //~ Invalid

//! Switch case can't handle float value because its precision issues
//^ Fix:

//* CASE-1
// let num = (0.1 + 0.2) * 10;

//* CASE-2
// let num = 0.1 + 0.2;
// num = Number(num.toFixed(1));
