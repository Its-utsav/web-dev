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

let arr = [1, 2, 3, [4, [5, 6, [7, [8, 9]]]], 0];
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

let gender = Symbol("male");
let user = {
  name: "Utsav",
  age: 17,
  isStudent: true,
  // // gender: "male", // not working
  [gender]: "male", // its a synatx and symboled key property
};

// console.log(typeof user.gender); // string insted of symbol
// console.log(typeof user[gender]); // string insted of symbol

user["email"] = "utsav@gmail.com"; // add at last

// Object.freeze(user); // freeze the object no edit or n update

user["age"] = 100;
user["haveFourLeg"] = false;

user.greet = function () {
  console.log(`hello user`);
};

user.advanceGreet = function () {
  console.log(`Hello , ${this.name}`);
};

console.log(user);
user.greet();
user.advanceGreet()
