//  number and its methods
// let num = 12;
// console.log(num);
// let n = Number(100);
// console.log(isFinite(num) = Number.isFinite(num)); // true
// console.log(Number.isInteger(n));

// console.log(Number.isNaN(n)); // check whether NotaNumber or not

// console.log(Number.isSafeInteger(9007199254740991)); // check whether number is max safe or not
// console.log(Number.MAX_SAFE_INTEGER); // maximux safe number

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// Number.parseInt -. convert into int
// Number.parseFloat -  convert into float integer
// let newNum = 100000;
// console.log(newNum.toLocaleString('IN'))

// let numObj = new Number(120);
// let num = numObj.valueOf();

// console.log(num);

// arithmetic and bitwise
// +, - ,* ,/ , % , & , | , ! , ^ , << , >> ,

// concat, charAt, substring, slice, indexOf, lastIndexOf, toUpperCase, toLowerCase, trim,

// ------------ HC

// let name;

// console.log(name);

// ("use strict");

// var ls = "lol";

// console.log(ls);

// let name = "js";

// console.log(typeof name);

// let age = 18;

// console.log(typeof age);

// let arr = [1,2,3];

// console.log(typeof arr);

// console.log(typeof null);
// console.log(typeof undefined);

// let score = "100";

// console.log(typeof score);
// console.log(typeof score);

// let newScore = Number(score);
// console.log(typeof newScore);

// let score = "why i am score";
// console.log(typeof score); // string

// let newScore = Number(score); // we are tryinhg to convert string variable into number
// // HOW IS THIS POSSIBLE ?
// console.log(typeof newScore); // number

// console.log(newScore);

// let x = undefined;
// let newX = Number(x);
// console.log(newX);

// let isLoggedIn = "1";
// let boolValue = Boolean(isLoggedIn);
// console.log(boolValue); //  true
// // for 0 numberic value its boolean value will be false

// let age = "Hello";

// let boolValue = Boolean(age);

// console.log(boolValue);

// let someNum = 10000;

// let strNum = String(someNum);

// console.log(strNum);
// console.log(typeof strNum);

// let num = 12;

// let negNum = -num;

// console.log(negNum);

// console.log(10 + 6);
// console.log(10 - 6);
// console.log(10 * 6);
// console.log(10 / 6);
// console.log(10 % 6);
// console.log(2 ** 3);

// console.log(isNaN("1")); // true due to type conversion
// console.log(isNaN("LOL")); // false

// let str1 = "Hello ";
// let str2 = "World !!!";

// let str3 = str1 + str2;

// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + +"2");
// console.log(typeof (1 + "2"));

// console.log(1 + 2 + "3"); // 33
// console.log("1" + 2 + 3); // 123
// console.log(+true); // boolean value true convert into 1

// console.log(undefined < 0); // false

// let arr = [
//   1,
//   3.14,
//   "Hello",
//   true,
//   [4, 5, 6],
//   {
//     // this is object
//     name: "Mark",
//     age: 17,
//   },
//   function () {
//     console.log("omg");
//   },
// ];

// let user = {
//   name: "Utsav",
//   age: 17,
//   marks: [1, 2, 3],

//   printName: function () {
//     console.log(user.name);
//     console.log(this.name);
//   },
// };

// user.printName()

// let name = "Utsav";

// let yName = name; // name value copy to yName
// yName = "Harry"; // here we try to change the value of a yName

// console.log(yName); // harry
// console.log(name); // utsav

// let userOne = {
//     name : "Utsav",
//     age : 17,
// }
// let userTwo = userOne ;
// userTwo.name = "Harry"
// console.log(userOne)
// console.log(userTwo)

// let name = "Utsav";

// console.log("Hello From " + name); // old way to concation
// console.log(`Hello From ${name}`); // new way

// let chai = "green";
// console.log(chai.__proto__); // GOD
// console.log(chai.toUpperCase()); // convert into upper case
// console.log(chai.toLowerCase()); // convert into upper case
// console.log(chai.charAt(1)); // r it print character at any index

// console.log(chai.charAt(chai.length + 1)); // if index is greater than string then " " will return
// console.log(chai.charCodeAt(2)); // we get asccii value of any index

// console.log(chai.indexOf("n")); // give index of sub string

// const subChai = chai.substring(0, 2); // ge start from g and end at e
// const newSubChai = chai.slice(0, 2); // same as above
// const negSubChai = chai.slice(-4, 3); //
// G R E E N
// 0 1 2 3 4

// -4 -> start from end of the string 'r'
// 3 -> start from the begining of the sting only 'e' due it last index will exclude

// console.log(negSubChai);

// let stringArr = chai.split(""); // string convertinto array as per spliter
// we can optional give maxSplit (limit)

