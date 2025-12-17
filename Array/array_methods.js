// ^ Array Helper Methods:

//! 1. push() (Affcted)

// let array = [10, 20, 30, 40];
// console.log("Original Array", array); //~ Original Array [ 10, 20, 30, 40 ]

// let newArray = array.push(50, 60);
// console.log("New Array length", newArray); //~ New Array length 6
// console.log("New Array", array); //~ New Array [ 10, 20, 30, 40, 50, 60 ]

//! 2. pop() (Affcted)

// let array = [10, 20, 30, 40];

// let deletedElementOfArray = array.pop();
// console.log("Deleted element from array: ", deletedElementOfArray); //~ Deleted element from array:  40
// console.log("New Array", array); //~ New Array [ 10, 20, 30 ]

//! 3. shift() (Affcted)

// let array = [10, 20, 30, 40];

// let shiftedArrayElement = array.shift();
// console.log("Shifted array element", shiftedArrayElement); //~ Shifted array element 10
// console.log("New Array: ", array); //~ New Array:  [ 20, 30, 40 ]

//! 4. unshift() (Affcted)

// let array = [10, 20, 30, 40];

// let unShiftedArrayLength = array.unshift(4, 5);
// console.log("Unshifted array length", unShiftedArrayLength); //~ Unshifted array length 6
// console.log("New Array", array); //~ New Array [ 4, 5, 10, 20, 30, 40 ]

//! 5. splice() (Affcted)
//? Accept n number of arguments where 1st arg. is start index and 2nd arg. is number of element and from 3rd argument what to add
//? 1st argument always included the index

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1 (Want to deleted specific element from index)
// let splicedColor = colors.splice(1, 1);
// console.log("Spliced element: ", splicedColor); //~ Spliced element:  [ 'green' ]
// console.log("Original Array", colors); //~ Original Array [ 'red', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2 (Do not want to delete any element, Do not want to add element)
// let splicedColor = colors.splice(1, 0);
// console.log("spliced element: ", splicedColor); //~ spliced element:  []
// console.log("Original Array", colors); //~ Original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-3 (Want to add new element )
// let splicedColor = colors.splice(1, 0, "Safron");
// console.log("spliced element: ", splicedColor); //~ spliced element:  []
// console.log("Original Array", colors); //~ Original Array ['red','Safron','green','blue','white','orange','yellow']

//* CASE-4(A) (Want to delete specific index element and add new elemenet)
// let splicedColor = colors.splice(2, 1, "Safron");
// console.log("spliced element: ", splicedColor); //~ spliced element:  [ 'blue' ]
// console.log("Original Array", colors); //~ Original Array [ 'red', 'green', 'Safron', 'white', 'orange', 'yellow' ]

//* CASE-4(B) (Want to delete from specific index element and add new elemenet till specific index)
// let splicedColor = colors.splice(1, 3, "Safron");
// console.log("spliced element: ", splicedColor); //~ spliced element:  [ 'green', 'blue', 'white' ]
// console.log("Original Array", colors); //~ Original Array [ 'red', 'Safron', 'orange', 'yellow' ]

//* CASE-5 (Delete all element from given index- Only one arg. needed)
// let splicedColor = colors.splice(2);
// console.log("spliced element: ", splicedColor); //~ spliced element:  [ 'blue', 'white', 'orange', 'yellow' ]
// console.log("Original Array", colors); //~ Original Array [ 'red', 'green' ]

//! 6. slice() (Un Affcted)
//? Accepts two arguments, where 1st arg. is start index and 2nd index is till where
//? Start index is included and end index is excluded

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let slicedColor = colors.slice(0, 1);
// console.log("Sliced colors", slicedColor); //~ Sliced colors [ 'red' ]
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

