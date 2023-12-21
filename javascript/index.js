// console.log("Hello,World!!");
///
/* =============== Types of Variable and Data types ========

JavaScript is dynamic - type language (duck -type) language , every variable define by using three keyword var , let or const .

var num1 = 23;
var num2 = 23.6;

let string = 'Hello';
let string2 = "hello";
let string3 = `hello`;

let num2  = `${1+2}`; \\ in backtics we perform any formula , use any variable value


// boolean value always true or false
const num7 = true;
const num5 = false;

const empty = null;
const empty2 = undefined;

// special type 

const arr = [];
const obj = {};


// let highNum = Number.MAX_SAFE_INTEGER; // we confirm that javascript engine can safely perform operation till this number tahn NO guarantee (may be perform operation true ) 
// Number.MIN_SAFE_INTEGER
// console.log(highNum);
// console.log(highNum + highNum);
 // therfore we have BigInt

// let num = BigInt(23); // now number is BigInt
// console.log(typeof num);
let maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe);

let NowmaxSafeIsSafe = BigInt(maxSafe);
console.log(NowmaxSafeIsSafe); // now number end with 'n'



let empty = null;
console.log(typeof empty); // object WTF (what the hack);

let notSaid = undefined;
console.log(typeof notSaid);  //undefined
*/
//

/* ================ operators ===== 
console.log(1 + 5); // 6
console.log(60 - 5); // 55 
console.log(7 * 5); // 35 
console.log(25 / 5); // 5
console.log(12 % 5); // 2
console.log(2**3); // 8 2 * 2* 2 = 8;


//concat two string
let str1 = "Hello,";
let str2 = "World!!";

console.log(str1 + " why i am here " + str2);


// fun
console.log(1 + 2 + "4"); // 34 because first two operands are number than third operand in string so joint
console.log("2" + "3" + 5); // 235 because first two operands are string so it will treat as string
console.log("10" - "5"); // 5
console.log("10" / "5"); // 2
console.log("10" * "5"); // 50

let num = 23;
// un-commnet one by one
// console.log(num++); // still 23 because we print first tahn try to addition
console.log(++num);  // it will 24 because we addition first than prin

// bit wise operators less use in web-development , they perfrom task at bit level

// comma operator

console.log(1 + 3, 3 + 4); // 4 7 

// comparison

// console.log(1 == "1"); //true
// console.log(1 === "1"); // now false because not same datatype
// console.log("2" > 1)

// console.log(true == 1);   / //true
// console.log(false == 0);  // true

// console.log(0 == "0"); // LOL true
console.log("2" > "12");
// logical operators
-> Logical AND - && return true if both condition is true , if any one condition false than it false
console.log(1 == 1 && 2 == "2");
-> Logical OR - || retuen true if any of condition is true , return false when both condition is false
console.log(1==2 || 2==2);
-> Logical NOT - !value Returns the inverse value.
let gender = true;
console.log(!gender);

*/
//

/* ====     Types conversion    =====
let bool = true;
// console.log(typeof bool); // boolean

let str = String(bool); // now it is string

// console.log(typeof str);

let num = 123;
console.log(typeof num); // number
let num2 = "123"; // string because of we write number in double quotes
console.log(typeof num2); 

let num3 = Number(num2);  // now agin number 

console.log(typeof num3);


let strNum = "123z";
console.log(typeof strNum);

let num = Number(strNum);  
console.log(num); // will throw NaN becuse of we try to convert 123z into number , 123 is possible to convert into number but what about "z" -> no conversion possible 

// NaN -> Not a Number 
// 123 -> NaN? -false // 123 is number 
// abc -> Nan? - true // because abc are not a number

// let num = Infinity;
// let num = -Infinity;
// let num = NaN;
console.log(typeof num); // all will return number datatype
console.log(1/0); // Infinity



let yes = true;
let no = false;

let nowYes = Number(yes); // now it is 1
let nowNo = Number(no); // now it is 0

console.log(typeof nowYes);
console.log(typeof nowNo); // now both are number



// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
let yes = "yes";
let no = "";

let test1 = Boolean(yes);
console.log(test1); // print true

let test2 = Boolean(no); // print always false 

console.log(test2);
console.log(test2);


*/
//

