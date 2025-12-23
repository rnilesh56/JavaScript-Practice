# JavaScript Object Reference

A comprehensive guide to **JavaScript Objects**, covering fundamentals, CRUD operations, iteration behavior, object creation techniques, and built-in Object methods.

## 🔑 Legend

- 🔴 **Affected (Mutates):** Modifies the original object
- 🟢 **Unaffected (Immutable):** Does not change the original object; returns a new value

> ⚠️ **Important:** Objects in JavaScript are **mutable** and **non-iterable by default**.

---

## 📑 Table of Contents

1. [Object Basics](#1-object-basics)
2. [CRUD Operations](#2-crud-operations)
3. [Duplicate Keys & Undefined](#3-duplicate-keys--undefined)
4. [Object Iteration](#4-object-iteration)
5. [Ways to Create Objects](#5-ways-to-create-objects)
6. [Built-in Object Methods](#6-built-in-object-methods)
7. [Utility Example](#7-utility-example)

---

## 1. Object Basics

### What is an Object?

- An **object** represents a real-world entity
- It is a collection of **key–value pairs**
- Keys and values are separated by `:`
- Each key–value pair is separated by `,`
- Keys must be **unique**
- Objects are **not iterable** using `for...of`

```js
let students = {
  name: "Jhon",
  age: 30,
  marks: 420,
};
```

### Accessing Non-existing Keys

```js
console.log(students.hobbies); // undefined
```

---

## 2. CRUD Operations

### CREATE 🟢

```js
students.dept = "CSE";
students["id"] = 1;

console.log(students);
// { name: 'Jhon', age: 30, marks: 420, dept: 'CSE', id: 1 }
```

---

### READ 🟢

```js
console.log(students.name); // Jhon
console.log(students["marks"]); // 420
console.log(students.hobbies); // undefined
```

---

### UPDATE 🔴

```js
students.age = 24;
students["dept"] = "ICE";

console.log(students);
// { name: 'Jhon', age: 24, marks: 420, dept: 'ICE', id: 1 }
```

---

### DELETE 🔴

```js
delete students.dept;
delete students["marks"];

console.log(students);
// { name: 'Jhon', age: 24, id: 1 }
```

---

## 3. Duplicate Keys & Undefined

- Objects **do not allow duplicate keys**
- The **last occurrence** overwrites earlier ones

```js
let students = {
  name: "Jhon",
  age: 30,
  marks: 420,
  name: "Mike",
  gender: "male",
};

console.log(students);
// { name: 'Mike', age: 30, marks: 420, gender: 'male' }
```

---

## 4. Object Iteration

### ❌ `for...of` (Not Allowed)

```js
for (const student of students) {
  console.log(student);
}
// TypeError: students is not iterable
```

---

### ✅ `for...in`

Iterates over **keys** of an object.

```js
for (const key in students) {
  console.log(key);
}
```

Output:

```
name
age
marks
gender
```

---

### Accessing Values Inside `for...in`

```js
for (const key in students) {
  console.log(key, students.key);
}
```

❌ Output:

```
name undefined
age undefined
marks undefined
gender undefined
```

✅ Correct Way:

```js
for (const key in students) {
  console.log(key, students[key]);
}
```

✔ Output:

```
name Mike
age 30
marks 420
gender male
```

---

## 5. Ways to Create Objects

### 1. Object Literal (Most Common)

```js
let student = { name: "Jhon", age: 30 };
console.log(student);
```

---

### 2. Using `Object()` Constructor

```js
let student = new Object();
student.name = "Jhon";
student.age = 25;

console.log(student);
```

---

### 3. Constructor Function

```js
function Student(name, age, dept) {
  this.name = name;
  this.age = age;
  this.dept = dept;
}

let s = new Student("Jhon", 23, "CSE");
console.log(s);
```

---

### 4. Using Classes (ES6)

```js
class Student {
  name = "Jhon";
  age = 20;
  dept = "CSE";
}

let s = new Student();
console.log(s);
```

---

### 5. Using `Object.create()`

```js
let student = {
  name: "John Doe",
  grade: 10,
};

let newStudent = Object.create(student);

console.log(newStudent); // {}
console.log(newStudent.name); // John Doe
```

---

## 6. Built-in Object Methods

### `Object.keys()` 🟢

```js
console.log(Object.keys(students));
// [ 'name', 'age' ]
```

---

### `Object.values()` 🟢

```js
console.log(Object.values(students));
// [ 'Jhon', 34 ]
```

---

### `Object.entries()` 🟢

```js
console.log(Object.entries(students));
// [ [ 'name', 'Jhon' ], [ 'age', 34 ] ]
```

---

### `Object.freeze()` 🔴

Prevents **add, update, delete** operations.

```js
Object.freeze(students);
students.gender = "male";

console.log(students);
```

---

### `Object.isFrozen()` 🟢

```js
console.log(Object.isFrozen(students)); // true
```

---

### `Object.seal()` 🔴

Allows **update only** (no add/delete).

```js
Object.seal(students);
students.age = 24;

console.log(students);
```

---

### `Object.isSealed()` 🟢

```js
console.log(Object.isSealed(students)); // true
```

---

### `hasOwnProperty()` 🟢

Checks whether a property exists on the object itself.

```js
console.log(students.hasOwnProperty("name")); // true
console.log(students.hasOwnProperty("gender")); // false
```

---

## 7. Utility Example

### Find Length of an Object

```js
let students = { name: "Jhon", age: 34 };

function objectLength(object) {
  let keyCount = 0;
  for (const key in object) {
    keyCount++;
  }
  return keyCount;
}

console.log(objectLength(students)); // 2
```

---

✅ **Summary**

- Objects store data in **key–value pairs**
- Objects are **mutable**
- Use `for...in` for iteration
- Built-in methods help control structure and safety
- Widely used for modeling real-world entities