// //* CASE-2
// let slicedColor = colors.slice(2);
// console.log("Sliced colors", slicedColor); //~ Sliced colors [ 'blue', 'white', 'orange', 'yellow' ]
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//! 7. includes() (Un Affcted)
//? It accept two arguments wher 1st arg. is element and the 2nd arg. is the index position from where to start
//? If we not pass 2nd arg. it will start searching from 0th index

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let includesElement = colors.includes("blue", 3);
// console.log("Is included? ", includesElement); //~ Is included?  false
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2
// let includesElement = colors.includes("blue", 2);
// console.log("Is included? ", includesElement); //~ Is included?  true
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//! 8. indexOf() (Un Affcted)
//? It accept two arguments wher 1st arg. is element and the 2nd arg. is the index position from where to start
//?  If we not pass 2nd arg. it will start searching from 0th index

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let indexOfColor = colors.indexOf("blue", 3);
// console.log("Index of element: ", indexOfColor); //~ Index of element:  -1
// console.log("original Array", colors); //~ original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2
// let indexOfColor = colors.indexOf("blue", 0);
// console.log("Index of element: ", indexOfColor); //~ Index of element:  2
// console.log("original Array", colors); //~ original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-3
// let indexOfColor = colors.indexOf("blue");
// console.log("Index of element: ", indexOfColor); //~ Index of element:  2
// console.log("original Array", colors); //~ original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//! 9. lastIndexOf() (Un Affcted)
//? It accept two arguments wher 1st arg. is element and the 2nd arg. is the index position from where to start
//?  If we not pass 2nd arg. it will start searching from 0th index
//? It start searching from right to left

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let lastIndexOfColor = colors.lastIndexOf("white", 3);
// console.log("Last Index of element: ", lastIndexOfColor); //~ Last Index of element:  3
// console.log("original Array", colors); //~ original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2
// let lastIndexOfColor = colors.lastIndexOf("white", 1);
// console.log("Last Index of element: ", lastIndexOfColor); //~ Last Index of element:  -1
// console.log("original Array", colors); //~ original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-3
// let lastIndexOfColor = colors.lastIndexOf("white");
// console.log("Last Index of element: ", lastIndexOfColor); //~ Last Index of element: 3
// console.log("original Array", colors); //~ original Array [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//! 10. at() (Un Affcted)
//? It accepts one argumen where the arg is index position of th element.

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let elementAt = colors.at(3);
// console.log("Element at index: ", elementAt); //~ Element at index:  white
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2
// let elementAt = colors.at(7);
// console.log("Element at index: ", elementAt); //~ Element at index:  undefined
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//! 11. concat() (Un Affcted)
//? It accepts n number of arguments where args. are the elements to be added.
//? Return new array with joined elements

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];
// let numbers = [10, 20];
// let arrays = [40, [50, 60]];

//* CASE-1
// let concatedData = colors.concat(numbers);
// console.log("Concated data:", concatedData); //~ Concated data: ["red", "green", "blue", "white", "orange", "yellow", 10, 20];
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2
// let concatedData = colors.concat(numbers, arrays);
// console.log("Concated data", concatedData); //~ Concated data: ["red", "green", "blue", "white", "orange", "yellow",10, 20, 40, [50, 60]];
// console.log("Original Array: ", colors); //~ Original Array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//! 12. fill() (Affcted)
//? Used to replace the existing array
//? It accepts 3 arguments where 1st arg. is element to be replaced, 2nd arg. is the index position from where to replace and 3rd arg. is the end index position fill where to replace.
//? Returns an array of replaced elements

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let filledData = colors.fill("pink");
// console.log("Filled Data: ", filledData); //~ Filled Data:  [ 'pink', 'pink', 'pink', 'pink', 'pink', 'pink' ]
// console.log("Original array: ", colors); //~ Original array:  [ 'pink', 'pink', 'pink', 'pink', 'pink', 'pink' ]

//* CASE-2
// let filledData = colors.fill("pink", 2);
// console.log("Filled Data: ", filledData); //~ Filled Data:  [ 'red', 'green', 'pink', 'pink', 'pink', 'pink' ]
// console.log("Original array: ", colors); //~ Original array: [ 'red', 'green', 'pink', 'pink', 'pink', 'pink' ]

