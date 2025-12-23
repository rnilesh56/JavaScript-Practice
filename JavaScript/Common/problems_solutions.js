//! Task 1: The Infinite Adder (Rest Parameter)
//? Write a function sumAll(...numbers) that can take any number of arguments and returns their total sum. However, if no arguments are passed, it should return 0.

const sumAll = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

// console.log(sumAll(1, 2, 3)); //~ 6
// console.log(sumAll(10, 20, 30, 40, 50)); //~ 150
// console.log(sumAll()); //~ 0

//! Profile Merger (Spread Operator)
//? You are building a user profile system. You have a baseConfig object and a userUpdates object.
// Create a new object finalProfile that merges both.
// The userUpdates should overwrite any matching properties in baseConfig.
// Crucial: Ensure that modifying finalProfile.settings does not change baseConfig.settings (Hint: Deep Copy).

const baseConfig = {
  theme: "light",
  notifications: true,
  settings: {
    fontSize: "14px",
    language: "en",
  },
};

const userUpdates = {
  theme: "dark",
  settings: {
    fontSize: "18px",
  },
};

const finalProfile = {
  ...baseConfig,
  ...userUpdates,
  settings: { ...baseConfig.settings, ...userUpdates.settings },
};
finalProfile.settings.fontSize = "20px";

// console.log(finalProfile); //~ {theme: 'dark', notifications: true, settings: { fontSize: '20px', language: 'en' }}
// console.log(baseConfig); //~ {theme: 'light', notifications: true, settings: { fontSize: '14px', language: 'en' }}

//! Task 3: Nested Destructuring & Defaults
//? Given the following data, use Object Destructuring in a single line (or a single statement) to extract:
// The title of the book.
// The firstName of the author.
// The coAuthor name, but provide a default value of "No Co-Author" if it doesn't exist.

const book = {
  title: "The JS Way",
  author: {
    firstName: "John",
    lastName: "Doe",
  },
  year: 2024,
};

const {
  title,
  author: { firstName },
  coAuthor = "No co-author",
} = book;

// console.log(title); //~ The JS Way
// console.log(firstName); //~ John
// console.log(coAuthor); //~ No Co-Author

//! Task 3: A "Gotcha" Challenge: The Array Reference
//? The Scenario: You have a list of products. you want to create a saleItems list where the first item is 50% off, but the original products list must remain unchanged.

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
];

const saleItems = [...products];

saleItems[0].price = 500;

// console.log(products[0].price); //~ 500

// The Answer: It will be 500. Even though you spread the array, the objects inside the array still point to the same memory address. This is why your JSON.parse(JSON.stringify()) notes are so important!
