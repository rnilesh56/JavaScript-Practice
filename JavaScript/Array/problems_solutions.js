//! 1. You have an array of student objects. Each student has a name, a status ('active' or 'inactive'), and a list of grades (numbers).

//? Write a function that returns a single string containing the names of all active students who have an average grade higher than 70, separated by commas.

const students = [
  { name: "Alice", status: "active", grades: [80, 70, 90] },
  { name: "Bob", status: "inactive", grades: [90, 90, 80] },
  { name: "Charlie", status: "active", grades: [60, 50, 65] },
  { name: "David", status: "active", grades: [75, 85, 80] },
];

//~ 1. Filter out student whose status is active.
//~ 2. Filter out student whose average grade higher than 70.
//~ 3. Return the name of student separated by commas.
const activeStudentWithGrade70 = (students) => {
  return students
    .filter((student) => student.status === "active")
    .filter((student) => {
      const avg =
        student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
      return avg > 70;
    })
    .map((student) => student.name)
    .join(", ");
};

// let result = activeStudentWithGrade70(students);
// console.log(result);

//! 2. The Scenario: You are building a shopping cart summary. You have an array of "orders," and each order contains an array of items.

//? Write a function that returns an object representing the total quantity of each item across all orders.

const orders = [
  { orderId: 1, items: ["apple", "banana", "apple"] },
  { orderId: 2, items: ["orange", "apple", "mango"] },
  { orderId: 3, items: ["mango", "banana", "mango"] },
];

const getItemsTotal = (orders) => {
  return (
    orders
      // Flatten all items
      .flatMap((order) => order.items)
      // Reduce to a tally object
      .reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
      }, {})
  );
};

// const result = getItemsTotal(orders);
// console.log(result);

//* BEEAKDOWN:

// .flatMap((order) => order.items) //~ ["apple", "banana", "apple", "orange", "apple", "mango", "mango", "banana", "mango"]

//  .reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});

//Flat Array =  ["apple", "banana", "apple", "orange", "apple", "mango", "mango", "banana", "mango"]

// Iteration 1.
// acc = {}
// item = "apple"
// acc["apple"] = (undefined || 0) + 1 = 1
// acc → { apple: 1 }

// Iteration 2
// acc = { apple: 1 }
// item = "banana"
// acc["banana"] = (undefined || 0) + 1 = 1
// acc → { apple: 1, banana: 1 }

//^ Similary for all the data for flat array iteration will happen

//! 3. The Scenario: You have a list of transactions. Each transaction has a user, a category, and an amount.
//? Your Task: Write a function that:
// Filters out any transaction with an amount less than $10.
// Groups the remaining transactions by Category.
// Returns an object where the keys are the categories and the values are the total sum of amounts in that category.

const transactions = [
  { user: "Alice", category: "Food", amount: 50 },
  { user: "Bob", category: "Electronics", amount: 100 },
  { user: "Alice", category: "Food", amount: 5 },
  { user: "Charlie", category: "Food", amount: 20 },
  { user: "Bob", category: "Electronics", amount: 150 },
];

const groupTransactionsByCategory = (transactions) => {
  return (
    transactions
      .filter((transaction) => transaction.amount >= 10)
      // Reduce to a tally object
      .reduce((acc, txn) => {
        acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
        return acc;
      }, {})
  );
};

// let result = groupTransactionsByCategory(transactions);
// console.log(result);

//! 4. The Scenario: You are managing a library system. You have an array of books. Some books are "Checked Out" and some are "Available".

//? Your Task: Write a function processBooks that does the following:
// Find the index of the first book that is "Available" and has a rating lower than 3.
// If such a book exists, remove it from the array.
// If no such book exists, add a new book object to the beginning of the array: { title: "Default Guide", available: true, rating: 5 }.
// The function should return the modified array.

const library = [
  { title: "JS Patterns", available: false, rating: 5 },
  { title: "Bad Code", available: true, rating: 2 },
  { title: "Clean Code", available: true, rating: 4.5 },
];

const processBooks = (books) => {
  // find index of first available book with rating < 3
  const index = books.findIndex(
    (book) => book.available === true && book.rating < 3
  );

  // if found, remove it
  if (index !== -1) {
    books.splice(index, 1);
  }
  // if not found, add default book at the beginning
  else {
    books.unshift({
      title: "Default Guide",
      available: true,
      rating: 5,
    });
  }

  // return modified array
  return books;
};

// const result = processBooks(library);
// console.log(result);

//! 5. The Scenario: You received data from an API as an array of objects, but your Frontend needs it formatted as a "Look-up Object" (Dictionary) for better performance.

//? Your Task: Write a function reformatUsers that:
// Takes the array of users.
// Filters out users who don't have an email.
// Returns an Object where the keys are the id and the values are the name.

const userApiData = [
  { id: "u1", name: "Alice", email: "alice@example.com" },
  { id: "u2", name: "Bob", email: null },
  { id: "u3", name: "Charlie", email: "charlie@example.com" },
];

const reformatUsers = (users) => {
  return users
    .filter((user) => user.email)
    .reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});
};

// const result = reformatUsers(userApiData);
// console.log(result);

//! 6.The Scenario: You have a list of developers, and each developer has a list of technical skills.
//? Your Task: Write a function getUniqueSkills that returns a sorted array of all unique skills across all developers.

const developers = [
  { name: "Alice", skills: ["JavaScript", "React", "Node.js"] },
  { name: "Bob", skills: ["Python", "JavaScript", "SQL"] },
  { name: "Charlie", skills: ["React", "CSS", "HTML"] },
];

// const getUniqueSkills = (developers) => {
//   return [...new Set(developers.flatMap((dev) => dev.skills))].sort();
// };

// const result = getUniqueSkills(developers);
// console.log(result);

//^ BEEAKDOWN

//* Stores only unique values, Automatically removes duplicates
// new Set([...]);
//~ Result:
// Set {
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Python",
//   "SQL",
//   "CSS",
//   "HTML"
// }

//* map() → gives nested arrays, flatMap() → map + flatten in one pass (more expressive & efficient)
// developers.flatMap((dev) => dev.skills);
//~ Result:
// [
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Python",
//   "JavaScript",
//   "SQL",
//   "React",
//   "CSS",
//   "HTML",
// ];

//* alphabetize
// .sort();
//~ Result:
// ["CSS", "HTML", "JavaScript", "Node.js", "Python", "React", "SQL"];

//* Slightly More Verbose (for readability)
const getUniqueSkills = (developers) => {
  const allSkills = developers.flatMap((d) => d.skills);
  console.log(allSkills);
  const uniqueSkills = [...new Set(allSkills)];
  console.log(uniqueSkills);
  return uniqueSkills.sort();
};

//~ console.log(allSkills);
// [
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Python",
//   "JavaScript",
//   "SQL",
//   "React",
//   "CSS",
//   "HTML",
// ];

//~ console.log(uniqueSkills);
// ["JavaScript", "React", "Node.js", "Python", "SQL", "CSS", "HTML"];

// const result = getUniqueSkills(developers);
// console.log(result); //~ [ 'CSS', 'HTML', 'JavaScript', 'Node.js', 'Python', 'React', 'SQL' ]