//* CASE-3
// let filledData = colors.fill("pink", 2, 4);
// console.log("Filled Data: ", filledData); //~ Filled Data:  [ 'red', 'green', 'pink', 'pink', 'orange', 'yellow' ]
// console.log("Original array: ", colors); //~ Original array: [ 'red', 'green', 'pink', 'pink', 'orange', 'yellow' ]

//! 13. join() (Un Affcted)
//? It is used to seperate the array element by specific seperator
//? It accepts one argument of type string where the arg. is a seperator
//? If we do not pass any seperator by default string will be seperated by comma(,).
//? It return a string of seperatoed array elements.

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

//* CASE-1
// let joinedData = colors.join("");
// console.log("Joined data: ", joinedData); //~ Joined data:  redgreenbluewhiteorangeyellow
// console.log("Original array: ", colors); //~ Original array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

//* CASE-2
// let joinedData = colors.join(",");
// console.log("Joined data: ", joinedData); //~ Joined data:  red,green,blue,white,orange,yellow
// console.log("Original array: ", colors); //~ Original array:  [ 'red', 'green', 'blue', 'white', 'orange', 'yellow' ]

// ^ Array High Order Methods(HOM):

//! 14. forEach() (Un Affected)
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? It always return undefined.

//* CASE-1
// let array = [10, 20, 30, 40];
// let iteratedData = array.forEach((elemenet, index, arr) => {
//   console.log("Elemenet", elemenet);
//   console.log("Index: ", index);
//   console.log("Array: ", arr);
// });

//~ Output
// Elemenet 10
// Index:  0
// Array:  [ 10, 20, 30, 40 ]
// Elemenet 20
// Index:  1
// Array:  [ 10, 20, 30, 40 ]
// Elemenet 30
// Index:  2
// Array:  [ 10, 20, 30, 40 ]
// Elemenet 40
// Index:  3
// Array:  [ 10, 20, 30, 40 ]

// console.log("Iterated Data: ", iteratedData); //~ Iterated Data:  undefined
// console.log("Original Array: ", array); //~ Original Array:  [ 10, 20, 30, 40 ]

//* CASE-2
// let numbers = [10, 20, 30, 40];
// let newNumbers = [];
// numbers.forEach((ele, i, arr) => {
//   newNumbers.push(ele + 2);
// });

// console.log("New Array: ", newNumbers); //~ New Array:  [ 12, 22, 32, 42 ]
// console.log("Original Array: ", numbers); //~ Original Array:  [ 10, 20, 30, 40 ]

//! 15. map() (Un Affected)
//? Used to modify the existing elements
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? It returns an array of returned value (value returned by the callback function)

// let numbers = [10, 20, 30, 40];

// let newNumbers = numbers.map((num) => num + 1);
// console.log("New Numbers: ", newNumbers); //~ New Numbers:  [ 11, 21, 31, 41 ]
// console.log("Original Array: ", numbers); //~ Original Array:  [ 10, 20, 30, 40 ]

//! 16. filter() (Un Affected)
//? This method is used to filter out the array elements based on condition
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? It returns an array of element which satisfies the condition

// let numbers = [6, 8, 9, 5];

//* CASE-1 (if satisfy)
// let newNumbers = numbers.filter((ele) => {
//   return ele > 6;
// });

// console.log("Filtered numbers: ", newNumbers); //~ Filtered numbers:  [8, 9]
// console.log("Original Array: ", numbers); //~ Original Array:  [ 6, 8, 9, 5 ]

// let newNumbers = numbers.filter((ele) => {
//   return ele + 4;
// });

// console.log("Filtered numbers: ", newNumbers); //~ Filtered numbers:  []
// console.log("Original Array: ", numbers); //~ Original Array:  [ 6, 8, 9, 5 ]

//* CASE-2 (if not satisfy)
// let newNumbers = numbers.filter((ele) => {
//   return ele < 5;
// });

// console.log("Filtered numbers: ", newNumbers); //~ Filtered numbers:  []
// console.log("Original Array: ", numbers); //~ Original Array:  [ 6, 8, 9, 5 ]

