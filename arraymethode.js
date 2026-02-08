const sidebar = document.getElementById("toggle");
const close_btn = document.getElementById("close");
const open_btn = document.getElementById("open");
const model = document.getElementById("modal");
console.log(model);
// addevent listeners part
sidebar.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});
open_btn.addEventListener("click", () => {
  model.classList.add("show-modal");
});
close_btn.addEventListener("click", () => {
  model.classList.remove("show-modal");
});
window.addEventListener("click", (e) => {
  e.target == model ? model.classList.remove("show-modal") : false;
});
