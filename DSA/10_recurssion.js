// greet();

// function greet() {
//   console.log("Morning");
//   enjoy();
// }

// function enjoy() {
//   console.log("enjoying");
//   temp();
// }

// function temp() {
//   console.log("Do something");
// }

//! Print Hey n number of times

//~ Iterative
// for (let i = 0; i <= 5; i++) {
//   console.log("Hey!");
// }

//~ Recursive
// function temp(n) {
//   if (n == 0) return;
//   console.log("Hey!");
//   temp(n - 1);
// }
// temp(5);

//! Print reverse n natural number
// function temp(n) {
//   if (n == 0) return;
//   console.log(n);
//   temp(n - 1);
// }
// temp(10);

//! Print 1 - n natural number
// function temp(n) {
//   if (n == 0) return;
//   temp(n - 1);
//   console.log(n);
// }
// temp(10);

//! Sum of n number
// function sum(n) {
//   if (n === 1) return n;
//   return n + sum(n - 1);
// }

// console.log(sum(5));

//! Factorial of n number
// function fact(n) {
//   if (n === 1) return n;
//   return n * fact(n - 1);
// }
// console.log(fact(5));

//! Fibonacci Series
//* CASE-1 :- n number of terms
//~ Iterative:
// let n = 10;
// let first = 0;
// let second = 1;
// process.stdout.write(first + " " + second + " ");

// for (let i = 1; i <= n - 2; i++) {
//   let third = first + second;
//   first = second;
//   second = third;
//   process.stdout.write(third + " ");
// }

//! Recursive
// function fibonacciTerm(n, first, second) {
//   if (n <= 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   fibonacciTerm(n - 1, second, third);
// }

// let n = 0;
// process.stdout.write(0 + " " + 1 + " ");
// fibonacciTerm(n - 2, 0, 1);

//* CASE-2 :- nth term sum
// function fibonacciTermSum(n) {
//   if (n == 0 || n == 1) return n;
//   return fibonacciTermSum(n - 1) + fibonacciTermSum(n - 1);
// }

// let n = 7;
// console.log(fibonacciTermSum(n));
