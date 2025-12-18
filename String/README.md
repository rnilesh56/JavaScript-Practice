# JavaScript String Methods Reference

A comprehensive guide to JavaScript **String Basics**, **String Properties**, and **String Methods** with clear explanations and examples.

## 🔑 Legend

- 🔴 **Affected (Mutates):** Modifies the original value _(Strings never mutate)_
- 🟢 **Unaffected (Immutable):** Does not change the original string; returns a new value

> ⚠️ **Important:** Strings in JavaScript are **immutable**. All string methods return a **new string**.

---

## 📑 Table of Contents

1. [String Basics](#1-string-basics)
2. [Template Literals](#2-template-literals)
3. [Common String Methods](#3-common-string-methods)
4. [Padding & Trimming](#4-padding--trimming)
5. [Extracting & Splitting](#5-extracting--splitting)

---

## 1. String Basics

### What is a String?

A **string** is a collection of characters enclosed in:

- Double quotes `""`
- Single quotes `''`
- Backticks ` `` ` (Template Literals – ES6)

```js
let str1 = "Hello";
let str2 = "JavaScript";
let str3 = `World`;
```

### String Properties

#### `length`

Returns the number of characters in a string.

```js
let string = "example";
console.log(string.length); // 7
```

### String Indexing

```js
let string = "example";
console.log(string[4]); // p
```

❌ Strings cannot be mutated:

```js
string[4] = "y";
console.log(string); // example
```

---

## 2. Template Literals

Template literals allow:

- Multi-line strings
- Expression interpolation using `${}`

```js
let a = 20;
let b = 30;
let c = a + b;

// ❌ String literal
console.log("The sum of ${a} and ${b} is ${c}.");

// ✅ Template literal
console.log(`The sum of ${a} and ${b} is ${c}.`);
```

Multi-line strings:

```js
let text = `hello
JavaScript`;
console.log(text);
```

---

## 3. Common String Methods

### 1. `toLowerCase()` 🟢

Converts the string to lowercase.

```js
let str = "Hello JavaScript";
console.log(str.toLowerCase()); // hello javascript
```

---

### 2. `toUpperCase()` 🟢

Converts the string to uppercase.

```js
let str = "Hello JavaScript";
console.log(str.toUpperCase()); // HELLO JAVASCRIPT
```

---

### 3. `includes()` 🟢

Checks whether a string contains a given substring.

> **Syntax:** `includes(searchString, position)`

```js
let str = "Hello JavaScript";

console.log(str.includes("ll", 6)); // false
console.log(str.includes("l")); // true
```

---

### 4. `indexOf()` 🟢

Returns the first index of the specified value or `-1` if not found.

```js
let str = "Hello JavaScript";

console.log(str.indexOf("p", 6)); // 14
console.log(str.indexOf("z")); // -1
```

---

### 5. `lastIndexOf()` 🟢

Returns the last occurrence index of a specified value.

```js
let str = "Hello JavaScript";

console.log(str.lastIndexOf("e", 10)); // 1
console.log(str.lastIndexOf("z")); // -1
```

---

### 6. `startsWith()` 🟢

Checks whether a string starts with specified characters.

```js
let str = "Hello JavaScript";

console.log(str.startsWith("o")); // false
console.log(str.startsWith("H")); // true
```

---

## 4. Padding & Trimming

### 7. `trim()`, `trimStart()`, `trimEnd()` 🟢

Removes whitespace from a string.

```js
let str = "   Hello JavaScript   ";

console.log(str.trimStart()); // 'Hello JavaScript   '
console.log(str.trimEnd()); // '   Hello JavaScript'
console.log(str.trim()); // 'Hello JavaScript'
```

---

### 8. `padStart()` 🟢

Pads the string from the start.

```js
const str = "5";
console.log(str.padStart(3, "0")); // 005
```

Real-world example (masking):

```js
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const masked = last4Digits.padStart(fullNumber.length, "*");

console.log(masked); // ************5581
```

---

### 9. `padEnd()` 🟢

Pads the string from the end.

```js
const str1 = "Breaded Mushrooms";
console.log(str1.padEnd(25, ".")); // Breaded Mushrooms........

const str2 = "200";
console.log(str2.padEnd(5)); // '200  '
```

---

## 5. Extracting & Splitting

### 10. `slice()` 🟢

Extracts a section of a string.

> **Syntax:** `slice(startIndex, endIndex)` (end excluded)

```js
let str = "Hello JavaScript";

console.log(str.slice(2, 3)); // l
console.log(str.slice(6)); // JavaScript
console.log(str.slice(-8, -3)); // vaScr
```

---

### 11. `substring()` 🟢

Similar to `slice()` but does not support negative indexes.

```js
const str = "JavaScript";

console.log(str.substring(1, 3)); // av
console.log(str.substring(2)); // vaScript
```

---

### 12. `split()` 🟢

Splits a string into an array.

> **Syntax:** `split(separator, limit)`

```js
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]); // fox

const chars = str.split("");
console.log(chars[8]); // k
```

More examples:

```js
let str = "JavaScript";

console.log(str.split("a")); // [ 'J', 'v', 'Script' ]
console.log(str.split("")); // [ 'J','a','v','a','S','c','r','i','p','t' ]
console.log(str.split()); // [ 'JavaScript' ]
console.log(str.split("a", 1)); // [ 'J' ]
```

Reverse a string:

```js
console.log(str.split("").reverse().join("")); // tpircSavaJ
```

---

✅ **Summary**

- Strings are **immutable**
- All methods return **new values**
- Commonly used for validation, formatting, masking, and parsing text
