//! Task 1: The Character Counter
//? Write a function countCharacters(str) that takes a string and returns an object where the keys are the characters and the values are how many times they appear.

let str = "hello";
const countCharacters = (str) => {
  //   return str.split("").reduce((acc, char) => {
  //     acc[char] = (acc[char] || 0) + 1;
  //     return acc;
  //   }, {});
  const result = {};
  for (const element of str) {
    result[element] = (result[element] || 0) + 1;
  }
  return result;
};

// console.log(countCharacters(str)); //~ { h: 1, e: 1, l: 2, o: 1 }

//! Task 2: The "Price Is Right" (CRUD & Logic)
//? You are given an object representing a grocery store's inventory.
// Update the price of "Apples" to 2.5.
// Add a new item "Oranges" with a price of 3.0.
// Delete "Bread" from the inventory.
// Calculate the total price of all remaining items using a loop.

let inventory = {
  Apples: 1.5,
  Bananas: 0.8,
  Bread: 2.0,
};

inventory["Apples"] = 2.5;
inventory["Oranges"] = 3.0;
delete inventory["Bread"];

let totalPrice = 0;
for (const item in inventory) {
  totalPrice += inventory[item];
}
// console.log(totalPrice);

//! Task 3: Converting Arrays to Objects
//? Often, data comes from a database as an array of objects. Write a function mapUserIds(users) that takes an array of user objects and returns a single object where the ID is the key and the user object is the value.

const apiData = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
];

// { "101": {id: 101, name: "Alice"}, "102": {id: 102, name: "Bob"} }

// const mapUserIds = (users) => {
//   return users.reduce((acc, user) => {
//     acc[user.id] = user;
//     return acc;
//   }, {});
// };

const mapUserIds = (users) =>
  Object.fromEntries(users.map((user) => [user.id, user]));

// console.log(mapUserIds(apiData)); //~ { '101': { id: 101, name: 'Alice' }, '102': { id: 102, name: 'Bob' } }

//! Task 4: The "Deep Dive" Challenge
//* Imagine you are building a simple School Management System. You have an object containing students, and each student has a nested object for their grades.
//?Your Task:
// Write a function getHonorRoll(students) that returns an array of names of students who have an average grade above 85.
// Use the data structure provided below.

const school = {
  Alice: { math: 90, science: 85, history: 88 },
  Bob: { math: 70, science: 75, history: 80 },
  Charlie: { math: 95, science: 92, history: 90 },
};

const getHonorRoll = (students) => {
  return Object.entries(students)
    .filter(([_, grades]) => {
      const vals = Object.values(grades);
      const avg = vals.reduce((sum, g) => sum + g, 0) / vals.length;
      return avg > 85;
    })
    .map(([name]) => name);
};

// console.log(getHonorRoll(school)); //~ ["Alice", "Charlie"]
