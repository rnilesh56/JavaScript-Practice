//^ Objects in JAVASCRIPT

//* Object is a real world entity which is having physical existance.
//* JS object is a collection of key and value pairs.
//* The key and value must be seperated by colon(:) and key value pair must be seperated by comma(,).
//* If we try to access the key which is not available inside the object then we get undefined.
//* JS object does not allow duplicate keys.
//* If we pass any duplicate to the JS object last occured key value will be considered.
//* JS object is not an iterable type.

//~ EXAMPLE:

// let students = {
//   name: "Jhon",
//   age: 30,
//   marks: 420,
// };

//* CRUD:

//? CREATE
// students.dept = "CSE";
// students["id"] = 1;
// console.log(students); //~ { name: 'Jhon', age: 30, marks: 420, dept: 'CSE', id: 1 }

//? UPDATE
// students.age = 24;
// students["dept"] = "ICE";
// console.log(students); //~ { name: 'Jhon', age: 24, marks: 420, dept: 'ICE', id: 1 }

//? READ
// console.log(students.name); //~ Jhon
// console.log(students["marks"]); //~ 420
// console.log(students.hobbies); //~ undefined

//? DELETE
// delete students.dept;
// console.log(students); //~ { name: 'Jhon', age: 24, marks: 420, id: 1 }
// delete students["marks"];
// console.log(students); //~ { name: 'Jhon', age: 24, id: 1 }

//~ EXPLORE

// let students = {
//   name: "Jhon",
//   age: 30,
//   marks: 420,
//   name: "Mike",
//   gender: "male",
// };

// console.log(students); //~ { name: 'Mike', age: 30, marks: 420, gender: 'male' }

// for (const student of students) {
//   console.log(student); //~ TypeError: students is not iterable
// }

// for (const student in students) {
//   console.log(student);
// }

//~ Output keys only
// name
// age
// marks
// gender

//* forOf loop aplicable only on iterable type of objects.
//* forOf loop iterate the array elements and the character of the string when we apply to array and string respectively
//* If we apply forOf loop for JS object we get an error called object is not iterable.

//* forIn loop iterable the index position when we apply to the iterable type of objects
//* If we apply forIn loop to the JS object we get key name of the object.

// for (const key in students) {
//   console.log(typeof key); //~ string
//   console.log(key, students.key);
//   console.log(key, students[key]);
// }

//~ Output

//~ console.log(key, students.key);
// name undefined
// age undefined
// marks undefined
// gender undefined

//~ console.log(key, students[key]);
// name Mike
// age 30
// marks 420
// gender male

//* Different ways of object in JAVASCRIPT
//! 1. Object literal
// let student = { name: "Jhon", age: 30 };
// console.log(student); //~ { name: 'Jhon', age: 30 }

//! 2. Using inbuild Object()
// let student = new Object();
// student.name = "Jhon";
// student.age = 25;
// console.log(student); //~ { name: 'Jhon', age: 25 }

//! 3. Using constructor function
//* Constructor function is a function by using which we create an object.
// function Student(name, age, dept) {
//   this.name = name;
//   this.age = age;
//   this.dept = dept;
// }

// let s = new Student("Jhon", 23, "CSE");
// console.log(s); //~ Student { name: 'Jhon', age: 23, dept: 'CSE' }

//! 4. Using classes
// class Student {
//   name = "Jhon";
//   age = 20;
//   dept = "CSE";
// }

// let s = new Student();
// console.log(s); //~ Student { name: 'Jhon', age: 20, dept: 'CSE' }

//! 5. Using create()
// let student = {
//   name: "John Doe",
//   grade: 10,
// };
// let newStudent = Object.create(student);
// console.log(newStudent); //~ {}
// console.log(newStudent.name); //~ John Doe

//* Methods in Object

// let students = { name: "Jhon", age: 34 };

//! Object.keys()
// console.log(Object.keys(students)); //~ [ 'name', 'age' ]

//! Object.value()
// console.log(Object.values(students)); //~ [ 'Jhon', 34 ]

//! Object.entries()
// console.log(Object.entries(students)); //~ [ [ 'name', 'Jhon' ], [ 'age', 34 ] ]

//! Object.freeze()
//* We cannot perform CRUD
// Object.freeze(students);
// students.gender = "male";
// console.log(students); //~ { name: 'Jhon', age: 34 }

//! Object.isFRozen()
// console.log(Object.isFrozen(students)); //~ true

//! Object.seal()
//* We can only update the value
// Object.seal(students);
// students.age = 24;
// console.log(students); //~ { name: 'Jhon', age: 24 }

//! Object.isSealed()
// console.log(Object.isSealed(students)); //~ true

//! Object.hasOwnProperty()
// console.log(Object.hasOwnProperty("name")); //~ true
// console.log(Object.hasOwnProperty("gender")); //~ false

//* Exercise:
let students = { name: "Jhon", age: 34 };

function objectLength(object) {
  //* CASE-1
  //   let keyLength = Object.keys(object);
  //   return keyLength.length;
  //* CASE-2
  let keyCount = 0;
  for (const i in object) {
    keyCount++;
  }
  return keyCount;
}

console.log(objectLength(students)); //~ 2
