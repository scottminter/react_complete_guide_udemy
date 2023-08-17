// 1. import { apiKey } from "./util.js";
// 2. import apiKey from './util.js';
// import * as util from './util.js';

// console.log('util default: ' + util.default);
// console.log('util api key: ' + util.apiKey);
// console.log('util util key: ' + util.utilKey);

// let userMessage = "hello world!!";
// console.log(userMessage);

// let numX = 10;
// let strX = "10";

// if (numX === strX) {
//   console.log("they have the same value");
// } else {
//   console.log("they have different values");
// }

// ==> Arrow functions
// import arrowFunction from "./util.js";

// const msg = arrowFunction("Scott", "is learning React and C#");
// console.log(msg);

// ==> Objects
// const user = {
//   name: "Scott",
//   age: 42,
//   greet() {
//     console.log(this.name + " is " + this.age + " years old.");
//   },
// };

// console.log(user);
// user.greet();
// ``
// // class names should start with capital letter
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(this.name + " is " + this.age + " years old.");
//   }
// }

// const user1 = new User("Rudy", 5);
// user1.greet();

// const user2 = new User("Jessie", 39);
// user2.greet();

// ==> Arrays

// const hobbies = ["sports", "guitar", "cutting wood"];
// console.log(hobbies);

// hobbies.push("code learning");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "code learning");
// console.log("index: " + index);

// const editedHobbies = hobbies.map((item) => {
//   if (item === "sports") {
//     return item + "!!!";
//   }

//   return item;
// });
// console.log(editedHobbies);

// const objectListHobbies = hobbies.map((item) => {
//   return {
//     text: item,
//   };
// });
// console.log(objectListHobbies);

// // ==> Destructuring
// const userNameData = ["Scott", "Minter"];
// const [firstName, lastName] = userNameData;
// console.log("first: " + firstName);
// console.log("last: " + lastName);

// const user = {
//   name: "Scott",
//   age: 42,
// };

// const { name, age } = user;
// console.log("obj name: " + name);
// console.log("obj age: " + age);

// ==> Spread Operator

// const hobbies = ["guitar", "nba"];
// const newHobbies = ["wood working"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "Scott",
//   age: 42,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };
// console.log(extendedUser);

// ==> Control structures

// const pw = prompt("Your Password");
// console.log(pw);

const hobbies = ["guitar", "nba", "code learning"];
for (const hobby of hobbies) {
  console.log(hobby);
}

function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("hi there");
});