// console.log(stringArr);

// console.log(chai.search("g")); // this method serach charcter in string and return index
// if charcater not found than it return -1

// console.log(chai.startsWith("l")); // this method check string start with sub string or not it return boolean value
// same we have endsWith

// let str = "        utsav        ";

// console.log(str.trim()); // remove white space from start and end from the string
// // same we can rmove space from the only start and end

// let strX = "Hello World !!!";

// console.log(strX.replace("o", ")")); // replace only first occurences

// let str = "my name is utsav";

// console.log(str.includes("mark")); // this method check that string contains substring or not

// ---- - Numbers

// let num = 123; // normal variable decalraion
// console.log(num.__proto__);
// let numWithNumber = Number(123); // using  number keyword

// let numWithNewKewyword = new Number(123) // we create a number with number object with the help of new

// console.table([num,numWithNumber,numWithNewKewyword]) // both are same

// console.log(num.toString()); // now 123 convert into string so string method are can be apply

// console.log(num.toFixed(2)); // 123.00
// console.log(num.toFixed(3)); // 123.000

// let newNum = 3.14;
// console.log(newNum.toPrecision(1)); // 3
// console.log(newNum.toPrecision(2)); // 3.1
// console.log(newNum.toPrecision(3)); // 3.14
// console.log(newNum.toPrecision(4)); // 3.140

// let ranchosFatherSalary = 25000000; // from 3 idiots 😂
// bydefault it standard in us format
// we are unable to read it
// js : dont wory
// console.log(ranchosFatherSalary.toLocaleString("en-in")); // salary convert into as per indian starndard

// let max_num = Number.MAX_SAFE_INTEGER;
// let min_num = Number.MIN_SAFE_INTEGER;
// console.log(max_num, min_num);

// console.log(Math);

// console.log((Math.abs(-4))); // only egetive to posive
// console.log(Math.round(4.5)); // as per normal standard
// console.log(Math.ceil(4.5)); // value up
// console.log(Math.floor(4.5)); // value maintain 4

// console.log(Math.pow(2, 3) === 2 ** 3); // true that means both are same

// console.log(Math.min(1,2,3,4,5,6,7,8,9,0)); // give minmum number
// console.log(Math.max(1,2,3,4,5,6,7,8,9,0)); // give maximu number

// most important method

// Math.random() it give random number between 0 and 1

// console.log(Math.random() * 10); // now value b/w 0 to 10
// console.log(Math.random() * 10 + 1); // now value b/w 1 to 10

// let min = 10;

// let max = 100;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));
// now value always be 10 to 100

// let date = new Date();
// console.log(typeof date); // object
// // console.log(date);
// // in node - 2024-05-03T09:27:51.563Z // ISO string
// // in browser may print somethign diffrent
// // console.log(date.toString());
// // Fri May 03 2024 14:59:35 GMT+0530 (India Standard Time)
// // now readble

// console.log(date.toDateString());
// // console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// let myDate = new Date(2024, 1, 1); // this own date
// here month start from 0 (means 0 0 => jan , 1=> Feb)

// let myDate = new Date(2024, 1, 1, 22, 45, 90);
// note here second is 90 which is wrong but in output 30 second added to the minutes
// let indiaDate = new Date("2024-05-03");
// console.log(indiaDate);

// let timeNow = Date.now();

// console.log(Date(timeNow));

// we can retrive date, year , fullyear, month, date , time ,hour ,second etc // even in UTC

// console.log(Math.floor(Date.now() / 1000)); // we convert millisecond into second

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

// date.toLocaleString("default", {
//   weekday: "long",
//   month: "short",
// });

// console.log(date);

// ---------------------- array -----------

// let arr = [1, 2, 3.14, true];

// let hero = ["iron man", "shakiman", "super man"];

// const arrWithArr = new Array(1, 2, 3);

// console.table(hero[0]);
// console.table(hero[1]);
// console.table(hero[2]);
// console.table(hero[3]); // undefined
// let arr = [1, 2, 3];
// arr.push(8, 9, 10); // add element at last
// let t1 = performance.now();
// let removedLastEle = arr.pop(); // remove and return last element
// let t2 = performance.now();

// let t3 = performance.now();
// // wrost to method it take to much time to execute operation
// arr.unshift("x", "y"); // add element at first and change all existing element index

// let removedFirstEle = arr.shift(); // remove and return first element
// let t4 = performance.now();

// console.log(arr);
// console.log(
//   `Last Element removed ${removedLastEle} and operation take ${t2 - t1},
//   First Element removed ${removedFirstEle} and operation take ${t4 - t3}`
// );

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.includes(2)); // return booloean
// console.log(arr.indexOf(0)); // -1 because 0 not avialbel in arr

