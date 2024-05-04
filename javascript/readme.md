# JavaScript

## TOC

1. [Variable](#variables)
2. [DataTypes](#datatype)
3. [Type conversion And Opeartions](#type-conversion-and-opeartions)
4. [Strings](#strings)
5. [Number and Match Obj](#number-and-math-object)
6. [Date](#date)
7. [Array](#array)
8. [Object](#object)
9. [Function](#functions)

## Variables

- `let` , `var` , `const` three way to decalre varibale in js
- `const` we can't change value , we need to assign value when we use `const` it has block scope `{ // this is scope }`
- `let` we can reassign value and it has also block scope
- `var` is global scope alway in window object , now we don't use `var`
- if variable value is not assign then it set `undefined` as default value - it is very special

## DataType

- this are Primitive datatypes (most basics datatypes , may be some are immutable, call by value )

1. Number - store numberic value even with floating points `let age = 18`
2. bigInt - when we neeed to perform operations on larger number reraly used `let bigNum = 1234n; `
3. string - store character

```js
let name1 = "javascript";
//or
let name2 = "mark";
// or
let name3 = `hello`;
```

3. bollean - only `true` and `false`
4. null - standalone avlue and datatype (empty)
5. undefined - not assign value
6. Symbol - **always unique** added in`ES6`

---

we use `typeof` key word to check datatype of the varibale

```js
let name = "js";

console.log(typeof name); // string

let age = 18;

console.log(typeof age); // number

let arr = [1, 2, 3];

console.log(typeof arr); // object OMG
```

- famous interview question
  what is the output of this program

```js
console.log(typeof null);
console.log(typeof undefined);
```

---

<details>

 <summary>
  Answer
 </summary>

```js
object;
undefined;
```

- Exapltion :-
- `null` and `undefined` both are special value that represent the absence of a value / Data
- if you know JavaScript Execution context than read it otherwise (click here) to rad aboue js execution context
  **TODO link for EXC**
- [ ] what
- null :-
  - `null` -> `object`
  - some people think this is is mistake in language design
  - null represent no value or no object , it need to be assign expliciyly
  - it may be a bug in JavaScript implementation that why it return `type` for `null` is `object`
  - this bug never fix because it would broke existing code on the web.
- undefined:-
  - `undefined` is a primitive datatype and automatically assign to the all variable (even function parameter) due to phase 1 `memory creation` of javascript exaection context
  - that why it return `type` for `undefined` is `undefined`

</details>

---

**Notes**

- JavaScript change over the time , means js in `2015` and js in `2024` is very differnt
- once we write `"use strict"` all code in js file will treat as newer version of js
- JavaScript can run at both at client (bydefault in browser) and server (with help of node js)
- code must be readable nad easy to understand

```js
console.log(
  //
  3 +
    //
    //
    3
); // to bad
```

---

- Non-Primitive datatypes (call by references)

1. Array

```js
let arr = [
  1,
  3.14,
  "Hello",
  true,
  [4, 5, 6],
  {
    // this is object
    name: "Mark",
    age: 17,
  },
  function () {
    console.log("omg");
  },
];
```

2. Object - most IMP key value pair

```js
let user = {
  name: "Utsav",
  age: 17,
  marks: [1, 2, 3],

  printName: function () {
    console.log(user.name); // utsav
    console.log(this.name); // Utsav
  },
};
user.printName();
```

3. Function

```js
function abc() {
  console.log("Hello World");
}
```

---

- two types of memory
- Stack (Primitive) , Heap (Non - primitive )
- stack memory - we get a copy of a variable
- heap memory - we get reference of variable (modification apply in even in original)
- some graphical represntion
  ![image of stack and heap memory](https://media.discordapp.net/attachments/1205479570900521003/1235546985927540766/stack-heap.png?ex=6634c44c&is=663372cc&hm=d5b5f78416ccc921c8bcd7c4745e3a35245ddea645173dff0ede242f69d139cd&=&format=webp&quality=lossless&width=1431&height=580)

## Type conversion And Opeartions

- In js type conversion is very nightmare topic but not a impossible
- Js is dynamic type language not a static langauge means we don't need to define type of the varibale
-

```js
let score = 100; // here we not specify the type of the variabel

console.log(typeof score); // number
console.log(typeof score); // number
```

---

```js
let score = "100";

console.log(typeof score); // string
```

- we can convert the string type varibale into number ⚠️

```js
let score = "100";
let newScore = Number(score); // now the string score convert into number
console.log(typeof newScore); // number
```

- till now nothing to confusing

```js
let score = "why i am score";
console.log(typeof score); // string

let newScore = Number(score); // we are tryinhg to convert string variable into number
// HOW IS THIS POSSIBLE ?
console.log(typeof newScore); // number
console.log(newScore); // NaN
```

- `"why i am score"` string ca't convert into number that why it return `NaN`
- it is not a bug , but bassicaly javascript try to convert in number

```js
let num = null;
let newNum = Number(num);

console.log(newNum);
// null -> 0

let x = undefined;
let newX = Number(x);
console.log(newX);
// undefined -> NaN

let x = true;
let newX = Number(x);
console.log(newX); // 1

let x = false;
let newX = Number(x);
console.log(newX); // 0

let isLoggedIn = 1; // een "1" convert into true
let boolValue = Boolean(isLoggedIn);
console.log(boolValue); //  true
// for 0 numberic value its boolean value will be false

// level ugarde

let age = "Hello";

let boolValue = Boolean(age);

console.log(boolValue); // true

// if "" convert into false

let someNum = 10000;
let strNum = String(someNum);
console.log(strNum);
console.log(typeof strNum);

// and many more conversion possibal
```

- about come conversion

| Value     | Conversion Type | Output | Output type |
| --------- | :-------------: | -----: | ----------: |
| "1"       |     Number      |      1 |      Number |
| "Bananas" |     Number      |    NaN |      Number |
| null      |     Number      |      0 |      Number |
| undefined |     Number      |    NaN |      Number |
| true      |     Number      |      1 |      Number |
| 1         |     Boolean     |   true |     Boolean |
| ""        |     Boolean     |  false |     Boolean |
| "hi"      |     Boolean     |   true |     Boolean |

- and more

* what is `NaN` ?
  - `NaN` stand for Not a Number
  - it check given parameter is **not a number** or not
  - its type is `number`
  - [go on numbers to read about NaN](#number-and-math-object)
  ```js
  console.log(isNaN("1")); // true due to type conversion
  console.log(isNaN("LOL")); // false
  ```

```js
let str1 = "Hello ";
let str2 = "World !!!";
let str3 = str1 + str2;
console.log(str3);
// string concations
```

### MEMES WITH JS Addition 😵😂

```js
console.log(1 + "2"); // 12 in string
console.log("1" + 2); // 12 in string
console.log(1 + +"2"); // but 3
console.log(1 + 2 + "3"); // 33
console.log("1" + 2 + 3); // 123
```

**Note** - almost all opeators in programming langauge are same , so read your self [click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

- in js we can compare two differnt datatype values which is comeplety wrong ❌👎 that why typescript came
- here why it is wrong

```js
console.log(null < 0); // false 0 < 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log(undefined < 0); // false even with < , >
```

- javscript have specil operator call that compare value and even comapre datatype of that value

```js
console.log(1 === 1); // true
console.log(1 === "1"); // false
```

## Strings

- sequnces of characarters
- string can be represent as character of an array
- `"hi".__proto__` in `console`

```js
let name = "Utsav";

console.log("Hello From " + name); // old way to concation
console.log(`Hello From ${name}`); // new way
console.log(name[0]); // only U will print
console.log(name.length); // 5 print the length of a string

let chai = "green";
console.log(chai.__proto__); // GOD
console.log(chai.toUpperCase()); // convert into upper case
console.log(chai.toLowerCase()); // convert into upper case
console.log(chai.charAt(1)); // r it print character at any index

console.log(chai.charAt(chai.length + 1)); // if index is greater than string then " " will return
console.log(chai.charCodeAt(2)); // we get asccii value of any index

console.log(chai.indexOf("n")); // give index of sub string

const subChai = chai.substring(0, 2); // ge start from g and end at e
const newSubChai = chai.slice(0, 2); // same as above
const negSubChai = chai.slice(-4, 3); //
// G R E E N
// 0 1 2 3 4

// -4 -> start from end of the string 'r'
// 3 -> start from the begining of the sting only 'e' due it last index will exclude

console.log(negSubChai);

let stringArr = chai.split(""); // string convertinto array as per spliter
// we can optional give maxSplit (limit)

console.log(stringArr);

console.log(chai.search("g")); // this method serach charcter in string and return index
// if charcater not found than it return -1

console.log(chai.startsWith("l")); // this method check string start with sub string or not it return boolean value
// same we have endsWith

let str = "        utsav        ";

console.log(str.trim()); // remove white space from start and end from the string
// same we can rmove space from the only start and end

let strX = "Hello World !!!";

console.log(strX.replace("o", ")")); // replace only first occurences
// for all replacement replaceAll() method

let str = "my name is utsav";

console.log(str.includes("mark")); // this method check that string contains substring or not
```

**Note** : this is just little bit overview of a string methods , and thier all diffrent methods aviliable in `JavaScript` for Differnt purpose [click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) read about string methods

## Number and Math Object

- In js `123` and `3.14` treat as number not a sperate datatype like `c`, `c++` or any other language
- Number in js are very straightforword. it has very few methods

```js
let num = 123; // normal variable decalraion

let numWithNumber = Number(123); // using  number keyword

let numWithNewKewyword = new Number(123); // we create a number with number object with the help of new

console.table([num, numWithNumber, numWithNewKewyword]); // all are same

console.log(num.toString()); // now 123 convert into string so string method are can be apply

console.log(num.toFixed(2)); // 123.00
console.log(num.toFixed(3)); // 123.000

let newNum = 3.14;
console.log(newNum.toPrecision(1)); // 3
console.log(newNum.toPrecision(2)); // 3.1
console.log(newNum.toPrecision(3)); // 3.14
console.log(newNum.toPrecision(4)); // 3.140

let ranchosFatherSalary = 25000000; // from 3 idiots 😂
// we are unable to read it
// js : dont wory
console.log(ranchosFatherSalary.toLocaleString("en-in")); // slary convert into as per indian starndard

let max_num = Number.MAX_SAFE_INTEGER;
let min_num = Number.MIN_SAFE_INTEGER;
console.log(max_num, min_num);
// js can perform any operations on number between this numbers than it may create issue
// that why BigInt come
```

---

- Math Object

```js
console.log(Math.abs(-4)); // only egetive to posive
console.log(Math.round(4.5)); // as per normal standard
console.log(Math.ceil(4.5)); // value up
console.log(Math.floor(4.5)); // value maintain 4

console.log(Math.pow(2, 3) === 2 ** 3); // true that means both are same

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); // give minmum number
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); // give maximum number

// most important method

// Math.random() it give random number between 0 and 1

console.log(Math.random() * 10); // now value b/w 0 to 10
console.log(Math.random() * 10 + 1); // now value b/w 1 to 10

let min = 10;

let max = 100;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// now value always be 10 to 100
```

## Date

- Dates 🫣
- JavaScript `Date` objects represent a single moment in time in a platform-independent format
- js date start from mid night from 1 jan 1970 UTC
- date object calucalte time in milli second (soon change)
- month index start with 0

```js
let date = new Date();
console.log(typeof date); // object
console.log(date);
// in node - 2024-05-03T09:27:51.563Z // ISO string
// in browser may print somethign diffrent
console.log(date.toString());
// Fri May 03 2024 14:59:35 GMT+0530 (India Standard Time)
// now readble

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

let myDate = new Date(2024, 1, 1); // this own date
// here month start from 0 (means 0 0 => jan , 1=> Feb)

let myDate = new Date(2024, 1, 1, 22, 45, 90);
// note here second is 90 which is wrong but in output 30 second added to the minutes
let indiaDate = new Date("2024-05-03");
console.log(indiaDate);

let timeNow = Date.now();
console.log(Date(timeNow));

// full cutomization

date.toLocaleString("default", {
  weekday: "long",
  month: "short",
});

console.log(date);
```

- we can retrive date, year , fullyear, month, date , time ,hour ,second etc , even in UTC

```js
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
```

## Array

- in js array can store `any datatype`
- js array are resizeble
- zero based indexing

```js
let arr = [1, 2, 3.14, true];

let hero = ["iron man", "shakiman", "super man"];

const arrWithArr = new Array(1, 2, 3);

console.table(hero[0]);
console.table(hero[1]);
console.table(hero[2]);
console.table(hero[3]); // undefined

arr.push(8, 9, 10); // add element at last
let removedEle = arr.pop(); // remove and return last element

// wrost to method it take to much time to execute operation
arr.unshift("x", "y"); // add element at first and change all existing element index

let removedFirstEle = arr.shift(); // remove and return first element

console.log(arr);
console.log(
  `Last Element removed ${removedLastEle},First Element removed ${removedFirstEle}`
);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.includes(2)); // return booloean
console.log(arr.indexOf(0)); // -1 because 0 not avialbel in arr

console.log(arr.join()); /// join into one string

// slice and splice

console.log(arr.slice(1, 4)); // return a copy for start and end section
// do not modify array

let partOfArr = arr.splice(1, 4); // last index include
console.log(arr); // hmm affect original array [main different b/w slice and splice]
console.log(partOfArr);

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // go wrong array inside array

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // flash

let numArr = [1, 2, 3];
let all_hero = marvel_heros.concat(dc_heros, numArr); // ok good

console.log(all_hero);
// new way  +++

let hero_all = [...marvel_heros, ...dc_heros]; // spread operator

console.log(hero_all);

let arr = [1, 2, 3, [4, [5, 6, [7, [8, 9]]]], 0];
// array insside array , at 4 level

// console.log(arr);
// convert into 1 array

// let singleArr = arr.flat(5); // 5 nested level can convert into aarray

// arr.flat(Infinity); at all level
// console.log(singleArr);

console.log(Array.isArray("Hello")); // return boolean value
// check given paramter is array or not

console.log(Array.from("Hello")); // convert into array

// console.log(Array.from({ name: "Utsav" })); // most intersing case return []

// console.log(Array.of({ name: "Utsav" }));

let num1 = 1;
let num2 = 2;
let num3 = 3;

let newArray = Array.of(num1, num2, num3);

console.log(newArray);
```

## Object

- any nested level of object possible
- Two way to declare object in `JS`
- 1. `Objcet Literal` - most simple way to decalre object
-

```js
// small example

let car = {
  name: "BMW",
  model: "i3",
  year: 2023,
};
```

- 2. `Object constructor` - with the help of function `learn later`
  - more complex example

```js
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

let bmwCar = new Car("BMW", "X6", 2020);
```

---

- `singleton` - when we create object with `objcet constructor` ,only one type of object

---

```js
let car = {
  name: "BMW", // in behinde name will treat as 'name'
  model: "i3",
  year: 2023,
};

// way to access object
console.log(car.name);
console.log(car["year"]);

let newObj = new Object({
  name: "BMW",
  model: "i3",
  year: 2023,
});

console.log(newObj == car); // both object store at differnt memory
console.log(Object.is(car, newObj));

user["email"] = "utsav@gmail.com"; // add at last

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
user.advanceGreet();

// Object.freeze(user); // freeze the object no edit or no update
```

- possible interview question

1. how to use Symbol as objcet key ?

```js
let gender = Symbol("male");
let user = {
  name: "Utsav",
  age: 17,
  isStudent: true,
  // gender: "male", // not working
  [gender]: "male", // its a synatx and symboled key property
};

// console.log(typeof user.gender); // string insted of symbol
console.log(typeof user[gender]); // string insted of symbol
```

---

```js
let userOne = new Object(); // singletone object
let user = {}; // non object

console.log(user);
console.log(userOne);

user.id = 101;
user.name = "Sam";
user.isLoggedIn = false;
console.log(user);

console.log(Object.keys(user)); // all key put in one array
console.log(Object.values(user)); // all value put in one array

let userTwo = {
  id: 101,
  fullName: {
    userFullName: {
      firstName: "Utsav",
      lastName: "Dhimmar",
    },
  },
};

console.log(userTwo.fullName?.userFullName.firstName);
// merger two object
let objOne = {
  1: "a",
  2: "b",
};

let objTwo = {
  3: "c",
  4: "d",
};

let objThree = { objOne, objTwo }; // it create problem
let objThree = Object.assign({}, objOne, objTwo);
// here {} usefull when we have multiple object and it is optional
// if we don't write `{}` than all second source object copy into first object scource
let objFour = { ...objOne, ...objTwo }; // spread operator
console.log(objThree);
console.log(objFour);
```

- when we recive data from database majorly time data recevide in below format

```js
let data = [
  {
    id: 101,
    name: "Utsav",
  },
  {
    id: 102,
    name: "Sam",
  },
  {
    id: 103,
    name: "Mark",
  },
];

console.log(data[0].id);

// desctructiong object

let { name } = user;
let { name: userNaem } = user; // same as above just we give alternative name

console.log(name);
```

## Functions

- function are heart ❤️ of js

```js
function printSomething() {
  console.log("Hello World");
}

printSometh();

// simple program to add two numebr
function add(num1, num2) {
  return num1 + num2;
}
add();

// another simple program to print two number

function addTwoNum(num1 = 1, num2 = 1) {
  // default parameters
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error(
      `Both input ${typeof num1 !== "number" ? num1 : num2} must be number`
    );
  } else {
    return num1 + num2; // return to the caller
  }
}

console.log(addTwoNum(1, 12));
```

- rest opeartors

```js
function add(...num1) {
  // spread operator return array
  return num1;
}

console.log(add(1, 1, 2, 3, 4));
```

### scopes

- the whole story of scope come from `let` , `var` and `const`.
- almost in every language we have scopes (`html` and `css` not harm 😂)
- `var` is global scope

```js
if (true) {
  // this is scope of if tue block
}

function one() {
  const name = "Utsav";

  function two() {
    const age = 17;

    console.log(name);
  } // all the statement of function two destory here
  two();
  // console.log(age); // throw error
}

one();
```

```js
doSomething(); // work properly
function doSomething() {
  return `hello`;
}
hola();
let hola = function () {
  return `hello from hola function`;
};
```

- click here to read above thing

- arrow function and teaser of `this` keyword

```js
const arrow_fun = () => {
  console.log("Hello world");
};
const add = (num1, num2) => num + num2; // no need to return keyword
const lol = () => ({ username: "Utsav" });
```

- `this` keyword

```js
let user = {
  username: "Utsav",
  age: 17,
  welcomeMsg: function () {
    console.log(`Hello ${this.username}`);
  },
};

user.welcomeMsg();

console.log(this);
```

- in node this -> `{ }`
- in browser this -> `window object`

### IIFE (Immediately Invoked Function Expression)

- example

```js
(function () {
  // function body
})(); // function call
```

- **IIFE** usefull when we prevent varibales , and any other statement from global scope from polluting global scope
- semi coolon play imporant role for ending scope of **IIFE**
```js
(function () {
  let x = 12;
  console.log(x);
})();  // here semi coolon paly imporant role

console.log(x); // raised error

(
  function hello(){
    // named IIFE
  }
)();

(
  (name = "JS")=>{
    console.log(name);
  }
)('utsav');
```
