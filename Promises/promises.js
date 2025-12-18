//! 1.

// let data = 30;
// let promiseData = new Promise((res, rej) => {
//   if (data === 20) {
//     res("Data is matching");
//   } else {
//     rej("Data is not matching");
//   }
// });

// console.log(promiseData);
// //~ if resolved : Data is matching
// //~ if rejected : Data is not matching

// promiseData
//   .then((resolvedData) => console.log(resolvedData)) //~ Data is matching
//   .catch((rejectedData) => console.log(rejectedData)); //~ Data is not matching

//! 2.

// let students = [
//   { name: "Jhon", dept: "CSE" },
//   { name: "Kevin", dept: "ICE" },
// ];

// let promiseData = new Promise((res, rej) => {
//   if (students.length > 0) {
//     res({ data: students, message: "Found successfully" });
//   } else {
//     rej({ data: null, message: "Data not found" });
//   }
// });

// promiseData
//   .then((res) => {
//     let studentList = document.getElementById("student-list");
//     res.data.map((student) => {
//       return (studentList.innerHTML += `<li>${student.name}</li>`);
//     });
//   })
//   .catch((res) => {
//     let studentList = document.getElementById("student-list");
//     studentList.innerHTML += `<li>${res.message}</li>`;
//   });

//! 3.
// let data = fetch("https://fakestoreapi.com/products");

// data
//   .then((res) => {
//     return res.json();
//   })
//   .then((resData) => {
//     let productDatalist = document.getElementById("student-list");
//     resData.map((product) => {
//       return (productDatalist.innerHTML += `<li>${product.title}</li>`);
//     });
//   })
//   .catch((err) => {
//     let productDatalist = document.getElementById("student-list");
//     productDatalist.innerHTML += `<h1>${err.message}</h1>`;
//   });

//^ Async & Await :
//* Async and Await are the keywords which are used to handle asynchronous type of data.
//* Async and Await is nothing but a syntatic sugar(sorter syntax) of promises
//* Async makes the function asynchronous where the await wait for the the promise to be resolved and allow other part of code to execute/
//* Asynchronous function always returns promise object.

//~ Example:

// let data = 20;
//!
// let promiseData = new Promise((res, rej) => {
//   if (data === 20) {
//     res("Data is matching");
//   } else {
//     rej("Data is not matching");
//   }
// });

// console.log(promiseData);
// //~ if resolved : Data is matching
// //~ if rejected : Data is not matching

// promiseData
//   .then((resolvedData) => console.log(resolvedData)) //~ Data is matching
//   .catch((rejectedData) => console.log(rejectedData)); //~ Data is not matching

//!
// const getValue = async (data) => {
//   try {
//     let res = await data;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getValue(data);

//!
// const getProducts = async () => {
//   try {
//     let products = await fetch("https://fakestoreapi.com/products");
//     products = await products.json();
//     console.log(products);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getProducts();