/* ==== conditional statements
// most simple only if
if(condition){
 // if condition evalute true than execute other vise note
}

let age = 17;
if (age >= 18) {
  console.log(`your age is ${age}  so you can vote`);
} 


// if with alternative action
if(condition){
 // if condition evalute true than execute 
}else{
    // when condition evaluate false
}

let age = 17;
if (age >= 18) {
  console.log(`your age is ${age}  so you can vote`);
} else {
  console.log(`your age is ${age} ,which is less than 18 so you can't vote`);
}


// multiple condition

let age = 23;

if (age >= 1 && age <= 10) {
  console.log(`your age is ${age}, which is tooo low`);
} else if (age >= 11 && age <= 20) {
  console.log(`your age is ${age} , may be you are teen`);
} else if (age >= 21 && age <= 30) {
  console.log(`your age is ${age} , now you are adult`);
}else{
    console.log(`something wrong`);
}

// nested if

for(let i=0;i<=5;i++){
    for(let j=0;j<=i;j++){
        console.log("*");
    }
    console.log("\n");
}

// // hehe 
// *
// **
// ***
// ****
// *****
// ******

// use full example
let year = 2100;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(`${year} is leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    console.log(`${year} is leap year`);
  }
} else {
  console.log(`${year} is not aleap year`);
}

// to big
// small
let year = 2100;

if (year % 4 == 0 && year % 400 == 0) {
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not leap year`);
}

// ternary operator

let age = 18;
let result = age >= 18 ? "You can vote" : "You can't vote";
console.log(result);

// switch .....case;
let age = 19;

switch (age) {
  case 19:
    console.log(`you are 19 year old `);
    break;
  case 20:
    console.log(`you are 20 year old`);
    break;
  default:
    console.log(`nono`);
    break;
}
*/
//

/* == ======= alert , confirm and prompt =============

***** in Node.js we can't perform alert, confirm,prompt you need browser ****
const age = prompt("entre yout age");

alert(`${age >= 18 ? "you can vote" : "you can't vote"}`);


let age = confirm("Is your age is greater than 18?");
alert(`${age == true ? "vote" : " can't vote"}`);


*/
//

/* ================= Iterative statements================
1. while  loop-
-> while(condition){
    // code
}
let num = 1;
while (num < 10) {
  console.log(` value is chaging ${num}`);
  num++;
}

2. do.... while
do{
    //code
}while(conditon);

let num = 1;
do {
  console.log(` value is chaging ${num}`);
  num++;
} while (num < 10);


3. for(initialization,condition,update){
 //code
}

for (let num = 1; num < 10; num++) {
  console.log(` value is chaging ${num}`);
}

// value is chaging 1
// value is chaging 2
// value is chaging 3
// value is chaging 4
// value is chaging 5
// value is chaging 6
// value is chaging 7
// value is chaging 8
// value is chaging 9


=======  break and continue  ============

example of break with linner serach ; when ever condition evalute true break execute and loop stop
let arr = [10, 20, 30, 40, 50, 60];
let key = 40;
let flag, i;
let arrSize = arr.length;
for (i = 0; i <= arrSize; i++) {
  if (arr[i] == key) {
    console.log(`${key} found at ${i} index`);
    flag = 1;
    break;
  }
}

if (!flag) {
  console.log(`${key} not found in array`);
}

// coutinue
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Imposter");
    continue;
  }
  console.log(i);
}

*/
//

/* ============   Arrays (part 1) ======================
1. JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue.
2.- Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined.
3.Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array.

let arr = [1,2,3];
let arr2 = new Array(1,2,3);

console.log(arr);
console.log(arr[2]);

let arr = [1, true, "hello", null, undefined, { num: 1 },67.8];
*/
//

/* ====== object ====

*/
//

/* ============= function ===
-Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// declaration of function

function sayHello(){
    console.log("hello");
} 

// calling function
sayHello();


// bellow name is function parameters
function sayHello(name){
    console.log(`Hello to ${name}`);
}

sayHello("mark") // this is function argument

// default value
when user don't provide all argumnet then default value is used
function sum(a, b = 5) {
  console.log(a + b);
}

sum(1); //output is 6 because user didn't provide second parameter
----------------------------------------------------------------------
function sum(a, b = 5) {
  console.log(a + b);
}

sum(1,2); // output is 3 

function sum(a, b = 5) {
  console.log(a + b);
}

sum(1,2);


*/



/* ==========  Manipulating Arrays ======  Arrays (part 2)  =======

1.Arrays can also function as a stack. The push and pop methods insert and remove variables from the end of an array.

const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7); // add 7 at end of an array
numbers.push(7,30); // add 7 and 30 at end of an array
// console.log(numbers);

const nums = [10,20,30,40,50,60,70,80,90,100];
nums.pop(100); // only one element 100 will remove and array is not modified  

console.log(nums);;


-. The unshift and shift methods are similar to push and pop, only they work from the beginning of the array. 

const num2 = [2,3,4,5,6,7,8,9,10];
num2.unshift(1);
num2.unshift(1,100); // can add Multiple elements at beginning of and array
console.log(num2);

const num3= [1,2,3,4,5,6,7,8,9,10];
num3.shift(1); // only remove one element from an array at beginning of array
console.log(num3);

// Splicing:- 
 - remove certain part form an array and create a new array
let arr = [10, 20, 30, 40];

console.log(arr);
// synatx:- array.splice(start, deleteCount, item1, item2, ...);
let newArr = arr.splice(1,2); // this will return deleted elements
console.log(newArr); //
console.log(arr); //

*/
//

// NOTE 1. truthy and falsey vallue
// NOTE 2. Nullish coalescing operator '??'