// console.log(arr.join()); /// join into one string

// // slice and splice

// console.log(arr.slice(1, 4)); // return a copy for start and end section
// // do not modify array

// let partOfArr = arr.splice(1, 4); // last index include
// console.log(arr); // hmm affect oribinal array
// console.log(partOfArr);

// const marvel_heros = ["thor", "Ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // go wrong array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // flash
// let numArr = [1, 2, 3];
// let all_hero = marvel_heros.concat(dc_heros, numArr); // ok good

// console.log(all_hero);
// // new way  +++

// let hero_all = [...marvel_heros, ...dc_heros]; // spread operator

// console.log(hero_all);

// let arr = [1, 2, 3, [4, [5, 6, [7, [8, 9]]]], 0];
// array insside array , at 4 level

// console.log(arr);
// convert into 1 array

// let singleArr = arr.flat(5); // 5 nested level can convert into aarray

// arr.flat(Infinity); at all level
// console.log(singleArr);

// console.log(Array.isArray("Hello")); // return boolean value
// check given paramter is array or not

// console.log(Array.from("Hello")); // convert into array

// console.log(Array.from({ name: "Utsav" })); // most intersing case return []

// console.log(Array.of({ name: "Utsav" }));

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;

// let newArray = Array.of(num1, num2, num3);

// console.log(newArray);

// Object.create()
// let car = {
//   name: "BMW", // in behinde name will treat as 'name'
//   model: "i3",
//   year: 2023,
// };

// console.log(car.name);
// console.log(car["year"]);

// let newObj = new Object({
//   name: "BMW",
//   model: "i3",
//   year: 2023,
// });

// console.log(newObj == car); // both object store at differnt memory
// console.log(Object.is(car, newObj));

// let gender = Symbol("male");
// let user = {
//   name: "Utsav",
//   age: 17,
//   isStudent: true,
//   // // gender: "male", // not working
//   [gender]: "male", // its a synatx and symboled key property
// };

// // console.log(typeof user.gender); // string insted of symbol
// // console.log(typeof user[gender]); // string insted of symbol

// user["email"] = "utsav@gmail.com"; // add at last

// // Object.freeze(user); // freeze the object no edit or n update

// user["age"] = 100;
// user["haveFourLeg"] = false;

// user.greet = function () {
//   console.log(`hello user`);
// };

// user.advanceGreet = function () {
//   console.log(`Hello , ${this.name}`);
// };

// console.log(user);
// user.greet();
// user.advanceGreet()

// let userOne = new Object(); // singletone object
// console.log(userOne);
// let user = {}; // non singletone object
// user.id = 101;
// user.name = "Sam";
// user.isLoggedIn = false;
// // console.log(user);

// let userTwo = {
//   id: 101,
//   fullName: {
//     userFullName: {
//       firstName: "Utsav",
//       lastName: "Dhimmar",
//     },
//   },
// };

// console.log(userTwo.fullName?.userFullName.firstName);
// merger two object
// let objOne = {
//   1: "a",
//   2: "b",
// };

// let objTwo = {
//   3: "c",
//   4: "d",
// };

// // let objThree = { objOne, objTwo }; // it create problem
// let objThree = Object.assign({}, objOne, objTwo);
// // here {} usefull when we have multiple object and it is optional
// // if we don't write `{}` than all second source object copy into first object scource
// let objFour = { ...objOne, ...objTwo }; // spread operator
// console.log(objThree);
// console.log(objFour);

// when we recive data from database majurly time data recevide in below formate

// let data = [
//   {
//     id: 101,
//     name: "Utsav",
//   },
//   {
//     id: 102,
//     name: "Sam",
//   },
//   {
//     id: 103,
//     name: "Mark",
//   },
// ];

// console.log(data[0].id);
// console.log(Object.keys(user)); // all key put in one array
// console.log(Object.values(user)); // all value put in one array
// console.log(Object.entries(user)); // all key value pair put in array // les use

// console.log(user.hasOwnProperty("gender")); // check any key avilable or not return boolean value

// // desctructiong object

// // let { name } = user;
// let { name : userNaem } = user; // same as above just we give alternative name

// console.log(name);

//       -  -------- function -----

// function addTwoNum(num1, num2) {
//   if ((typeof num1 !== "number" || typeof num2 !== "number") || (!num1 || !num2)) {
//     throw new Error(
//       `Both input ${typeof num1 !== "number" ? num1 : num2} must be number`
//     );
//   } else {
//     return num1 + num2;
//   }
// }

// console.log(addTwoNum(1, 12));

// function add(...num1) { // spread operator return array
//   return num1;
// }

// console.log(add(1, 1, 2, 3, 4));