//! 17. some() (Un Affected)
//? This method is used to check whether any one of the elements is satifying the condition or nor
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? This method return true if any one of the element is satisfying and terminates the execution of callback function.
//? This method return false if no element is satisfying the condition.

// let numbers = [6, 1, 4, 7, 2, 11];

//* CASE-1
// let result = numbers.some((ele) => {
//   console.log("Element: ", ele);
//   return ele < 2;
// });

//~ Outputs:
// Element:  6
// Element:  1

// console.log("Result: ", result); //~ Result:  true

//* CASE-2
// let result = numbers.some((ele) => {
//   console.log("Element: ", ele);
//   return ele < 1;
// });

//~ Outputs:
// Element: 6;
// Element: 1;
// Element: 4;
// Element: 7;
// Element: 2;
// Element: 11;

// console.log("Result: ", result); //~ Result:  false

//! 18. every() (Un Affected)
//? This method is used to check whether all of the element is satifying the condition or not.
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? This method returns false if any element is not satisfying the condition and terminates the execution of callback function else return true when all the elements is satisfying the condition

// let numbers = [5, 7, 4, 9, 11];

//* CASE-1
// let result = numbers.every((ele) => {
//   console.log("Element: ", ele);
//   return ele > 4;
// });

//~ Output:
// Element:  5
// Element:  7
// Element:  4

// console.log("Result: ", result); //~ Result:  false
// console.log("Original Array: ", numbers); //~ Original Array:  [ 6, 8, 9, 5 ]

//* CASE-2
// let result = numbers.every((ele) => {
//   console.log("Element: ", ele);
//   return ele > 2;
// });

//~ Output:
// Element:  5
// Element:  7
// Element:  4
// Element:  9
// Element:  11

// console.log("Result: ", result); //~ Result:  true
// console.log("Original Array: ", numbers); //~ Original Array:  [ 6, 8, 9, 5 ]

//! 19. find() (Un Affected)
//? This method is used to get the first element of the array which satisfies the condition.
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? This method returns the element which satisfies the condition ans stop the execution of callback function.
//? If no element is satisfying the condition this method return undefined.

// let numbers = [3, 4, 1, 6, 7, 10];

//* CASE-1
// let result = numbers.find((ele) => {
//   console.log("Element: ", ele);
//   return ele > 6;
// });

//~ Output:
// Element: 3;
// Element: 4;
// Element: 1;
// Element: 6;
// Element: 7;

// console.log("Result: ", result); //~ Result:  7
// console.log("Original Array: ", numbers); //~ Original Array:  [ 3, 4, 1, 6, 7, 10 ]

//* CASE-2
// let result = numbers.find((ele) => {
//   console.log("Element: ", ele);
//   return ele > 11;
// });

//~ Output:
// Element: 3;
// Element: 4;
// Element: 1;
// Element: 6;
// Element: 7;
// Element:  10

// console.log("Result: ", result); //~ Result:  undefined
// console.log("Original Array: ", numbers); //~ Original Array:  [ 3, 4, 1, 6, 7, 10 ]

//! 20. findIndex() (Un Affected)
//? This method is used to get the first index position of the array which satisfies the condition.
//? It accepts one argument where the argument is a callback function
//? Callback function accepts three parameters where the the 1st param holds the elements of the array, 2nd param holds the idnex value of the array and 3rd params holds the entire array.
//? The callback function will be executed the total number of times the elements available inside the array.
//? This method returns the index position which satisfies the condition and stop the execution of callback function.
//? If no element is satisfying the condition this method will return -1.

// let numbers = [3, 4, 1, 8, 10];

//* CASE-1
// let result = numbers.findIndex((ele) => {
//   console.log("Elemenet: ", ele);
//   return ele > 7;
// });

//~ Output:
// Elemenet:  3
// Elemenet:  4
// Elemenet:  1
// Elemenet:  8

// console.log("Result: ", result); //~ Result:  3
// console.log("Original Array: ", numbers); //~ Original Array:  [ 3, 4, 1, 8, 10 ]

