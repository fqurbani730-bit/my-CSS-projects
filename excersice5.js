// const span = document.getElementById("span");
// // const stopp = document.getElementById("stop");
// const start = document.getElementById("start");
// start.addEventListener("click", showrandomimg);
// // let count = 20;
// // let interval = setInterval(() => {
// //   count--;
// //   span.innerHTML = count;
// //   if (count == 0) {
// //     clearInterval(interval);
// //   }
// // }, 1000);

// // stopp.addEventListener("click", () => {
// //   clearInterval(interval);
// // });
// let img = [
//   { id: 1, name: "img1", src: "imges of shopping/download (2).jfif" },
//   { id: 2, name: "img2", src: "imges of shopping/images (1).jfif" },
//   { id: 3, name: "img3", src: "imges of shopping/images (2).jfif" },
//   { id: 4, name: "img4", src: "imges of shopping/images (3).jfif" },
//   { id: 5, name: "img5", src: "imges of shopping/images (4).jfif" },
// ];
// let err = [];
// function showrandomimg() {
//   let randomimg = Math.floor(Math.random() * img.length);
//   let selected = img[randomimg];
//   span.innerHTML = err.push(selected.src);
//   console.log(err);
// }

const likesbtn = document.getElementById("stop");
const showlikes = document.getElementById("likes");

function outer() {
  let number = 0;
  return function () {
    number++;
    showlikes.innerHTML = number;
  };
}
let withme = outer();
likesbtn.addEventListener("click", () => {
  withme();
});

const saveBTN = document.getElementById("save");
const save = document.getElementById("span");
function showsaves() {
  let number = 0;
  return function () {
    number++;
    save.innerHTML = number;
  };
}
let show = showsaves();
saveBTN.addEventListener("click", () => show());

const shareBTN = document.getElementById("start");
const showshare = document.getElementById("small");

function showshares() {
  let number = 0;
  return function inner() {
    number++;
    showshare.innerHTML = number;
  };
}
let showtheshare = showshares();
shareBTN.addEventListener("click", () => showtheshare());
