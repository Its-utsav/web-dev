# JavaScript

## TOC

1. [Variable](#variables)
2. [DataTypes](#datatype)
3. [Type conversion And Opearions](#type-conversion-and-opearions)

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
![image of stack and heap memory](img\image.png)



## Type conversion And Opearions

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