//* CASE-2
// let result = numbers.findIndex((ele) => {
//   console.log("Elemenet: ", ele);
//   return ele > 12;
// });

//~ Output:
// Elemenet:  3
// Elemenet:  4
// Elemenet:  1
// Elemenet:  8
// Elemenet:  10

// console.log("Result: ", result); //~ Result:  -1
// console.log("Original Array: ", numbers); //~ Original Array:  [ 3, 4, 1, 8, 10 ]

//! 21. sort() (Affect)
//? This method is used to sort the array elements in ascending or descending order.
//? This method sorts the array elements based on the ASCII value of the first digit or character.
//? This method accept one argument where the arg. is callback function.
//? Callback function accept two parameters where the 1st param is the first element of the array and the 2nd params is the 2nd element of the array(The params of sort will be storing the element of the array based on the iteration).
//? This method return array of stored elements.

// let numbers = [9, 5, 10, 2, 11, 17, 8];

//* CASE-1 (Descending order)
// let sortednumbers = numbers.sort((num1, num2) => {
//   console.log("Number One: ", num1);
//   console.log("Number Two: ", num2);
//   return num2 - num1;
// });

//~ Output:
// Number One:  5
// Number Two:  9
// Number One:  10
// Number Two:  5
// Number One:  10
// Number Two:  5
// Number One:  10
// Number Two:  9
// Number One:  2
// Number Two:  9
// Number One:  2
// Number Two:  5
// Number One:  11
// Number Two:  5
// Number One:  11
// Number Two:  9
// Number One:  11
// Number Two:  10
// Number One:  17
// Number Two:  9
// Number One:  17
// Number Two:  10
// Number One:  17
// Number Two:  11
// Number One:  8
// Number Two:  9
// Number One:  8
// Number Two:  2
// Number One:  8
// Number Two:  5

// console.log("Sorted Array: ", sortednumbers); //~ Sorted Array: [17, 11, 10, 9, 8, 5, 2];
// console.log("Original Array: ", numbers); //~ Original Array: [17, 11, 10, 9, 8, 5, 2];

//* CASE-1 (Ascending order)

// let sortednumbers = numbers.sort((num1, num2) => {
//   console.log("Number One: ", num1);
//   console.log("Number Two: ", num2);
//   return num1 - num2;
// });

//~ Output:
// Number One:  5
// Number Two:  9
// Number One:  10
// Number Two:  5
// Number One:  10
// Number Two:  5
// Number One:  10
// Number Two:  9
// Number One:  2
// Number Two:  9
// Number One:  2
// Number Two:  5
// Number One:  11
// Number Two:  5
// Number One:  11
// Number Two:  9
// Number One:  11
// Number Two:  10
// Number One:  17
// Number Two:  9
// Number One:  17
// Number Two:  10
// Number One:  17
// Number Two:  11
// Number One:  8
// Number Two:  9
// Number One:  8
// Number Two:  2
// Number One:  8
// Number Two:  5

// console.log("Sorted Array: ", sortednumbers); //~ Sorted Array: [2, 5, 8, 9, 10, 11, 17];
// console.log("Original Array: ", numbers); //~ Original Array: [2, 5, 8, 9, 10, 11, 17];

//* CASE-3
//? When ever there is string array we do not pass callback function. It will automitically sort it.

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];
// let stringSortedColors = colors.sort();
// console.log("Sorted String Array", stringSortedColors); //~ Sorted String Array [ 'blue', 'green', 'orange', 'red', 'white', 'yellow' ]
// console.log("Original Array: ", colors); //~ Original Array:  [ 'blue', 'green', 'orange', 'red', 'white', 'yellow' ]

//! 22. reduce() ()
//? This method is used to reduce all the elements to a single value.
//? It accepts two arguments, where 1st arg. is callback function and 2nd arg. is intial value.
//? Callback accepts four parameters, where 1st para will be initial value, if we do not pass 2nd arg. to reduce function/method then the 2nd param is the element from the first index position.
//? The 3rd param is index position of 2nd param of callback function.
//? 4th param is whole array.

