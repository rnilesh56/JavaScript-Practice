// let res = document.getElementById("res");
// let rej = document.getElementById("rej");

// const buttonPromise = new Promise((resolve, reject) => {
//   res.addEventListener("click", () => {
//     resolve("Button was clicked!");
//   });
//   rej.addEventListener("click", () => {
//     reject("Some error happened!");
//   });
// })
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

const newPromise = async () => {
  return "Hello";
};

console.log(newPromise());
