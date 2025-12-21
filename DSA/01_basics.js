// let a = 10;
// let b = 20;

//* concatination
// console.log("Sum of 10 and 20 is" + a + b); //~ Sum of 10 and 20 is 1020

//*
// console.log("Sum of 10 and 20 is " + (10 + 20)); //~ Sum of 10 and 20 is 30
// console.log(a + b + " is Sum of 10 and 20"); //~ 30 is Sum of 10 and 20

//* Type conversion/casting
// console.log("1" + 1); //~ 11
// console.log("1" - 1); //~ 0
// console.log("1" / 1); //~ 1
// console.log("1" * 1); //~ 1

//*
//! CASE-1
// let age = prompt("Enter you age");
// console.log(age); //~ 20
// console.log(typeof age); //~ string

//! CASE-1
// let age = Number(prompt("Enter you age"));
// console.log(age); //~ 20
// console.log(typeof age); //~ Number

//! CASE-3
// let age = prompt("Enter you age");
// let newAge = Number(age);
// console.log(newAge); //~ 20
// console.log(typeof newAge); //~ Number

//* Swap 2 numbers using 3 methods
//! 1. Method
// let a = 10;
// let b = 20;
// let c;

// c = a; //~ c = 10 , a = 10
// a = b; //~ a = 20, b = 20
// b = c; //~ b = 10

// console.log(a); //~ 20
// console.log(b); //~ 10

//! 2. Method

// let a = 10;
// let b = 20;

// a = a + b; //~ 10 + 20 : 30
// b = a - b; //~ 30 - 20 : 10
// a = a - b; //~ 30 - 10 : 20

// console.log(a); //~ 20
// console.log(b); //~ 10

//! 3. Method

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a); //~ 20
// console.log(b); //~ 10

//*
// let a = 11; //~  12, 13
// let b = 22; //~ 23, 24

// let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a= " + a); //~ 13
// console.log("b= " + b); //~ 24
// console.log("c= " + c); //~ 103

// let a = true; //~ 1
// a++;
// console.log(a); //~ 2

// let a = false; //~ 0
// a++;
// console.log(a); //~ 1

// let a = 10++
// console.log(a); //~ SyntaxError: Invalid left-hand side expression in postfix operation

// let a = 10;
// let b = ++(a++)
// console.log(b); //~ SyntaxError: Invalid left-hand side expression in postfix operation

//* Math function

// console.log(Math.round(10.6)); //~ 11
// console.log(Math.round(10.3)); //~ 10
// console.log(Math.ceil(10.5)); //~ 11
// console.log(Math.ceil(10.1)); //~ 11
// console.log(Math.floor(10.9)); //~ 10
// console.log(Math.floor(10.1)); //~ 10
// console.log(Math.trunc(18.98)); //~ 18
// console.log(Math.pow(2, 5)); //~ 2^5 : 32
// console.log(Math.sqrt(6)); //~ 2.449489742783178
// console.log(Math.cbrt(3)); //~ 1.4422495703074083
// console.log(Math.abs(-15)); //~ 15
// console.log(Math.max(78, 68, 12)); //~ 78
// console.log(Math.min(78, 68, 12)); //~ 12

// console.log(Math.random()); //~ 0.7387858412286654
// console.log(Math.round(Math.random() * 10)); //~ Random number between 0 - 9
// console.log(Math.round(Math.random() * 9000) + 1000); //~ Random number between 1000 - 8999

// let a = 89.1976;
// console.log(Number(a.toFixed(2)));
