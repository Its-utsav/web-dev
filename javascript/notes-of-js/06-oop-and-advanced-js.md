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
  - Proto OR Prototype
  - Classes
  - Instance (keywords like `new` , `this`)

3. Pillars of `oop` :-

- same in all `opp` supported language
  - Abstraction
  - Encapsulation
  - Inheritance
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
4. complete process
