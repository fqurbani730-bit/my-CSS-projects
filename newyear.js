const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
// setInterval(() => {
//   const date = new Date();
//   let day = date.getDay();
//   days.innerHTML = day;
//   let hour = date.getHours();
//   hours.innerHTML = hour;
//   let min = date.getMinutes();
//   minuts.innerHTML = min;
//   let sec = date.getSeconds();
//   seconds.innerHTML = sec;
// }, 1000);
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear;
function updateCount() {
  const date = new Date();

  const diff = newYearTime - date;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? 0 + h : h;
  minuts.innerHTML = m < 10 ? 0 + m : m;
  seconds.innerHTML = s < 10 ? 0 + s : s;
}
setInterval(updateCount, 1000);
const reloading = document.getElementById("loading");
setTimeout(() => {
  reloading.remove();
  countdown.style.display = "flex";
}, 1000);
