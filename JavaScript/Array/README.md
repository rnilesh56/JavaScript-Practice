# JavaScript Array Methods Reference

A comprehensive guide to JavaScript Array Helper Methods, High-Order Methods, Loops, and Static Methods.

## 🔑 Legend

- 🔴 **Affected (Mutates):** Modifies the original array.
- 🟢 **Unaffected (Immutable):** Does not change the original array; returns a new value or array.

---

## 📑 Table of Contents

1.  [Basic Array Methods](#1-basic-array-methods)
2.  [High Order Methods (HOM)](#2-high-order-methods-hom)
3.  [Array Loops](#3-array-loops)
4.  [Static Methods](#4-static-methods)

---

## 1. Basic Array Methods

### 1. `push()` 🔴

Adds one or more elements to the **end** of an array and returns the new length.

```javascript
let array = [10, 20, 30, 40];

let newLength = array.push(50, 60);
console.log("New Array length:", newLength); // 6
console.log("New Array:", array); // [ 10, 20, 30, 40, 50, 60 ]
```

### 2. `pop()` 🔴

Removes the **last** element from an array and returns that element.

```javascript
let array = [10, 20, 30, 40];

let deletedElement = array.pop();
console.log("Deleted element:", deletedElement); // 40
console.log("New Array:", array); // [ 10, 20, 30 ]
```

### 3. `shift()` 🔴

Removes the **first** element from an array and returns that element.

```javascript
let array = [10, 20, 30, 40];

let shiftedElement = array.shift();
console.log("Shifted element:", shiftedElement); // 10
console.log("New Array:", array); // [ 20, 30, 40 ]
```

### 4. `unshift()` 🔴

Adds one or more elements to the **beginning** of an array and returns the new length.

```javascript
let array = [10, 20, 30, 40];

let newLength = array.unshift(4, 5);
console.log("Unshifted length:", newLength); // 6
console.log("New Array:", array); // [ 4, 5, 10, 20, 30, 40 ]
```

### 5. `splice()` 🔴

Adds/Removes elements from a specific index.
Accept n number of arguments where 1st arg. is start index and 2nd arg. is number of element and from 3rd argument what to add
1st argument always included the index

> **Syntax:** `splice(startIndex, deleteCount, item1, item2, ...)`

```javascript
let colors = ["red", "green", "blue", "white", "orange", "yellow"];

// CASE 1: Delete specific element
// colors.splice(1, 1);
// Result: ["red", "blue", "white", "orange", "yellow"]

// CASE 2: Insert without deleting
// colors.splice(1, 0, "Saffron");
// Result: ["red", "Saffron", "green", "blue", "white", "orange", "yellow"]

// CASE 3: Replace (Delete then Add)
// colors.splice(2, 1, "Saffron");
// Result: ["red", "green", "Saffron", "white", "orange", "yellow"]

// CASE 4: Delete all from index
let splicedElements = colors.splice(2);
console.log("Removed:", splicedElements); // ['blue', 'white', 'orange', 'yellow']
console.log("Remaining:", colors); // ['red', 'green']
```

### 6. `slice()` 🟢

Returns a shallow copy of a portion of an array into a new array.

> **Syntax:** `slice(startIndex, endIndex)` (End index is excluded)

```javascript
let colors = ["red", "green", "blue", "white", "orange", "yellow"];

// CASE 1
let sliced1 = colors.slice(0, 1);
console.log("Sliced:", sliced1); // [ 'red' ]

// CASE 2 (From index to end)
let sliced2 = colors.slice(2);
console.log("Sliced:", sliced2); // [ 'blue', 'white', 'orange', 'yellow' ]
```

### 7. `includes()` 🟢

Checks if an array includes a certain value. Returns `true` or `false`.

```javascript
let colors = ["red", "green", "blue", "white", "orange", "yellow"];

console.log(colors.includes("blue", 3)); // false (search starts at index 3)
console.log(colors.includes("blue", 2)); // true
```

### 8. `indexOf()` 🟢

Returns the first index at which a given element can be found, or `-1` if not present.

```javascript
let colors = ["red", "green", "blue", "white", "orange", "yellow"];

console.log(colors.indexOf("blue", 3)); // -1
console.log(colors.indexOf("blue")); // 2
```

### 9. `lastIndexOf()` 🟢

Returns the last index at which a given element can be found (searches backwards).

```javascript
let colors = ["red", "green", "blue", "white", "orange", "yellow"];

console.log(colors.lastIndexOf("white", 3)); // 3
console.log(colors.lastIndexOf("white", 1)); // -1
```

### 10. `at()` 🟢

Returns the item at the specified index. Accepts negative integers to count from the end.

```javascript
let colors = ["red", "green", "blue", "white", "orange", "yellow"];

console.log(colors.at(3)); // white
console.log(colors.at(7)); // undefined
```

### 11. `concat()` 🟢

Merges two or more arrays and returns a new array.

```javascript
let colors = ["red", "green"];
let numbers = [10, 20];

let merged = colors.concat(numbers);
console.log(merged); // ["red", "green", 10, 20]
```

### 12. `fill()` 🔴

Changes all elements in an array to a static value from a start index to an end index.

```javascript
let colors = ["red", "green", "blue", "white"];

// Fill "pink" from index 2 to 4
let filled = colors.fill("pink", 2, 4);
console.log(filled); // ['red', 'green', 'pink', 'pink']
```

### 13. `join()` 🟢

Joins all elements of an array into a string, separated by the specified separator.

```javascript
let colors = ["red", "green", "blue"];

console.log(colors.join("")); // "redgreenblue"
console.log(colors.join(",")); // "red,green,blue"
```

### 14. `reverse()` 🔴

Reverses an array in place.

```javascript
let colors = ["red", "green", "blue"];
colors.reverse();
console.log(colors); // [ 'blue', 'green', 'red' ]
```

---

## 2. High Order Methods (HOM)

### 15. `forEach()` 🟢

Executes a provided function once for each array element. Always returns `undefined`.

```javascript
let array = [10, 20, 30, 40];

array.forEach((element, index, arr) => {
  console.log(`Index ${index}: ${element}`);
});
// Output:
// Index 0: 10
// ...
```

### 16. `map()` 🟢

Creates a new array populated with the results of calling a provided function on every element.

```javascript
let numbers = [10, 20, 30, 40];

let newNumbers = numbers.map((num) => num + 1);
console.log("New Numbers:", newNumbers); // [ 11, 21, 31, 41 ]
```

### 17. `filter()` 🟢

Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [6, 8, 9, 5];

let filtered = numbers.filter((ele) => ele > 6);
console.log("Filtered:", filtered); // [ 8, 9 ]
```

### 18. `some()` 🟢

Checks if **at least one** element passes the test. Returns `true` or `false`.

```javascript
let numbers = [6, 1, 4, 7];

let result = numbers.some((ele) => ele < 2);
console.log("Result:", result); // true
```

### 19. `every()` 🟢

Checks if **all** elements pass the test. Returns `true` or `false`.

```javascript
let numbers = [5, 7, 4, 9];

let result = numbers.every((ele) => ele > 4);
console.log("Result:", result); // false (because 4 is not > 4)
```

### 20. `find()` 🟢

Returns the **value** of the first element that satisfies the condition.

```javascript
let numbers = [3, 4, 1, 6, 7];

let result = numbers.find((ele) => ele > 6);
console.log("Result:", result); // 7
```

### 21. `findIndex()` 🟢

Returns the **index** of the first element that satisfies the condition. Returns `-1` if none found.

```javascript
let numbers = [3, 4, 1, 8, 10];

let result = numbers.findIndex((ele) => ele > 7);
console.log("Result:", result); // 3 (Index of 8)
```

### 22. `sort()` 🔴

Sorts the elements of an array in place.

> **Note:** Defaults to string sorting. Use a compare function for numbers.

```javascript
let numbers = [9, 5, 10, 2];

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [ 10, 9, 5, 2 ]

// Ascending
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 2, 5, 9, 10 ]
```

### 23. `reduce()` 🟢

Reduces the array to a single value.

> **Syntax:** `reduce((accumulator, current) => { ... }, initialValue)`

```javascript
let numbers = [4, 2, 1, 5, 8];

// With initial value of 0
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total:", total); // 20
```

---

## 3. Array Loops

### `for...of`

Iterates over the **values**.

```javascript
let colors = ["red", "green", "blue"];

for (const element of colors) {
  console.log("Element:", element);
}
```

### `for...in`

Iterates over the **keys (indexes)**.

```javascript
let colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log("Index:", index);
}
```

---

## 4. Static Methods

### `Array.isArray()`

Checks if the value is an array.

```javascript
console.log(Array.isArray(["red"])); // true
console.log(Array.isArray(20)); // false
```

### `Array.from()`

Creates a new Array instance from an array-like or iterable object.

```javascript
let colors = ["red", "green", "red"];
let uniqueSet = new Set(colors);

let uniqueArray = Array.from(uniqueSet);
console.log(uniqueArray); // ['red', 'green']
```
