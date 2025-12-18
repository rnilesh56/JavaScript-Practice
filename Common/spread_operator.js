//^ Spread Operator
//* Spread operator is used to spread the array elements as indivisual elements and object properties as indivisiual properties.
//* By using spread operator we can create deep copy of object. (Only one level deep copy can be created)

//! Shallow Copy
//~ Shallow copy is nothing but the copy of the object with same address.

//! Deep Copy
//~ Deep copy is nothing but copy of the object with different reference.
//~ If you want to perform complete DEEP COPY we have to use JSON.stringify() & JSON.parse().

//! JSON.stringify()
//~ JSON.stringify is a method which is used to convert JAVASCRIPT object to JSON object when entire JSON is a single string

//! JSON.parse()
//~ JSON.Parse method is used to convert JSON object to a pure JAVASCRIPT object.

// EXAMPLE:
// let students = { name: "Jhon", age: 30 };
// let jsonStudents = JSON.stringify(students);
// console.log(jsonStudents); //~ {"name":"Jhon","age":30}
// console.log(typeof jsonStudents); //~ string

// let parseStudent = JSON.parse(jsonStudents);
// console.log(parseStudent); //~ { name: 'Jhon', age: 30 }
// console.log(typeof parseStudent); //~ object

//* Spread operator cannot be achived for nested object or array.

let students = {
  id: 1,
  name: "Jhon",
  dept: "CSE",
  marks: { math: 60, sceince: 70 },
};

// let favStudent = { ...students };
// console.log(students); //~ { id: 1, name: 'Jhon', depy: 'CSE', marks: { math: 60, sceince: 70 } }

// students.dept = "ICE";
// students.marks.it = 80;
// console.log(students); //~ {id: 1,name: 'Jhon', dept: 'ICE', marks: { math: 60, sceince: 70, it: 80 }}
// console.log(favStudent); //~ { id: 1, name: 'Jhon', depy: 'CSE', marks: { math: 60, sceince: 70, it: 80 } }

// favStudent.dept = "Mech";
// favStudent.marks.it = 76;
// console.log(students); //~ {id: 1,name: 'Jhon', dept: 'ICE', marks: { math: 60, sceince: 70, it: 76 }}
// console.log(favStudent); //~ {id: 1,name: 'Jhon', dept: 'Mech', marks: { math: 60, sceince: 70, it: 76 }}

let favStudent = JSON.parse(JSON.stringify(students));
//* By doing this we can achive deep copy for n number of nested object

favStudent.dept = "ICE";
// console.log(favStudent); //~ { id: 1, name: 'Jhon', depy: 'ICE', marks: { math: 60, sceince: 70 } }
// console.log(students); //~ { id: 1, name: 'Jhon', depy: 'CSE', marks: { math: 60, sceince: 70 } }

//! JSON (JavaScript Object Notation)
//~  JSON is a light weight data exchange formate between the client and the server

//* JSON Object:

// [
//   { "id": 1, "name": "Jhon", "dept": "CSE" },
//   { "id": 2, "name": "Kevin", "dept": "ICE" },
// ];