// let arr = [1,2,3,4];

// function returnval (array){
//   return array[1];
// }

// console.log((returnval(arr)));

// function one() {
//   const name = "Utsav";

//   function two() {
//     const age = 17;

//     console.log(name);
//   } // all the statement of function two destory here
//   two();
//   // console.log(age); // throw error
// }

// one();

// let user = {
//   username: "Utsav",
//   age: 17,
//   welcomeMsg: function () {
//     console.log(`Hello ${this.username}`);
//   },
// };

// user.welcomeMsg()

// console.log(this);
// // in node this -> { }
// // in browser this -> window object
// const lol = () => ({ username: "Utsav" });
// console.log(lol())

// (function () {
//   let x = 12;
//   console.log(x);
// })();
// console.log(x); // raised error

// (
//   (name = "JS")=>{
//     console.log(name);
//   }
// )('utsav');
// var a= 123;
// let v1 = 10;
// let v2 = 5;

// function add(num1, num2) {
//   let ans = num1 + num2;
//   return ans;
// }

// console.log(add(v1, v2));
// console.log(add(100, 100));

// function one() {
//   console.log("Hello From Function one");
//   two()
// }

// function two() {
//   console.log("Hello From Function Two");
// }
// one();

// let num = [1, 2, 3, 4];

// for (let value of num) {
//   console.log(value);
// }

// let greet = "Hello World";

// for (let ch of greet) {
//   if (ch == " ") {
//     continue;
//   }
//   console.log(ch);
// }

// let map1 = new Map();

// map1.set("1", 1);
// map1.set("2", 2);
// map1.set("3", 3);
// map1.set("1", 1);

// console.log(map1);
// console.log(map1.get("1"));
// console.log(map1.get("z"));

// console.log(map1.keys());
// console.log(map1.values());
// console.log(map1.has('z'));
// let one = map1.entries();

// console.log(one.next().value);
// console.log(one.next("2"));
// console.log(map1.size);
//
// let mapvalues = map1.values()
// console.log( mapvalues);

// let map1 = new Map();

// map1.set("1", 1);
// map1.set("2", 2);
// map1.set("3", 3);
// map1.set("1", 1);

// for (let [key, value] of map1) {
//   console.log(`${key} :- ${value}`);
// }

// console.log(map1);

// let obj = {
//   name: "Utsav",
//   age: 17,
// };

// let arr = ['html','css','js','react js','next js','express js']

// for (let key in map1) {
//   console.log(key);
// }

// language.forEach(function (val) {
//   console.log(val);
// });

// let loopval = language.forEach((value, index, arr) => {
//   console.log(`${value} index is ${index} in ${arr}`);
//   if (value === "Java") {
//     return value
//   }
// });

// console.log(loopval);
// function printArr(value) {
//   console.log(value);
// }

// language.forEach(printArr);

// const users = [
//   {
//     id: 101,
//     name: "Utsav",
//   },
//   {
//     id: 102,
//     name: "Harry",
//   },
//   {
//     id: 103,
//     name: "Mark",
//   },
//   {
//     id: 104,
//     name: "Sam",
//   },
// ];

// users.forEach((user) => {
//   console.log(`at ${user.id} username is ${user.name}`);
// });

// let language = ["JavaScript", "C", "C++", "Java", "Python"];

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let evenNumber = numberArray.filter((number) => {
// //   return number % 2 === 0;
// //   // number & 1 === 1
// // });

// let evenNumber = numberArray.filter((num) => num % 2 === 0); // implicit return
// console.log(evenNumber);
// // same with forEach

// let newNum = [];

// numberArray.forEach((num) => {
//   if (num % 2 === 0) {
//     newNum.push(num);
//   }
// });

// console.log(newNum);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBook = books.filter((book) => {
//   return book.genre === "History";
// });

// console.log(userBook);

// let after2000 = books.filter((book)=>{
//     return book.publish >= 2000;
// })

// console.log(after2000);

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let valuePlus10 = numberArray.map((num) => {
//   return num + 10;
// });

// let newArray = [];

// numberArray.forEach((num) => {
//   newArray.push(num + 10);
// });

// console.log(valuePlus10);
// console.log(numberArray);
// console.log(newArray);

// let newNumArr = numberArray
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 60);

// console.log(newNumArr);

//

let num = [1, 2, 3, 4, 5];

let sum = 0;

let totalArr = num.reduce((acc, cValue) => {
  console.log(`${acc} :- ${cValue}`);
  return acc + cValue;
}, sum); // the whole reduce method start from here init value , it start form inital value than reduce method start

console.log(totalArr);
console.log(sum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const total = shoppingCart.reduce((acc, cValue) => acc + cValue.price, 0);


console.log(total);
