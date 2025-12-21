//! for loop

// for (initialisation; condition; updation) {}

// for (i = 1; i < 23; i++) {
//   console.log(i);
// }

// for (let i = 20; i > 9; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; ) {
//   console.log(i);
// }

//* Sum of n natural number;

// let input;
// console.log(input);

// let input = 5;
// if (isNaN(input)) {
//   console.log("Invalid input");
// } else {
//   if (input > 0) {
//     let sum = 0;
//     for (let i = 1; i <= input; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   } else {
//     console.log("Should be +ve and more than 0");
//   }
// }

//* factorial of number

// let input = 5;
// if (isNaN(input)) {
//   console.log("Invalid input");
// } else {
//   if (input > 0) {
//     let factorial = 1;
//     for (let i = 1; i <= input; i++) {
//       factorial *= i;
//     }
//     console.log(factorial);
//   } else {
//     console.log("Should be +ve and more than 0");
//   }
// }

//* factors of number

// let input = 15;
// if (isNaN(input)) {
//   console.log("Invalid input");
// } else {
//   if (input > 0) {
//     for (let i = 1; i <= Math.floor(input / 2); i++) {
//       if (input % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(input);
//   } else {
//     console.log("Should be +ve and more than 0");
//   }
// }

//* prime number

// let input = 13;
// if (isNaN(input)) {
//   console.log("Invalid input");
// } else {
//   if (input > 0) {
//     if (input <= 1) {
//       console.log(false);
//     } else {
//       let isPrimeNumber = true;
//       for (let i = 2; i <= Math.floor(input / 2); i++) {
//         if (input % i === 0) {
//           isPrimeNumber = false;
//           break;
//         }
//       }
//       console.log(isPrimeNumber);
//     }
//   } else {
//     console.log("Should be +ve and more than 0");
//   }
// }

// const isPrime = (n) => {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % 1 == 0) return false;
//   }
//   return true;
// };

// console.log(isPrime(32));

//! Break & continue
//* Break break the loop and continue skip the iteration

// for (let i = 1; i < 23; i++) {
//   //   if (i === 11) break;
//   if (i === 11) continue;
//   else console.log(i);
// }

//! While loop

// initialisation
// while(condition){
//     code...
//     updation
// }

// let i = 1;
// while (i < 23) {
//   console.log(i);
//   i++;
// }

//* Sum of digit
// let input = 1234;
// if (isNaN(input)) {
//   console.log("Invalid input");
// } else {
//   if (input > 0) {
//     let sum = 0;
//     while (input > 0) {
//       let remainder = input % 10;
//       sum += remainder;
//       input = Math.floor(input / 10);
//     }
//     console.log(sum);
//   } else {
//     console.log("Should be +ve and more than 0");
//   }
// }

//* number of reverse

// let input = 1234;
// if (isNaN(input)) {
//   console.log("Invalid input");
// } else {
//   if (input > 0) {
//     let reverse = 0;
//     while (input > 0) {
//       let remainder = input % 10;
//       reverse = reverse * 10 + remainder;
//       input = Math.floor(input / 10);
//     }
//     console.log(reverse);
//   } else {
//     console.log("Should be +ve and more than 0");
//   }
// }

//* strong number

let input = 145;
if (isNaN(input)) {
  console.log("Invalid input");
} else {
  if (input > 0) {
    let sum = 0;
    let copyInput = input;
    while (input > 0) {
      let remainder = input % 10;
      let factorial = 1;
      for (let i = 1; i <= remainder; i++) {
        factorial = factorial * i;
        console.log(factorial);
      }
      sum = sum + factorial;
      console.log(sum);
      input = Math.floor(input / 10);
    }
    if (copyInput === sum) {
      console.log("Strong number");
    } else {
      console.log("Not a strong number");
    }
  } else {
    console.log("Should be +ve and more than 0");
  }
}

//! Do while loop
// do{
//     code...
//     updation
// }while(condition)

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//* Guess the number.

// let random = Math.floor(Math.random() * 100) + 1;
// let guess = 0;

// while (guess !== random) {
//   guess = Number(prompt("Guess the number"));
//   if (isNaN(guess) || guess < 0 || guess > 100) {
//     console.log("Try again between 1-100");
//     continue;
//   }
//   if (guess > random) {
//     console.log("Too high, Try again");
//   } else if (guess < random) {
//     console.log("Too low, try again");
//   } else {
//     console.log("Correct guess number was ", guess);
//   }
// }
