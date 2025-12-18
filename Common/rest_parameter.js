//^ Rest Parameter(...)
//* Rest Parameter is used to store rest of the parameter in a function or in a form of array.
//* Rest Parameter is also used to store rest of the array element in the form of array in array destructuring
//* Rest Parameter is also used to store rest of the object properties in the form of object in object destructuring

function add(a, b, ...c) {
  console.log(a, b, c); //~ 2 3 [ 4, 5, 6, 7, 8 ]
}
// add(2, 3, 4, 5, 6, 7, 8);

//! Destructuring
//* Destructuring is a process extracting array elements and storing them inside individual variable, extract object properties store them inside individual variable.
//* These are two type of destructuring:

//^ NOTE: Destructuring avoids using object name or array name again and again when we accessing object properties and array element respectively

//~ 1. Array Destructuring
//* It is a process of extracting the array elements and storing them inside individual variable.

// let colors = ["red", "yellow", "green", "pink", "blue"];

// let [r, y, g, p, b] = colors;
// console.log(r); //~ red

// let [r, y, ...z] = colors;
// console.log(r, y, z); //~ red yellow [ 'green', 'pink', 'blue' ]

//~ 2. Object Destructuring
//* It is a process of extracting object properties and storing them inside individual variable
//* When we perform object destructuring variable name must be same as property names.
//* If you pass any name which is not available in object then it stores undefined.

// let students = {
//   id: 1,
//   name: "Jhon",
//   dept: "CSE",
//   marks: { math: 60, science: 80 },
// };

// console.log(students); //~ { id: 1, name: 'Jhon', dept: 'CSE', marks: { math: 60, science: 80 } }

// let { a, b, c, d } = students;
// console.log(a, b, c, d); //~ undefined undefined undefined undefined

// let { name, marks } = students;
// console.log(name, marks); //~ Jhon { math: 60, science: 80 }

// let { dept: department } = students;
// console.log(dept); //~ dept is not defined
// console.log(department); //~ CSE

// let { name, dept, ...details } = students;
// console.log(name, dept, details); //~ Jhon CSE { id: 1, marks: { math: 60, science: 80 } }

let students = [
  {
    id: 1,
    name: "Jhon",
    dept: "CSE",
    marks: { math: 60, science: 80 },
  },
  {
    id: 2,
    name: "Nick",
    dept: "ICE",
    marks: { math: 70, science: 88 },
  },
  {
    id: 3,
    name: "Reva",
    dept: "Mech",
    marks: { math: 80, science: 70 },
  },
];

// for (const { name, dept } of students) {
//   console.log(name, dept);
// }

// students.forEach(({ name, dept }) => {
//   console.log(name, dept);
// });

//~ Output for both
// Jhon CSE
// Nick ICE
// Reva Mech
