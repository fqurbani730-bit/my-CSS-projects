// let scores = [8, 12, 19, 5, 14];
// // let result = scores.map((e) => {
// //   return e >= 10;
// // });
// // console.log(result);
// // for (let i = 0; i < scores.length; i++) {
// //   if (scores[i] >= 10) {
// //     console.log(scores[i]);
// //   }
// // }

// let showresult = Math.max(...scores);
// console.log(showresult);
// let filter = scores.filter((e) => e > 10);
// console.log(filter);

// let ages = +prompt("enter your age");
// console.log(typeof ages);

// if (ages <= 18) {
//   console.log("young");
// } else {
//   console.log("adult");
// }
// let submit = document.getElementById("submit");
// let age = document.getElementById("age");
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (age.value.trim() >= 18) {
//     console.log("adult");
//   } else {
//     console.log("young");
//   }
// });

// let searchforages = +prompt("enter your age");
// console.log(typeof searchforages);
// let i = 0;
// while (i < searchforages) {
//   if (searchforages[i] <= 18) {
//     console.log("adult");
//   } else {
//     console.log("child");
//   }
//   i++;
// }

// let user = {
//   name: "ali",
//   isAdmin: false,
//   age: 24,
// };
// console.log(
//   `my name is${user.name}. i am ${user.age} and my position is${user.isAdmin}`,
// );
// console.log(user.age + "  " + user.isAdmin + "   " + user.name);

// let users = [
//   { name: "sara", active: true },
//   { name: "reza", active: false },
//   { name: "mina", active: true },
// ];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].active === true) {
//     console.log(users[i].name);
//   }
// }
// let map = users.map((e) => {
//   return (e.active = true);
// });
// console.log(map);

// let filter = users.filter((e) => {
//   if (e.active === true) {
//     console.log(e.name);
//   }
// });

// let reduce = users.reduce((total, e) => {
//   if (e.active === false) {
//     console.log(e.name);
//   }
//   return total;
// });

// let [name1, name2, name3] = users;
// console.log(name1);
// console.log(name2);
// console.log(name3);
// let submit = document.getElementById("submit");
// let form = document.querySelector("form");
// let span = document.getElementById("span");

// let count = 0;

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   count++;
//   span.innerHTML = count;
// });
// let count = 5;
// let showtime = document.getElementById("span");
// const setinterval = setInterval(() => {
//   count--;
//   showtime.innerHTML = count;
//   if (count === 0) {
//     clearInterval(setinterval);
//   }
// }, 1000);

// let numbers = [1, 200, 3, 400, 5, 20, 30];

// // let filter = numbers.filter((e) => e % 2 === 0);
// // console.log(filter);

// // function shownumbers(numbers) {
// //   // for (const p of numbers) {
// //   //   if (p >= 100) {
// //   //     console.log(p);
// //   //   }
// //   // }
// //   for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] % 2 === 0) {
// //       console.log(numbers[i]);
// //     }
// //   }
// // }
// // shownumbers(numbers);
// // let map = numbers.map((w) => w % 2 === 0);
// // console.log(map);
// let foreach = numbers.forEach((w) => {
//   w % 2 === 0;
// let numbers = [12, -3, 7, -8, 0, 25];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i].length >= 0) {
//     count = 0;
//   }
//   console.log(count);
// }

// let filter = numbers.filter((e) => e >= 0).map((e) => e * 4);

// console.log(filter);
// numbers.join;
// let ages = [12, 19, 7, 34, 16, 22];
// let filter = ages
//   .filter((e) => e >= 0)
//   .reduce((total, b) => {
//     return (total = b * 5);
//   });
// console.log(filter);

// let names = ["ali", "SARA", "ReZa", "miNA"];
// let result = names.toString("").toLowerCase();
// let sorry = result.sort();
// console.log(sorry);

let cities = ["Herat", "Kabul", "Tehran", "Mashhas"];
// let resulte = cities.includes("Herat");
// console.log(resulte);
// let find = cities.find((e) => {
//   return e === "Herat";
// });
// console.log(find);
// let map = cities.map((e) => e === "Herat");
// console.log(map);
// let reduce = cities.reduce((e, total) => {
//   e === "Kabul";
//   return (total = e);
// });
// console.log(reduce);
// let foreach = cities.forEach((e) => e === "Tehran");
// console.log(foreach);

// let filter = cities.filter((e) => e === "Tehran");
// console.log(filter);
// let some = cities.some((e) => e === "Herat");
// console.log(some);
// let every = cities.every((e) => e === "Herat");
// console.log(every);
// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === "Herat") console.log(cities[i]);
// }
// for (let x of cities) {
//   if (x === "Kabul") console.log(x);
// }
// let age = prompt("enter your age");
// let change = Array(age);

// change.forEach((e) => {
//   if (e <= 18) {
//     console.log("young");
//   } else {
//     console.log("adult");
//   }
//   return;
// });
// let scores = [30, 45, 67, 90, 89, 56];
// let count = 0;
// scores.forEach((e) => {
//   if (e >= 50) {
//     count = count + e;
//   }
// });
// console.log(count);

// let statuss = ["employed", "unemployed,", "employed", "unemployed", "employed"];
// let count = 0;
// let count2 = 0;
// statuss.forEach((e) => {
//   if (e === "employed") {
//     count2++;
//   } else {
//     count++;
//   }
// });
// console.log(count2);
// console.log(count);
// let stateusss = [
//   { name: "ali", staus: "employed" },
//   { name: "sara", staus: "unemployed" },
//   { name: "aliahmad", staus: "employed" },
// ];
// stateusss.forEach((e) => {
//   if (e.staus === "employed") {
//     count++;
//   } else {
//     count2++;
//   }
// });
// console.log(count, count2);
//the fifth sinario
//
//the sixth sinario
// let users = [
//   {
//     name: "Ali",
//     active: true,
//   },
//   {
//     name: "Sara",
//     active: false,
//   },
//   {
//     name: "reza",
//     active: true,
//   },
// ];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].active === true) {
//     console.log(users[i].name);
//   }
// }
// for (let x of users) {
//   if (x.active === true) console.log(x.name);
// }
// let map = users.map((e) => {
//   if (e.active === true) {
//     console.log(e.name);
//   }
// });
// let foreach = users.forEach((e) => {
//   if (e.active === true) {
//     console.log(e.name);
//   }
// });
// let filter = users.filter((e) => {
//   e.active === true;
//   console.log(e.name);
// });
//the 7 sinario
// let scores = [8, 14, 19, 6, 11];
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 10) {
//     console.log(scores[i]);
//   }
// }
// for (let x of scores) {
//   if (x >= 10) {
//     console.log(x);
//   }
// }
// let map = scores.map((e) => e >= 10);
// console.log(map);
// let foreach = scores.forEach((e) => {
//   if (e >= 14) {
//     console.log("pass");
//   } else {
//     console.log("faild");
//   }
//   return;
// });
// console.log(foreach);

// let filter = scores.filter((e) => e >= 14).map((b) => b * 2);
// console.log(filter);

// let products = [
//   { id: 1, name: "mouse", price: 20 },
//   { id: 2, name: "keyboard", price: 50 },
//   { id: 3, name: "monitor", price: 200 },
// ];
// console.log(
//   `this product id is ${products[1].id} and its name is ${products[0].name} an the price is ${products[0].price}`,
// );
// let values = [5, 8, -2, 14, 3];
// let filter = values.filter((e) => e < 5);
// console.log(filter);
// let examscore = [15, 18, 12, 9];
// let foreach = examscore.forEach((v) => {
//   if (v >= 12) {
//     console.log("pass");
//   } else {
//     console.log("faild");
//   }
//   return;
// });
// let prices = [120, 80, 300, 50];
// let count = 0;
// let reduce = prices.reduce((total, e) => {
//   return total + e;
// });
// console.log(reduce);
// let foreach = prices.forEach((e) => {
//   count += e;
// });
// console.log(foreach);
// for (let i = 0; i < prices.length; i++) {
//   count += prices[i];
// }
// console.log(count);
// for (let x of prices) {
//   count += x;
// }
// console.log(count);

// let randomnumbers = [42, 7, 19, 3, 25];
// let sort = randomnumbers.sort((a, b) => b - a);
// console.log(sort);

// let words = "javascript is awesome";
// // let string = Array(words);
// // console.log(typeof string);
// let sentencs = words.split(" ");
// console.log(sentencs);
// //split change a string to small parts

// let username = "fatema";
// let result = username[0].toUpperCase() + username.slice(1).toLowerCase();
// let array = Array(result);
// array.push("Qurbani");
// let changeto = array.toString();
// let join = changeto.replaceAll(",", "");
// console.log(join);
// let finalscore = [4, 10, 17, 8, 20];
// let filter = finalscore
//   .filter((e) => e > 10)
//   .reduce((total, b) => {
//     return (total += b);
//   });
// console.log(filter);
// let members = [
//   { name: "ali", role: "admin", active: true },
//   { name: "sara", role: "user", active: false },
//   { name: "mina", role: "user", active: true },
// ];
// for (let i = 0; i < members.length; i++) {
//   if (members[i].role === "admin") {
//     console.log(members[i].name);
//   }
// }
// for (let x of members) {
//   if (x.active === true) {
//     console.log(x.role);
//   }
// }
// let foreachh = members.forEach((e) => {
//   if (e.name === "sara") {
//     console.log(e.role);
//   }
// });
// let map = members.map((f) => {
//   if (f.role === "admin") {
//     console.log(f.name);
//   }
// });
// let reduce = members.reduce((total, p) => {
//   return (total = p.name === "mina");
// });
// console.log(reduce);
// let itmes = [
//   { title: "book", stock: 12 },
//   { title: "pen", stock: 50 },
//   { title: "notbook", stock: 30 },
// ];
// let filter = itmes.filter((e) => {
//   if (e.title === "pen") {
//     console.log(e.stock);
//   }
// });
// let map = itmes.map((b) => {
//   if (b.stock == 12) {
//     console.log(b.title);
//   }
// });
// let foree = itmes.forEach((f) => {
//   if (f.title === "notbook") {
//     console.log(f.stock);
//   }
// });
// for (let x of itmes) {
//   if (x.title === "book") {
//     console.log(x.stock);
//   }
// }
// let userinfo = { name: "ali", age: 25 };
// let save = localStorage.setItem("name", JSON.stringify(userinfo.name));
// let gave = JSON.parse(localStorage.getItem("name"));
// console.log(gave);
// let mixedscore = [null, 18, undefined, 7, 15, "20", 3];
// let filter = mixedscore.filter(
//   (e) => e !== null && e !== undefined && e !== "20",
// );
// let pluse = filter.reduce((total, r) => {
//   return (total += r);
// });
// console.log(pluse);
