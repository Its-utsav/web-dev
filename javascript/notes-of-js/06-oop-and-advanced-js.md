# OOP and adnaced Js

## TOC

1. [oop](#oop)

## oop

- js support `oop` but js approch to `oops` is differnt from traditional class based language like `c++` , `java` .

- Object Oriented Programming (oop) is a just programming paradigm (code writing technique) in js oop based on `Object` that contain data in the form of properties and code in form of method . 😵😕

- simple word

### object

- collection of properties and method

1. why oop used ?

   - Make the development and maintenance of projects more effortless.
   - Provide the feature of data hiding that is good for security concerns.
   - Solve real-world problems.
   - Ensure code reusability.
   - Package together data states and functionality to modify those data states, while keeping the details hidden away.
   - simple - prevent from `Spaghetti code` [wikipedia](https://en.wikipedia.org/wiki/Spaghetti_code)
   - Spaghetti code is a pejorative phrase for `unstructured` and `difficult-to-maintain source code`.

2. Parts of `oop` ?

- here part of oop focus on `JavaScript`
  - [Object Literl](#object-literal)
  - [Constructor Function](#constructor-function)
  - [Proto OR Prototype](#prototype)
  - Classes
  - Instance (keywords like `new` , `this`)

3. Pillars of `oop` :-

- same in all `opp` supported language
  - Abstraction
  - Encapsulation
  - [Inheritance](#inheritance)
  - Polymorphism

### Object literal

- before goning on class or other oop concept once agian revise object

- in js object consider as based unit or object literal

```js
const user = {
  name: "Utsav",
  age: 17,
  gender: "male",
  getUserInfo: function () {
    console.log(this); // print current contex
    console.log(
      `Hi ${this.name} and ${this.gender == "male" ? "his" : "her"} age is ${
        this.age
      }` // here this is very imp for current contex
    );
  },
};

console.log(user); // whole object
user.getUserInfo(); // function called
```

### Constructor Function

- from the above code we need to create a `user2` for creating `user2` whole code we need to write code again which is unneccesory and code repeataion

- so here `constructor function` play crucial role

- it allow us to create multiple intsnace from single object

```js
let prmOne = new Promise(); // example of constructor function
let date = new Date();
```

- example

```js
function User(userName, age, gender) {
  // variable   = value
  this.userName = userName;
  this.age = age;
  this.gender = gender;

  this.greet = function () {
    console.log(
      `Hi ${this.name} and ${this.gender == "male" ? "his" : "her"} age is ${
        this.age
      }`
    );
  };

  // return this; // optional
}

let userOne = new User("utsav", 17, "male");

let userTwo = new User("Sam", 23, "male");

console.log(userOne);
console.log(userTwo);

console.log(userOne instanceof User); // check instance or not
```

- if we don't write `new` kewyword before creating object instance it previous value always overwrite by new instance

- when we use `new` keyword

1. empty object create known as instance
2. call constructor function called due to `new` keyword pack all argument and give to us .
3. due to `this` all argument inject in variable
4. new object return complete process

### Prototype

- it is all about JavaScript beheviour , unique and intersting
- it is impoerant understand why javascript doing that
- also imporant in interview (beginer level and most advanced interview question is SDE level )

- JavaScript beveviour is prototypel .

- if something is not find by js , it still keep searching for that thing it try to access parent if not found than go in grandparent again if not found than it go grand grand parent . and this process till continue till it not got `null`.

- due to Prototype we have `this` , `new` and also inheritance or prototypel inheritance

- in js everything is object even function and array .
- in js function is function and function can be object.
- we can use function as function and function can behevie like object

```js
function multiplyBy5(num) {
  return Number(num * 5);
}

multiplyBy5.power = 10;

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 10
console.log(multiplyBy5.prototype); // { } (empty object see below)
console.log(multiplyBy5); // whole function
```

- in js, function have `prototype` property , and it is a object .
- This `prototype` property is used when the function is used as a constructor to create instances. It holds properties and methods that should be available to instances of that function.
- Since `multiplyBy5` is not being used as a constructor, its `prototype` property is just an empty object `{}` by default.

- simple :- when we use function as constructor it will help

```js
function createUser(username, score) {
  this.username = username;
  this.price = score;
}

createUser.prototype.increment = function () {
  // score++; // not work because current context is missing
  this.price++;
};

createUser.prototype.printPrice = function () {
  console.log(`price is ${this.price}`);
};

console.log(createUser);
console.log(createUser.prototype);
let one = new createUser("Utsav", 100);

one.printPrice();

one.increment();
one.printPrice();

one.increment();
one.printPrice();
```

- some explation about `new` keyword

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

- real life example of prototype

```js
let myName = "Utsav     ";

console.log(myName.length); // give 10 but their is only 5 character and 5 spaec
// for removing space and for real length for string i need to use trim() method like this

console.log(myName.trim().length); // remove white space and give length
// what if i need to make function / method for this

// answer
String.prototype.trueLengthOfString = function () {
  return console.log(Number(this.trim().length));
};
```

- why this is possible ?
  ![Prototype Image](https://media.discordapp.net/attachments/1205479570900521003/1240673711900590140/image.png?ex=66476aef&is=6646196f&hm=d79d3fd62e993ac308da68caa4a943004e78457e2473f170126ea21b60e9ea28&=&format=webp&quality=lossless&width=825&height=369)

- here we add own method in `String` object if we add something in `Object` level than it can be accessible to all object but here we add `trueLengthOfString()` method into only `String` object so it only avialable for string

---

- in below example we add own method in `Object` so it avaible for all other object 
```js
let heroArr = ["Thor", "Spider man"];

let heroPower = {
  thor: "Hammer",
  spiderman: "spidy",

  getSpiderPower: function () {
    console.log(`spider man power is ${this.spiderman}`);
  },
};

Object.prototype.UtsavSayHello = function () {
  console.log(`Hello from Utsav `);
};

heroPower.UtsavSayHello();
heroArr.UtsavSayHello();
```



### Inheritance

```js
let human = {
  canFly: false,
  canTalk: true,
  willDead: true,
};

let itsMe = {
  name: "Utsav",
  // __proto__: human, // older syntax
};

// itsMe.__proto__ = human
Object.setPrototypeOf(itsMe,human); // newer syntax

console.log(itsMe);

```