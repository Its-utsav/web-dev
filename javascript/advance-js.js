//
/*==================== higher oredr function  ================================
// -> higher order function is the function than accepts function as their parameter

// //eg1
// function hello() {}
// hello(function () {});
// // eg2
// function sayHello() {
//   return function () {};
// }


// in-bulit eaxample forEach . think about
*/

/* =========================== constructer function =========================== 
// -> a function that is called with 'new' keyword and return an object with all
properies and methods known as custructer function


// function User() {
//   this.username = "Utsav";
//   this.age = 17;
//   this.height = 5.3;
// }

// function User(username,age,height) {
//     this.username = username;
//     this.age = age;
//     this.height = height;
//   }

// let user1 = new User("utsav",17,5.3);

// console.log(user1);
*/

/* ========================  first class function ======================== 

//  a language is have first class function when the function in that laguage treat as normal value or variables, we can pass , save and use them as arugments to another function

let sum = function (a,b) {
  return a + b;
};

console.log(sum(2,3));
*/

/* ================== new kewyword ===================
// It is used to create an instance of an object base on a constructor function.
// The `new` keyword creates a new empty object and sets the `this` to point the new object

// step - 1 . whenever new kewyword  see imagine a empty objcet
// step 2 .  fill that objcet with its counstructor values

function User(name) {
  this.name = name;
}

let user1 = new User("Utsav");
let user2 = new User("Sam");

console.log(user1);
console.log(user2);


*/

/* ============================= iifo ============================ 
// Immediately INvoked Function Expression
-> it is a way to create  function and Immediately execute it without need of calling
//

(function () {
  let a = 12;
  console.log("value of an a is :", a); // work
})();

console.log(a); // throw an error
// used for prevanting them fro, pollutin the gloable envirnment and interface with other parts of code


let ans = (function () {
  let num1 = 12;

  return {
    getter: function () {
      console.log(`values of number is ${num1}`);
      // now value can me access out of an IIFE
    },
    setter: function (num) {
      num1 = num;
      // now value can be change from outside of an IIFE
    },
  };
})();

console.log(ans.getter()); // works

ans.setter(90);

console.log(ans.getter()); // value is safely changed
*/

/* prototype


*/

/*====================prototype inheritance=====================
// in below human object defon and give some proprety

let human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  willDead: true,
  haveFourlegs: false,
};

//  supose we need to give same property to randomPerson object 
// do win copy paste , but bad parctise
// so we can borrowe it from human object

let randomPerson = {
  goodInEnglish: true,
  masterInJs: true,
};


randomPerson.__proto__ = human;
// now human key are the part of randomPerson with borrow
// to check it run in v8-engine driect


// console.log(randomPerson);
// console.log(randomPerson.canFly);
// console.log(randomPerson.canTalk);
// console.log(randomPerson.willDead);
// console.log(randomPerson.canWalk);
*/

/* ===================this call  apply bind=============
this -> it talk about current contex


global => window
function => window
method => object

method -> function inside any object


any method this keyword refer to current parent object 
--------------------
call() , apply() & bind() use to change functions this value


function person() {
  console.log(this); // in node it give empty objcet & in browser it give window objcet
}

let harry = { name: "Harry" };


person.call(harry);


// apply is almost same as call but in apply we pass this and arugument in array
// because apply tackes only two argument 1. thisContax 2. arguments in form of array , it because my be aguments are multiple

function person(val1,val2,val3) {
  console.log(this,val1,val2,val3); // in node it give empty objcet & in browser it give window objcet
}

let harry = { name: "Harry" };


person.call(harry,11,12,13);
---------------

function abcd(val1,val2) {
  console.log(this,val1,val2);
}
const person = { name: "harry" };

const  bindFunction= abcd.bind(person,1,12);

bindFunction()

bind() -> create a new funtion with same body as the original function butwith fixed `this` value.

but bind won't invoke immediately, we need to store in a variable and call that variable



*/

/* ============================= pure and impure funcyion======
--
pure function
1. same output for same input
2. will never change value of global variable


//pure function

function sum(a, b) {
  return a + b;
}


let ans1 = sum(1,2);
let ans2 = sum(1,2);

console.log((ans1 + "    " + ans2));


let anyValue = 12
// impur function
function random(value){
  anyValue = 120
  return Math.random() * value;
}


let ans1 = random(12);
let ans2 = random(12);

console.log((ans1 + "    " + ans2));

*/





// clousers



// this is improtant in ES-6
// let and const -

// arrow function
// templet literals
// default parameter
// rest and speard

//  destructuring
// classes
// modules
// promises
// async awawit
// * try and catch