// let numbers = [4, 2, 1, 5, 8];

//* CASE-1
// let totalNumber = numbers.reduce((a, b) => a + b);
// console.log("Total: ", totalNumber); //~ Total:  20

//? If we pass 2nd argument to the callback function, the 2nd arg. will be considered as initial value. and 1st element of the array will be considered as b value.

//* CASE-2
// let total = numbers.reduce((a, b) => a + b, 4);
// let total = numbers.reduce((a, b) => {
//   return a + b;
// }, 4);
// console.log("Total: ", total); //~ Total:  24

//* CASE-3
// let total = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log("Accumulator:", accumulator);
//   console.log("Current Value:", currentValue);
//   console.log("Current Index:", currentIndex);
//   console.log("Array:", array);
//   return accumulator + currentValue;
// }, 0);
//? Here 0 is initialValue which is 2nd arg. of reduce method

//~ Output:
//& Iteration One:
// Accumulator: 0
// Current Value: 4
// Current Index: 0
// Array: [ 4, 2, 1, 5, 8 ]

//& Iteration Two:
// Accumulator: 4
// Current Value: 2
// Current Index: 1
// Array: [ 4, 2, 1, 5, 8 ]

//& Iteration Three:
// Accumulator: 6;
// Current Value: 1;
// Current Index: 2;
// Array: [4, 2, 1, 5, 8];

//& Iteration Four:
// Accumulator: 7;
// Current Value: 5;
// Current Index: 3;
// Array: [4, 2, 1, 5, 8];

//& Iteration Five:
// Accumulator: 12
// currentValue: 8
// Current Index: 4
// Array: [ 4, 2, 1, 5, 8 ]

// console.log("Total", total); //~ Total 20

//^ Array loops

//! forOf loop
//? It iterate through the elemenets

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

// for (const element of colors) {
//   console.log("Element: ", element);
// }

//~ Output:
// Element: red;
// Element: green;
// Element: blue;
// Element: white;
// Element: orange;
// Element: yellow;

//! forIn loop
//? It iterate through the indexes

// for (const index in colors) {
//   console.log("Index: ", index);
// }

//~ Output:
// Index: 0;
// Index: 1;
// Index: 2;
// Index: 3;
// Index: 4;
// Index: 5;

//^ Static Method
//! isArray()
//? It checks whether the given argument is array or not

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];
// let b = 20;

// console.log("Is Array: ", Array.isArray(colors)); //~ Is Array:  true
// console.log("Is Array: ", Array.isArray(b)); //~ Is Array:  false

//! Array.from()
//? It covert array look like or iterable object to original array.

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];

// let uniqueColors = new Set(colors);
// console.log("Unique colors: ", uniqueColors); //~ Unique colors:  Set(6) { 'red', 'green', 'blue', 'white', 'orange', 'yellow' }
// console.log("Is Array: ", Array.isArray(uniqueColors)); //~ Is Array:  false
// uniqueColors = Array.from(uniqueColors);
// console.log("Is Array: ", Array.isArray(uniqueColors)); //~ Is Array:  true
// console.log("Sorted Colors: ", uniqueColors.sort()); //~ Sorted Colors:  [ 'blue', 'green', 'orange', 'red', 'white', 'yellow' ]

//! reverse() (Affect)
//? This method used to reverse the array elements
//? This method does not have any arguments
//? This method return an array of reversed elements
//? Reverse method affects the original array

// let colors = ["red", "green", "blue", "white", "orange", "yellow"];
// let sortedColors = colors.sort();
// console.log("Sorted Colors: ", sortedColors);

// let reversedColors = sortedColors.reverse(); //~ Sorted Colors:  [ 'blue', 'green', 'orange', 'red', 'white', 'yellow' ]
// console.log("Reversed Colors: ", reversedColors); //~ Reversed Colors:  [ 'yellow', 'white', 'red', 'orange', 'green', 'blue' ]
