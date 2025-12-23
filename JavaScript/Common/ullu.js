const button = document.getElementById("btn");

console.log(button);

button.addEventListener("click", (e) => {
  console.log(e.target.dataset.sabuId);
});
