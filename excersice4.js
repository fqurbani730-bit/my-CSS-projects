const form = document.getElementById("form");
const input = document.getElementById("text");
const select = document.getElementById("select");
const number = document.getElementById("number");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");
const span = document.getElementById("span");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkvalid(input, 4, 6);
  checknumber(number, 1, 6);
  checkselect(select);
});
function checkvalid(input, min, max) {
  if (input.value.length == 0) {
    error(input, `please inter somethig`);
  } else if (input.value.trim().length <= min) {
    error(input, `name must be more than ${min} charecter`);
  } else if (input.value.trim().length > max) {
    error(input, `name must be less than ${max} charecter`);
  } else {
    success(input);
    sessionStorage.setItem("username", input.value);
  }
}

function checknumber(input, min, max) {
  if (input.value <= min) {
    error(input, `the order must be more than${min}`);
  } else if (input.value >= max) {
    error(input, `the order must be less than${max}`);
  } else if (input.value == 0) {
    error(input, `you must order somethig`);
  } else {
    success(input);
    sessionStorage.setItem("number", number.value);
  }
}

function success(input) {
  const element = input.parentElement;
  element.querySelector("small");
  element.className = "  success";
}
function checkselect(select) {
  if (select.value === "") {
    error(select, "please select a food");
    return false;
  } else {
    success(select);
    return true;
  }
}
function calculate() {
  const price = Number(select.value);
  const count = Number(number.value);
  if (!price || !count) {
    span.innerHTML = "0";
    return;
  }
  const total = price * count;
  span.innerHTML = total + "$";
  localStorage.setItem("total", total);
}
select.addEventListener("change", calculate);
number.addEventListener("input", calculate);

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:5500/excersice4.html?";
});
function error(input, m) {
  const element = input.parentElement;
  const small = element.querySelector("small");
  small.innerHTML = m;
  element.className = "error";
}
