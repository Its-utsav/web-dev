# JavaScript

## TOC

1. [Variable](#variables)
2. [DataTypes](#datatype)

## Variables

- `let` , `var` , `const` three way to decalre varibale in js
- `const` we can't change value , we need to assign value when we use `const` it has block scope `{ // this is scope }`
- `let` we can reassign value and it has also block scope
- `var` is global scope alway in window object , now we don't use `var`
- if variable value is not assign then it set `undefined` as default value - it is very special

## DataType

- this are Primitive datatypes (most basics datatypes , may be some are immutable )

1. Number - store numberic value even with floating points `let age = 18`
2. bigInt - when we neeed to perform operations on larger number reraly used
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
6. Symbol - always unique added in`ES6`

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

```js
object
undefined
```
why click here to check
//  TODO add link here for thia answer
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
