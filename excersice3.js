// const age = document.getElementById("age");
// const login = document.getElementById("btn");
// login.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (age.value.trim() == 0) {
//     alert("enter your age");
//   } else if (age.value.trim() < 18) {
//     alert("you are child");
//   } else {
//     alert("successfully");
//   }
// });
// const hide = document.getElementById("hide");
// const paragraph = document.getElementById("para2");
// let before = "sdfghjhgfdfbg";
// let neme = "this is ";
// let change = false;
// hide.addEventListener("click", () => {
//   if (change) {
//     paragraph.innerHTML = before;
//   } else {
//     paragraph.innerHTML = neme;
//   }
//   change = !change;
// const innter = document.createElement("h1");
// const inter = (innter.innerHTML = "hello my honey");
// const div = document.getElementById("div");
// div.appendChild(innter);
// // inter.replaceAll("h", "ll");
// const fruit = document.getElementById("age");
// const hide = document.getElementById("hide");
// let form = document.getElementById("form");

// // let array = [];
// // hide.addEventListener("click", () => {
// //   if (fruit.value.trim() == 0) {
// //     alert("Enter sth");
// //   } else {
// //     array.push(fruit.value.trim());
// //   }
// //   fruit.value = "";
// //   console.log(array);
// // });
// // let i = 0;
// // form.addEventListener("submit", (w) => {
// //   w.preventDefault();
// //   i++;
// //   if (i >= 3) {
// //     hide.style.display = "none";
// //   }
// // });h
// hide.addEventListener("click", (e) => {
//   e.preventDefault();
//   let c = confirm("do you accepted");
//   if (c == true) {
//     window.location.href = "https://en.wikipedia.org/wiki/Cooking";
//     console.log("hello");
//   } else {
//     console.log("cancel");
//   }
// });
// let body = document.querySelector("body");
// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     const text = document.createElement("h3");
//     text.innerHTML = "wellcome";
//     body.appendChild(text);
//   }, 2000);
// });
// let para = document.getElementById("para2");
// let screen = 0;
// let interval = null;

// interval = setInterval(() => {
//   screen++;
//   para.innerHTML = screen;
//   console.log(screen);
// }, 1000);
// let btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   clearInterval(interval);
// });
let span = document.getElementById("span");
const hide = document.getElementById("hide");
let screen = 0;
let interva = setInterval(() => {
  span.innerHTML = Math.round(Math.random() * 1000);
}, 1000);
hide.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(interva);
});
