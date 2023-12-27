// console.log("Hello,World!!");
///
/* ========================= Types of Variable and Data types ========

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

/* ====================== operators ===== 
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

/* ===============     Types conversion    =====
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

/* ============= conditional statements
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

/* == ============== alert , confirm and prompt =============

***** in Node.js we can't perform alert, confirm,prompt you need browser ****
const age = prompt("entre yout age");

alert(`${age >= 18 ? "you can vote" : "you can't vote"}`);


let age = confirm("Is your age is greater than 18?");
alert(`${age == true ? "vote" : " can't vote"}`);


*/
//

/* ================================== Iterative statements================
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
--------------------------------------------- new loop ------ for..in -------------------


// especially for array and objeci 
for (key in object){
  // body
}

let obj = {
  name: "javscript",
  age: 28,
};

for (let key in obj) {
  console.log(key); // this for printing key
  console.log(obj[key]); // this for printing key value
}

*/
//

/* ===============   Arrays (part 1) ======================
1. JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue.
2.- Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined.
3.Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array.
----


Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.


two way to declare array:-

// let arr = []; // 1

// let arr = new Array(); // 2

let arr = [1,2,3];
let arr2 = new Array(1,2,3);

console.log(arr);
console.log(arr[2]);

let arr = [1, true, "hello", null, undefined, { num: 1 },67.8];

let webDev = [
  "Html",
  "Css",
  "Javascript",
  "Git",
  "MongoDB",
  "Express",
  "React",
  "Node",
];

// console.log(webDev); // display full array
// console.log(webDev[0]); // html because html at 0 index postion

// display last array elemnt


// console.log(webDev[webDev.length - 1]); // node
console.log(webDev.at(-1));
// replace git with git-github

// full based on code

// let indexOfgit = webDev.indexOf("Git");
// if (indexOfgit != -1) {
//   webDev[indexOfgit] = "Git-Github";
//   // console.log(indexOfgit);
// } else {
//   console.log("no no");
// }
// console.log(webDev);


-------------------
1.Arrays can also function as a stack. The push and pop methods insert and remove variables from the end of an array.
-- push  add element at end and pop remove elemnts from end of elemnt 
const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7); // add 7 at end of an array
numbers.push(7,30); // add 7 and 30 at end of an array
// console.log(numbers);

const nums = [10,20,30,40,50,60,70,80,90,100];
nums.pop(100); // only one element 100 will remove and array is not modified  

console.log(nums);;


-. The unshift and shift methods are similar to push and pop, only they work from the beginning of the array. 

// unshift add elements add start
// shidt remove elements form start an array
const num2 = [2,3,4,5,6,7,8,9,10];
num2.unshift(1);
num2.unshift(1,100); // can add Multiple elements at beginning of and array
console.log(num2);

const num3= [1,2,3,4,5,6,7,8,9,10];
num3.shift(1); // only remove one element from an array at beginning of array
console.log(num3);

-------- Methods push/pop run fast, while shift/unshift are slow.

=-=-=-=-=-=-=-=-=
loops in array

let arr = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for(let key in arr){
//   console.log(key); // give index
//   // console.log(arr[key]); // give values of index
// }

// for (let value of arr) {
//   console.log(value);
// }

// length

// let arr = [];
// arr[120] = "JavaScript";

// console.log(arr.length);
// increase doest't matter
// but decrease matter

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.length = 3; // even orignal size of array is 7 but we set 3 LoL

// console.log(arr); // [ 1, 2, 3 ]

arr.length = 5;

// console.log(arr); // [ 1, 2, 3, <2 empty items> ]

// clear the size of an array

arr.length = 0; // LoL-2


// example of multideimensinal array

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr[1][1]); // 5

// numeric array toString

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr2 = arr.toString(); // now arr is string array any prof
console.log(arr); 
console.log(arr2);
console.log(typeof arr2); // string

console.log([]);        // Output: []
console.log([] + "");   // Output: ""
console.log([1]);        // Output: [1]
console.log([1] + "");   // Output: "1"
console.log([1, 2]);        // Output: [1, 2]
console.log([1, 2] + "");   // Output: "1,2"
Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

This operator has no special treatment for arrays, it works with them as with any objects.

// console.log(0 == []); // true
// console.log("0" == []); // false
// console.log(0 == ""); // true
// console.log('0'==''); // false



The call to new Array(number) creates an array with the given length, but without elements.

The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
If we shorten length manually, the array is truncated.
Getting the elements:

we can get element by its index, like arr[0]
also we can use at(i) method that allows negative indexes. For negative values of i, it steps back from the end of the array. If i >= 0, it works same as arr[i].
We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
To compare arrays, don’t use the == operator (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

Instead you can use for..of loop to compare arrays item-by-item.
*/
//

/* ==================== Arrays methods ==============
-push() - add element at end of an array
-pop() - remove elements and of an array
-shift() - remove first elements form beginig of an array
-unshift() - add elements at 0 th index


------ few other----
arry.splice(position,deleteCount,value1,value2);

values are optional

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(2, 2);  // remove 3 and 4
arr.splice(2,arr.length) // remove all elemnts after 2 index

console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(2, arr.length, "a", "b"); //delete and replace
// emove all elemnts after 2 index than add a and b
console.log(arr);

// negative index are allow (work at end of an array)


// slice()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copyArr = arr.slice(2, 4); // create a copy from 2 index to 4 th index.
let newCopy = arr.slice(-2); // last tow elements
console.log(newCopy);

----- joint two array or multiple elements


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = ["a,", "b"];
// let newArray = arr1.concat(arr2); // joint two array
// let newArray = arr1.concat(arr2, arr3); concat two array into one
let newArray = arr1.concat(arr2, 99, 70);

console.log(newArray);


------------------------------ forEach() -----------------------

Array.forEach((value,index,array,)=>{})

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((value, index, array) => {
  // console.log(value);// print individula array
  // console.log(index); // print index
  // console.log(array); // print whole array

  // let  see which elemnts at which index
  console.log(`Elment ${value} at ${index} in ${array} array`);
});

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(element => console.log(element))

many use of forEach();
// searching in array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.indexOf(2));  // 1 
// console.log(arr.indexOf('A'));  // -1 because but 'A' in not in array

// console.log(arr.includes(2)); // true
console.log(arr.includes(2,4)); // false because 2 located at 0 index but we search from 4th index



let arr = [NaN];

// console.log(arr.includes(NaN));  // true
// console.log(arr.indexOf(NaN)); // -1

// The includes method handles NaN correctly

//find and findIndex/findLastIndex

array.find(callback(element, index, array), thisArg);

callback: A function that is called once for each element in the array until it returns true, indicating that the desired element has been found. The callback function is called with three arguments: element (the current element being processed), index (the index of the current element), and array (the array being traversed).

thisArg (optional): An object to which the this keyword can refer in the callback function. If omitted, this refers to the global object.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// example
let result = arr.find((arr, index, array) => {
  return arr > 5;
});

console.log(result);
//It stops iterating once the first matching element is found



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// example of firstIndex

// let result = arr.findIndex((arr, index, array) => {
//   return arr > 5; // return index if condition is evaluate true
// });

// console.log(result);

// findIndex() returns the index of the first element that satisfies the condition or -1 if no such element is found.


// let result = arr.lastIndexOf((arr, index, array) => {
//   return arr < 5; // return index if condition is evaluate true
// });

// let result = arr.lastIndexOf(2) // 1 
// let result = arr.lastIndexOf(5,9); // 4 index
let result = arr.lastIndexOf(5,1); // -1 because it will find 5 after 1 index
console.log(result);
// lastIndexOf() returns the index of the last occurrence of the specified value or -1 if the value is not found.
------------------------- filter ----------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = arr.filter((value,index,arr)=>{
//  return value > 5; // condtion match than it return
// })


// console.log(result);

// search

// let programmingLang = [
//   { id: 1, name: "JavaScript", level: "High" },
//   { id: 2, name: "C", level: "Low" },
//   { id: 3, name: "Java", level: "High" },
//   { id: 4, name: "C++", level: "High", level: "Low" },
//   { id: 5, name: "Python", level: "High" },
// ];

// let result = programmingLang.filter((value, index, arr) => {
//   return (value.level === "High"); // diplay only high level language
// });

// console.log(result);

//let programmingLang = [
//   { id: 1, name: "JavaScript", level: "High" },
//   { id: 2, name: "C", level: "Low" },
//   { id: 3, name: "Java", level: "High" },
//   { id: 4, name: "C++", level: "High", level: "Low" },
//   { id: 5, name: "Python", level: "High" },
// ];

// let newArr = [];
// let result = programmingLang.map((value, index, arr) => {
//   if (value.name.startsWith("C") == 1) {
//     newArr.push(value);
//   }
//   return value.name.startsWith("C");
// });

// console.log(result);
// console.log(newArr);

let unsortArr = [3, 4, 5, 78, 32, 100, 9, 56, 1];

unsortArr.sort();

// console.log(unsortArr); //[1, 100, 3, 32, 4, 5, 56, 78, 9];
// what 1 and than directly 100 not 3

let unsortArr = [3, 4, 5, 78, 32, 100, 9, 56, 1];
unsortArr.sort((a, b) => {
  return a - b;
});

console.log(unsortArr);


let unsortArr = [3, 4, 5, 78, 32, 100, 9, 56, 1];
// buble sort

let size = unsortArr.length;
let temp;
// 1. normal bubble sort
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (unsortArr[j] < unsortArr[i]) {
      temp = unsortArr[i];
      unsortArr[i] = unsortArr[j];
      unsortArr[j] = temp;
    }
  }
}

console.log(unsortArr);


let unsortArr = [3, 4, 5, 78, 32, 100, 9, 56, 1];
unsortArr.reverse(); // reverse th array
console.log(unsortArr);


let arr = ["Österreich", "Andorra", "Vietnam"];

arr.sort((a, b) => {
   return a.localeCompare(b);
});

console.log(arr);


------------ split and join -------------------

// let name = "JavaScript,C";

// let newName = name.split(",");

// for(let value of newName){
//   console.log(value);
// }

// console.log(newName);


let name = ["JavaScript", "C"];

let newName = name.join("-");
console.log(newName);


------------------------------- reduce ------------------------------
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

callback: A function to execute on each element in the array, taking four arguments:

accumulator: The accumulated result of the previous callback invocations.
currentValue: The current element being processed in the array.
currentIndex: (Optional) The index of the current element being processed.
array: (Optional) The array reduce was called upon.
initialValue: (Optional) A value to use as the first argument to the first call of the callback. If no initial value is provided, the first element of the array is used as the initial accumulator value.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((acc, value, index, arr) => {
  return acc + value;
}, 0); // Initialize the accumulator with 0

console.log(`Final sum: ${sum}`);

Arrays do not form a separate language type. They are based on object


// console.log(typeof {}); // object
// console.log(typeof []); // object

// console.log(Array.isArray({})); // false
// console.log(Array.isArray([])); // true

A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

arr.some(fn)/arr.every(fn) check the array.

The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

We can use every to compare arrays:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

For the full list, see the manual.

From the first sight it may seem that there are so many methods, quite difficult to remember. But actually that’s much easier.

Look through the cheat sheet just to be aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.

Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at the cheat sheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically remember the methods, without specific efforts from your side.
*/

/* temp

// Splicing:- 
 - remove certain part form an array and create a new array
let arr = [10, 20, 30, 40];

console.log(arr);
// synatx:- array.splice(start, deleteCount, item1, item2, ...);
let newArr = arr.splice(1,2); // this will return deleted elements
console.log(newArr); //
console.log(arr); //

*/

/* =============== object ====
=== 2 way to create object =====

let user = new Object() // with constructor

let user1 = {}

let user = {
  "key":value, // here key is string and value can be anything 
}


============================

let user = {
  name: "javascript",
  age: 28,
  email: "Javascript@example.com",
};

// display the value of object
// console.log(user["name"]); // in bractes key must be in enclosed with qoutes
// console.log(user.name); // javascript
// console.log(user.age); // 28
// console.log(user.email); // Javascript@example.com

// // adding key value in object

user.bod = 1998; // add in the object

// console.log(user.bod);
// console.log(user);

// delete from the object

delete user.email;

console.log(user);

--------------------------------------
// multiword property
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// console.log(user["name"]); //
// console.log(user["likes birds"]); // display multiword property
// delete user["likes birds"]           // delete multiword property

// console.log(user);


---------------------------------
// given space spearted key for an object
let user = {
  name: "js",
  age: 28,
};

let key = "Founder Name";
user[key] = true;

console.log(user);

// the variable key may be calculated at run-time or depend on the user input.


------------------------- GOOD  - - - - - - - - - - - - - - - - 


let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
---------------------------------------

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

he meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.


//So, if a visitor enters "apple", bag will become {apple: 5}.


// In real code, we often use existing variables as values for property names.

// function info(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// both above and bellow code are same

function info(name, age, bod) {
  return {
    name, // name :name
    age, // age : age
    bod: 1998,
  };
}
let details = info("javscript", 23);
let details2 = info("harry", 45);
let details3 = info("carry", 45,2001);

console.log(details.name);
console.log(details2.age);
console.log(details3.bod);

// There are no limitations on property names. They can be any strings or symbols

--------------------------------------

let obj = {
  name: "javascript",
  age: 28,
  bod: 1998,
};

let Nullobj = {};
console.log(obj.noSuchProperty === undefined);
-----------------------------------------

// in operator

// "key" in obj

let user = {
  name: "javasript",
  age: 28,
  bod: 1998,
};

// console.log("name" in user); // true
console.log("gender" in user); // false because no such gender exiest in user object

------------------------------
let obj = {
  test: undefined
};

console.log(obj.test); // undefined
console.log(obj["test"]); // undefined
// even test key is available but still undefined , so we use in operator 
console.log("test" in obj);  // true 


-----------------------  copy object into other object by reference(so change in origanal object effect an other object) --------------

let user = {
  name: "JS",
  age: 28,
};

// console.log(user);

let copyUser = user; // copy with reference

// console.log(copyUser);

console.log(user == copyUser); // true
console.log(user === copyUser); // true
// because both object are same

// Const objects can be modified


====================== clone object =========

let newObj = {
  name: "Js",
  age: 28,
};

console.log(newObj);

let copyObj = {};

for (let key in newObj) {
  copyObj[key] = newObj[key];
}
copyObj.dob = 1998;
console.log(copyObj);
// now newObj and copyObj are different========

-------------------

// let newObj = {
//   name: "Js",
//   age: 28,
// };

// console.log(newObj);

// let copyObj = {};

// we can also use :- Objcet.assign(destination,sources);

// Objcet.assign(destination,sources); can be use with different way 
// in below example we assign new key(property) with help of Object.assign();
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

console.log(user);

let newObj = {
  name: "Js",
  age: 28,
};

let clone = Object.assign({}, newObj);

clone.dob = 1998;
console.log(clone);


---------

// nesting cloning

// let obj = {
//   FullName: {
//     firstName: "David",
//     MidddelName: "Warner",
//   },
// };


// console.log(obj.FullName.firstName);// printing nested object
// console.log(obj.firstName);// printing nested object will give undefined
// console.log(obj["FullName"]); //

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log(clone);
---------------------- structuredClone -----------

const originalObject = {
  name: "John",
  age: 25,
  address: {
    city: "Mumbai",
    country: "India",
  },
};

// Using structuredClone to create a deep copy
const clonedObject = structuredClone(originalObject);
clonedObject.dob = 1993;
console.log(clonedObject);

-------------------- object method , .this

// A function that is a property of an object is called its method.
eg.;-
let obj = {
  name: "Js",
  age: 28,
};

obj.sayHi = function () {
  console.log(`hi to ${obj.name}`);
};

// now sayHi property is function method
obj.sayHi();


// let obj = {
//   sayHi: function () {
//     console.log("hello");
//   },
// };


//  in shorter synatx
let obj ={
  sayHi(){
    console.log("HI");
  }
}

obj.sayHi();

--------------this keyword---
// this keyword use for current contax
// The value of this is evaluated during the run-time, depending on the context.
// The value of this is defined at run-time.
let obj = {
  name: "Js",
  age: 28,
  email: "js@exmple.com",
  sayHi(){
    // console.log(`Hi,to ${this.name}`); 
    // console.log(`Hi,to ${obj.name}`); 
  }
};


console.log(this); // this will return null in node.js and in browser it will return window object

obj.sayHi()

let user1 = { name: "JavaScript" };
let user2 = { name: "Typescript" };

function sayName (){
  console.log(`${this.name}`);
}

user1.fun = sayName; // now name key value print
user2.fun = sayName; //

console.log(user1)
user1.fun(); 
console.log(user1["fun"]);

------------------------------------
// this is magical but don't work with arrow function ()=>{}
// here arrow() uses this from the outer user.sayHi() method:

// let user = {
//   name: "JS",
//   age: 28,
//   let arrow = ()=>{},
// };

// this will not work

let user = {
  name: "JS",
  age: 28,
  sayHi() {
    let arrow = () => {
      console.log(this.name);
    };
    arrow(); // comment 1. user.sayHi(); // not work
  },
};

// user.arrow(); // not work thow error
// user.sayHi(); // this work but no any output  because we didn't call arrow();
// un-comment below and above code
user.sayHi(); // now this work and give output

in short:-

1.Functions that are stored in object properties are called “methods”.
2.Methods allow objects to “act” like object.doSomething().
3.Methods can reference the object as this.
4.The value of this is defined at run-time.

5.When a function is declared, it may use this, but that this has no value until the function is called.
6.A function can be copied between objects.
6.When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
7.Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

*/
//

/* ==================== function ===
-Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

synatx:- 

function functionName(parameter1,parameter2,.....,parametern){
  //body
}

// declaration of function

function sayHello(){
    console.log("hello");
} 
 without function calling function will not execute 

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

sum(1); // output is 6 because user didn't provide second parameter value
----------------------------------------------------------------------
function sum(a, b = 5) {
  console.log(a + b);
}

sum(1,2); // output is 3 

function sum(a, b = 5) {
  console.log(a + b);
}

sum(1,2);


function msgFun(msg="hello"){
  return msg;
}

function sayHi(name,msg = msgFun("bye bye")){
  console.log(`${msg} to ${name} `);
}

sayHi("mark");

// above code in example of default function when sayHi function called than msgFun() also called ,

let add = function sum(a, b) { 
  // sum is not valid
  console.log(a + b);
};

add(12, 13);
sum(1,2); // above code in not valid when we call sum() because sum is not a function


let add = function (a, b) {
  console.log(a + b);
};

add(12, 13);

//a global Function Declaration is visible in the whole script, no matter where it is
when we declare function than it would be gloable function , so first call than use is possible but , with function expression first call and than declarion not valid 

// this will worj=k
 sayHello("utsav");
function sayHello(name) {
  console.log(`hello to ${name}`);
}

--------------------------------------------------------------
not work
sayHello("utsav");
let sayHello = function (name) {
  console.log(`hello to ${name}`);
}

================================================================== ==============================
                                    ARROW FUNCTION              
================================================================== ==============================

// let FunctionName = (parameterN,default="value")=>{
//   // body
// }


///example:- 
let sum = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};

sum(1,2)

// now time to short function

// 1.
let sum = (a, b) => {console.log(`${a} + ${b} = ${a + b}`);};
// 2.
let sum = (a, b) => console.log(`${a} + ${b} = ${a + b}`);
// 3. if we have only one paramete than () are optional
let sum = a => a ;
sum(1, 2);
*/
//

/* =============== Constructor, operator "new" ===============
----
1. The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

2. That can be done using constructor functions and the "new" operator.


note :- Constructor functions technically are regular functions. 
  There are two conventions though:

1.  They are named with capital letter first.
2.  They should be executed only with "new" operator.


// function User(name) {
//   this.name = name;
// }

// let user1 = new User("harry");

// console.log(user1.name);

// abive code execute in below step

// function User(name) {
  // 1.
  // this = {}  //   implicity

  // 2.
  // this.name = name;

  // 3.
  // return this; // implicity
// }


// let user1 = new User("harry");

// let user1 ={
//   name:"harry"
// }

// if we want to create other users, we can call new User("Ann"), new User("Alice") and so on.


If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

let funUser = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();

// This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

---------------------
// the new.target property can be used inside a function to determine whether the function was called with the new keyword (as a constructor) or without it (as a regular function).

// Inside a function, we can check whether it was called with new or without it, using a special new.target property.

// It is undefined for regular calls and equals the function if called with new:

// function User() {
//   alert(new.target);
// }

// // without "new":
// User(); // undefined

// // with "new":
// new User(); // function User { ... }

// function MyConstructor() {
//   if (new.target) {
//     console.log("Called with new keyword (constructor mode)");
//   } else {
//     console.log("Called without new keyword (regular function mode)");
//   }
// }

// // Called with the new keyword
// let instance = new MyConstructor();
// // Output: Called with new keyword (constructor mode)

// // Called without the new keyword
// MyConstructor();
// Output: Called without new keyword (regular function mode)

*/
//

/* ================================ Symbols ==============

By specification, only two primitive types may serve as object property keys:

string type, or symbol type.

- symbol always representes unique identifier

let sym1 = Symbol(1);
let sym2 = Symbol(1);

// console.log(sym1 == sym2); // both always false 
// console.log(sym1 === sym2); //

// symbol can be convert into the string but cannot be directly convert into a number or used in to mathematical operations

let sym1 = Symbol(1);
let str = String(sym1);

console.log(sym1);
console.log(str);

// above code can convert into the string

// in below code i am trying to convert string symbol into number



let sym =  Symbol('js');
let num = Number(sym); // error we can't convert string symbol into number

let add = num + num ; // even this is not possible

console.log(sym);
console.log(num);
console.log(add);


----------------- Symbol.description
let sym1 = Symbol(1);
let str = String(sym1);

console.log(sym1); // 
console.log(sym1.description); // give actual value of symbol 


---------------------
let user = {
  name: "js",
};

let id = Symbol("testId");

user[id] = 1;

console.log(user);

This use of symbols allows you to add properties to objects in a way that avoids accidental collisions with other properties, as symbols are guaranteed to be unique. The property added with the symbol as the key is not easily discoverable through standard property access methods, providing a level of privacy or "hidden" property behavior.

 -=-=----------- Symbols in an object literal ------------------

If we want to use a symbol in an object literal {...}, we need square brackets around it.

let sym = Symbol("id");
let sym2 = Symbol("name");

let obj = {
  [sym]: "1",
  [sym2]: "js",
};

// console.log(obj);
// console.log(obj[sym]);
// console.log(obj[sym2]);

// display key and its value with help of for in loop

for (let key in obj) {
  console.log(key, obj[key]); // somethig wrong in my code
}

-----------------------------

let sym = Symbol("id");
let sym2 = Symbol("name");

let obj = {
  [sym]: "1",
  [sym2]: "js",
};

// console.log(obj);
// console.log(obj[sym]);
// console.log(obj[sym2]);

// display key and its value with help of for in loop

for (let key in obj) {
  console.log(key, obj[key]); // somethig wrong in my code
}

console.log(obj[sym2]); // when sym and sym2 used as key it wrork but it didn't work in loop

------------------- Symbol.for() -----------
--  as we know all symbol are unique even we give same name , with Symbol.for()  we can give same name to another symbol

// let sym = Symbol("test"); // give false because this symbol not in registers  global

let sym = Symbol.for("test"); // now it registers in global
let symAgin = Symbol.for("test");

console.log(sym === symAgin); // true


-------- Symbol.keyfor() ---------------

-- this return key name

let sym = Symbol.for("test");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));


------------- description ------------
let globalSym = Symbol.for("test");
let localSym = Symbol("1");

console.log(Symbol.keyFor(globalSym)); // in global
console.log(Symbol.keyFor(localSym)); // local so undefined
 
console.log(globalSym.description); // give value
console.log(localSym.description);  // give value

*/
//

/* =================== object-top rimitive =====================
The [[ToPrimitive]] algorithm involves two steps:

1. Hint Argument: The algorithm takes a "hint" argument, which can be either "number" or "string." The hint indicates whether the conversion is for a numeric or string context.


2. ValueOf and ToString Methods: The algorithm first checks if the object has a valueOf method. If the result is primitive, it is returned. If not, the algorithm checks for a toString method and uses its result.

--------- panding --------------------

*/
//

/* ========== method of primitives data types =========
- primitives datatypes are the basic data types that hold single value , they are immutabel(can not be changed) and direct hold the value
- there are main 7 primives data types:-
string , number, boolean , undefined, null ,synbol, BigInt,

let str = "javascript";
let num = 28;
let bool = true;
let bool2 = false;
let wtf = undefined;
let empty = null;
let sym = Symbol("test");
let bignum = BigInt(74364362456345367245);

----- some example  of primitives methods --------
const str = "Javascript";

// console.log(str.length); // printing length of string // property
// console.log(str.toUpperCase()); // printing in uppercase
// console.log(str.toLowerCase()); // printing in lowercse
// console.log(str.charAt(1)); // return a because a at 1 index position
console.log(str.charCodeAt(1)); // return charcter code of 1 index position in this case it return 97 (ASCII)

----
let num = 3.141592653589793;

console.log(num.toFixed(2)); // return 2 integer (number)  after dot '.'
console.log(num.toPrecision(3))


---- no method are availabel for boolean,null,undefined


*/
//

/* ================ number ====================
- in js two types of number are available 
1. Regular number in js stored in 64 bit format IEEE-754 double precision floating point numbers , we use most time

2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1), as we mentioned earlier in the chapter Data types.

-------------------------------------- way to number ----------------------- 


// let billion = 1000000000; // good but not so readable

// let bi_ll_ion = 1_000_000_000; // it is just a syntactic sugar // js engine just ignore

// console.log(bi_ll_ion); // print  normally 1000000000

// let billionWith_e = 1e9; //billion in short word
// 1 and 9 zero any prof ?

// let numBillion = 1000000000;
// console.log(billionWith_e === numBillion); // true

// what if value is too short like 0.0000000002 ? or any other

let num = 0.0000000002;
let numWith_e = 2e-10;


console.log(num === numWith_e); // true


// hexadecimal
// console.log(0xff); // 255
// console.log(0xFF); // 255


-------------
// let num = 2; // for binary
// let num = 9; // for octal
// let num = 77; // for hexa decimal


// console.log(num.toString(2)); // binary value -10
// console.log(num.toString(8)); // octal value - 11
// console.log(num.toString(16)); // hexa value - 4d
----------------

             round the number 

// 1. with Math built-in object

// let pi = 3.141592653589793;

// a . floor
// console.log(Math.floor(pi)); // give 3.  3.14 to 3 (round down)
// b . celi
// console.log(Math.ceil(pi)); //  give 4.  3.14 to 4 (round up)
// c. round
// console.log(Math.round(pi)); //  give 3.  3.14 to 3 (round)
// d. trunc
// console.log(Math.trunc(pi)); // remove value after decimal

------------------------------------
// if number is too big than it overflow in 64-bit storage and become a special numeric value Infinity

// console.log(1e500); // give Infinity

// more practicle example

// console.log(0.1 + 0.2 == 0.3); //  WTF false
// lets see more in depth
// console.log(0.1 + 0.2); // 0.30000000000000004
// ----- ..... 0.4 WTF it is not just in javascript
// let fixed it

let sum = 0.1 + 0.2;
// console.log(sum.toFixed(3)); // now it is 0.300 lets compare again
// console.log(sum.toFixed(3) == 0.300); // true
//but
// console.log(sum.toFixed(3) === 0.300); // now fasle
// console.log(typeof sum.toFixed(3));  // string thats the reson above code is false lets solve
console.log(+sum.toFixed(3) === 0.3); // now true --- 0.300 became number

------------------------------------

console.log(-0 == 0); // wtf true
// check even datatype
console.log(-0 === 0); //  true


------------------- test --- isFinite and isNaN

console.log(isFinite(3)); // true
console.log(isFinite('str')); // false
console.log(isFinite(Infinity)); // false
console.log(isFinite(true)); // true
console.log(isFinite(NaN)); // false

------------
console.log(isNaN('a')); // true because a is not a number
console.log(isNaN(10)); //  false
console.log(isNaN(Infinity)); // false
console.log(isNaN(Symbol)); // true

console.log(typeof NaN);
console.log(isNaN(NaN)); // Well done



------------------ parseInt and parseFloat ------
--used to convrt  number string into number.


// let num = "123";
// console.log(typeof num); // string
// console.log(parseInt(num)); // now number

// let strNum = "123a";
// console.log(typeof strNum);
// console.log(parseInt(strNum)); // give a NaN because a can't convert into number

// let pi = "3.141592653589793";
// // console.log(parseInt(pi)); // it convert into integer
// console.log(parseFloat(pi)); // give same exacte same value of pi

let pi = "3.14.15.92.65.35.89.79.3";
console.log(parseFloat(pi)); // only print 3.14

// Math object

// print random value (by default);

// console.log(Math.random()); // random value between 0 to 1
// console.log(Math.random()*10); // random value between 0 to 10
// console.log(Math.random() * 10 + 1); // random value between 1 to 10

// inshort +1 for preventing 0 and 10 for max(if we *100 than if get max value is 100 );

//task print random value between 11 to 90;

// let min = 11;
// let max = 90;
// console.log(Math.random() * (max - min + 1) + min);

//task print random value between 11 to 90 which is integer;

// let min = 11;
// let max = 90;
// console.log(Math.trunc(Math.random() * (max - min + 1) + min));


// few  example

// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 69)); // return max value
// console.log(Math.min(10, 2, 30, 403, 43534, 643, 7, 8, 9, 69)); // return min value

// console.log(Math.pow(2, 3)); // 8 = 2 * 2 * 2
// console.log(2 ** 3);

// // console.log(typeof Math.pow(2, 3)); // 8 = 2 * 2 * 2
// // console.log(typeof (2 ** 3));

// console.log(Math.pow(2, 3) === 2 ** 3); // true

*/
//

/* = = = = = = = = = = = = = = = = = = = = = = = = =  string = = = = = = = = = = = = = = = 
- in js textual data stored as string , no separate type for single character 
- string are enclosed in following

 "" or '' or ``
let str = "Javascript";
let str2 = "Javascript";
let str3 = `Javascript`;

in `` (back ticks) we can use  direct variable value etc.

let sum = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};

sum(1,2);

// 1 + 2 = 3


// Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);

// Guests:
//  * John
//  * Pete
//  * Mary


-=--=-=-=-===-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
escaped characters are special sequences that represent characters that are difficult or impossible to include directly in a string.

they are written in \n like way.

\n for new line
\t for tab
\b for backspace
\' , \" ,   \\

========================================
let str = "Javascript";

console.log(str.length); // 10



// access the singel character
let str = "Javascript";
// console.log(str[0]); // j
// console.log(str[1]); // a
// console.log(str[2]); // v
// console.log(str[3]); // a
// console.log(str[4]); // s
// console.log(str[5]); // c
// console.log(str[6]); // r
// console.log(str[7]); // i
// console.log(str[8]); // p
// console.log(str[9]); // t
// console.log(str[10]); // undefind because length is 10 but index start with 0

// console.log(str.at(0)); // J
// console.log(str.at(1)); // a
// console.log(str.at(2)); // v
// console.log(str.at(3)); // a
// console.log(str.at(4)); // s
// console.log(str.at(5)); // c
// console.log(str.at(6)); // r
// console.log(str.at(7)); // i
// console.log(str.at(8)); // p
// console.log(str.at(9)); // t
// console.log(str.at(10)); // undefind

// opposite of nagative value

console.log(str.at(-1)); //t
console.log(str.at(-2)); //p
console.log(str.at(-3)); //i
console.log(str.at(-4)); //r
console.log(str.at(-5)); //c
console.log(str.at(-6)); //s
console.log(str.at(-7)); //a
console.log(str.at(-8)); //v
console.log(str.at(-9)); //a
console.log(str.at(-10)); // j

// console.log(str[str.length - 1]); // last character of the string 
// console.log(str(str.length - 1)); // give error because str is not a function and curly baractes can't useable 


=--=-=-=-=-=-=-=-=-=-===09900
// printing single character from the string

let str = "Javascript";
// for (let chara in str) {
//   console.log(str[chara]);
// }

// for(let char of str){
//   console.log(char);
// }


\\\\\\\\\\\\\\\

// strings are immutables

let str = "Javascript";
str[0] = "C";
console.log(str); // doesn't work


// console.log(str.toLocaleLowerCase()); // javascript
// console.log(str.toLocaleUpperCase()) // JAVASCRIPT
// console.log(str.toLowerCase()) // JAVASCRIPT
// console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str[1].toUpperCase());// A


let str = "Javascript";
console.log(str.indexOf("script")); // 4 index because s at 4 index
console.log(str.lastIndexOf("a")); // 3 index because last 'a' to 3 index
console.log(str.lastIndexOf("t")) // 9  index because last 't' to 9 index
if not found than it give -1

// it is case sensitive
let str = "Javascript";
// console.log(str.indexOf('s',3)); // 4
// console.log(str.indexOf('s',7)); // -1 because s at 4 postion and and search from 7 index postion
// console.log(str.indexOf("p",-1)); // 8

// console.log(str.lastIndexOf("a",5)); // 3


------------------
let str = "i am learing javascript";

// if(str.indexOf("am")){
//   console.log("found in string");
// }
// this wil may work , corrected code
// if (str.indexOf("AM") != -1) {
//   console.log("found in string");
// }else{
//   console.log("not found"); // this code execute 
// }


--------------------- includes, startWith ,endsWith --------------
-- includes('stringForFind',position) give boolean value if includes than it give true other wise false
-- position is optional

let str = "i am learing javascript";
// console.log(str.includes('am')); // true
// console.log(str.includes("am", 4)); // false because 'am' string already gone

// console.log(str.startsWith('am')); // false because string start with 'i';
// console.log(str.startsWith('am',2)); // tru because string start with 'am' but postion 2 and 'am' start at 2 index ;

// endsWith ;

// -- it is opposite of startWith
console.log(str.endsWith("pt")) // true because str variable end with "pt"
console.log(str.endsWith('java',2)); // false becasue str varibale end with 'pt'

------------------ breaking the string(slice)-----------
// String.slice(startingPosition,endingPosition)
// - starting index included but ending position not included :)
let str = "JavaScript";
// console.log(str.slice(4,10)); // it give Script

// expalin :- at 4th index S and last index 10 (which is is not included) so till second last means index means 9 th index string sliceing done 
// console.log(str.slice(-4,-10)); //""
// console.log(str.slice(-10,-4)); //JavaSc

---------------------------- String.substring() -----------

let str = "JavaScript";
// console.log(str.substring(4,10)); // it give Script 
// console.log(str.substring(10,4)); // it also give Script 
// because the given parameter ar invalid , and to maintain a valid range.
-- only postive value

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-

str.substr(start [, length])
Returns the part of the string from start, with the given length.

In contrast with the previous methods, this one allows us to specify the length instead of the ending position:

let str = "JavaScript";
// start with 4 index than go till 6
console.log(str.substr(4,6));

method          	    | selects…	                                  | negatives
slice(start, end)	    | from start to end (not including end)       | 	allows negatives
substring(start, end)	| between start and end (not including end)	  |  negative values mean 0
substr(start, length) |	from start get length characters	          | allows negative start

All of them can do the job. Formally, substr has a minor drawback: it is described not in the core JavaScript specification, but in Annex B, which covers browser-only features that exist mainly for historical reasons. So, non-browser environments may fail to support it. But in practice it works everywhere.

Of the other two variants, slice is a little bit more flexible, it allows negative arguments and shorter to write.

So, for practical use it’s enough to remember only slice

-------------
let str = "a";
console.log("A" > "a"); // 65 > 97 so false
// because A unicode -> 65 and a unicode is 97
// console.log(str.charCodeAt());
console.log("a".charCodeAt());
console.log("A".charCodeAt());

console.log("A".codePointAt(0)); // give 65
console.log("a".codePointAt(0)); // give 97
console.log("a".codePointAt(0).toString(16)); // give 61 ?

//Creates a character by its numeric code

console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(97)); // a

// print every character is supporetd by js
let str = "";

for (let i = 65; i <= 220; i++) {
  str += String.fromCharCode(i);
}

console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

*/
// -----------=============----------------------====--------------=======------------------===----------------

// NOTE 1. truthy and falsey vallue
// NOTE 2. Nullish coalescing operator '??'

/* ================== task =============================
// from object tasks

q.1 
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

ans;-
let user = {};
user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name

2. Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
ans:-

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);


3. Multiply numeric property values by 2
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// solution 1:-
function multiplyNumeric(obj) {
  for (let key in menu) {
    if (!isNaN(menu[key])) {
      obj[key] *= 2;
    }
  }
}

// solution 2:-
function multiplyNumeric(obj) {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      obj[key] *= 2;
    }
  }
}

---------------------------- object this ------------
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // What's the result?

// ye code undefined return karge kyaki , hamare pass koy bhi current contax nahi hai , 
// isliye ref:this , windoe.this banjayega , and user.ref.name - window.name ban jaye ga

2. --------------
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
ans:-
let calculator = {
  read() {
    this.a = Number(prompt("Enter number:"));
    this.b = Number(prompt("Enter number:"));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(2, 4);
console.log(calculator.sum());
console.log(calculator.mul());

3. ------------
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

// if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

ans:-


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

// if we need to make several calls in sequence, can do it like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
*/

/* ====== task 2 ====
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

   The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  // if (lowerStr.includes("viagra") || lowerStr.includes("XXX")) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // above is ans 1

  return lowerStr.includes("viagra") || lowerStr.includes("XXX");
}
// console.log("hello1");
let result1= checkSpam("buy ViAgRA now");
console.log(` ans for buy ViAgRA now ${result1}`);
let result2 = checkSpam("free xxxxx");
console.log(` ans for free xxxxx ${result2}`);
let result3 = checkSpam("innocent rabbit");
console.log(` ans for innocent rabbit ${result3}`);

-----

Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.



let styles = ["Jazz", "Blues"]; // 1
styles.push("Rock-n-Roll"); //2
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; //3
// console.log(styles);
styles.shift(0); //4

styles.unshift("Rap", "Reggae");
console.log(styles);

Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
  let num = [];
  while (true) {
    let input = Number(prompt("Enter the number:", 0));

    if (input === "" || input === null || isNaN(input)) {
      break;
    } else {
      num.push(input);
    }
  }

  let sum = 0;
  for (let number of num) {
    sum += number;
  }
  return sum;
}

let result = sumInput();
console.log(result);


*/
//

/* ========  task of array ============== 

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

let camelize = (str) => {
  return str.split("-").map()
};

2.
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

======================
// let filterRange = (arr, a, b) => {
//   return arr.filter((value) => {
//     return a <= value && b <= value;
//   });
// };

// let num = [5, 3, 8, 1];

// let filter = filterRange(num, 1, 4);
// // console.log(num);
// console.log(filter);

*/

/*  Iterables
Iterable:
An "iterable" is an object in JavaScript that can be looped over. It has a method called [Symbol.iterator]() that returns an "iterator."

Iterator:
An "iterator" is an object with a next() method. The next() method returns the next item in the sequence and whether the iteration is done.

let iterableObj = {
  data:[1,2,3,4,5,6],
  [Symbol.iterator](){
    let index = 0;
    return {
      next : ()=>{
        if(index < this.data.length){
            return  {done:false , value : this.data[index++]}
        }else{
          return {done : true}
        }
      }
    }
  }
}


for(let key of iterableObj){
  console.log(key);
}



let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

// Question:
// Create an iterable object called countdown that produces the numbers from 5 to 1. Use it in a for...of loop to print each number.

// Your Task:
// Write the JavaScript code to create the countdown iterable and use it in a loop to print the numbers.

let countdown = {
  max: 5,
  min: 1,
};

countdown[Symbol.iterator] = function () {
  return {
    current: this.max,
    last: this.min,

    next() {
      if (this.current >= this.last) {
        return { value: this.current--, done: false };
      } else {
        return { done: true };
      }
    },
  };
};

for (let key of countdown) {
  console.log(key);
}


Arrays and strings are most widely used built-in iterables.

// let str = "JavaScript";

let str = ["a","b"]
for(let char of str){
  console.log(char);
}

/// create  iteratoer explicitly

let str = "JavaScript";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}


Iterables are objects that implement the Symbol.iterator method, as described above.

Array-likes are objects that have indexes and length, so they look like arrays.

let obj = {
  name: "js",
  bod: 1995,
  age: 28,
};

console.log(obj.length); // undefined 

// example of an object that is array like 

// and don't even have push,pop

let arrLikeObj = {
  0: "Hello,",
  1: "World",
  length: 2,
};


// console.log(arrLikeObj.length); give 2

// for(let key of arrLikeObj){} // TypeError: arrLikeObj is not iterable error give

// solve this  problem and work object as array use Array.from

Array.from(obj[, mapFn, thisArg])
obj is neccecary but mapFn are optional
let arrLikeObj = {
  0: "Hello,",
  1: "World",
  length: 2,
};

let arr = Array.from(arrLikeObj); // now array
// console.log(arr);

arr.push("JavaScript");

console.log(arr);

let string = "JavaScript";

let strArr = Array.from(string); // now it is array

// console.log(strArr);
// console.log(strArr[1]);
// console.log(strArr[2]);
// console.log(strArr.length);

Objects that can be used in for..of are called iterable.

Technically, iterables must implement the method named Symbol.iterator.
The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
An iterator must have the method named next() that returns an object {done: Boolean, value: any}, here done:true denotes the end of the iteration process, otherwise the value is the next value.
The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
Built-in iterables like strings or arrays, also implement Symbol.iterator.
String iterator knows about surrogate pairs.
Objects that have indexed properties and length are called array-like. Such objects may also have other properties and methods, but lack the built-in methods of arrays.

If we look inside the specification – we’ll see that most built-in methods assume that they work with iterables or array-likes instead of “real” arrays, because that’s more abstract.

Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, and we can then use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.
*/

/* ======== map and set ==================


Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
 

let newMap = new Map();
newMap.set("name", "JavaScript");
newMap.set("age", 28);
newMap.set("dob", 1995);
newMap.set(1, "any randome value");

// console.log(newMap);
// console.log(newMap.get(1));
// console.log(newMap.get("dob"));
// console.log(newMap.get("use")); // use does'nt set so it give undefined
// console.log(newMap.has("name")); // true because it name key exists in map
// console.log(newMap.has("founder")); // false because founder key not exists in map
// console.log(newMap.size); // give 4
// console.log(newMap.size); // give 4
// newMap.delete(1); // key 1 and its value now delete

// newMap.clear(); // clear everything
 
// console.log(newMap);

// console.log(newMap.entries());

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));

Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

// chian the map

// map.set('1', 'str1')
  // .set(1, 'num1')
  // .set(true, 'bool1');

  // iteration over Map

let newMap = new Map();
newMap.set("name", "JavaScript");
newMap.set("age", 28);
newMap.set("dob", 1995);
newMap.set(1, "any randome value");

// for(let key of newMap.keys()){
//   console.log(key); // print only keys
// }

// for(let key of newMap.entries()){
//   console.log(key); // print whole map with keys and value
// }

// for(let ett of newMap){
//   console.log(ett);
// }

// for(let key of newMap.values()){
//   console.log(key); // print only values
// }

// lets iterate in good manner

// newMap.forEach((value, key, wholeMap) => {
//   console.log(`${key} : ${value} `);
// });
// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization.

// let map = new Map([
//   [1, "Hello"],
//   ["1", "hi"],
// ]);

// console.log(map);
// console.log(map.get(1));

// create map from an object
// 1. Object.entries()

// let obj = {
//   name: "JavaScript",
//   age: 28,
//   dob: 1995,
// };


// let mapFormAnObj = new Map(Object.entries(obj));

// console.log(mapFormAnObj);
// console.log(mapFormAnObj.get("name"));


// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them

let obj = Object.fromEntries([
  ["name", "JavaScript"],
  ["age", 28],

]);
console.log(obj);

// create obj from map

let jsMap = new Map([
  ["Name", "JavaScript"],
  ["Age", 28],
  ["BOD", 1995],
]);

let jsObj = Object.fromEntries(jsMap);
// console.log(jsObj);

----------------------------map end here -----------------

----------------------------set start here -----------------
A Set is a special type collection – “set of values” (without keys), where each value may occur only once

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.




let set = new Set();

let harry = { name: "Harry" };

let rahul = { name: "Rahul" };
let ravi = { name: "Ravi" };

set.add(harry);
set.add(rahul);
set.add(ravi);
set.add(harry); // harry is already in set bu try to again add in set
set.add(rahul); // same as harry rahul alredy in set but again try to add in set

console.log(set); // only display unique values

console.log(set.size); // only count unique set value and than it give 3 size


// iteration over the set

let newSet = new Set(["JavaScript", "C", "C++", "Java"]);

// for(let value of newSet){
//   console.log(value); // give individual value
// }

// console.log(newSet); // give whole set

newSet.forEach((value1,value2,wholeSet)=>{
  console.log(`${value1} : ${value2} `);
})


Map – is a collection of keyed values.

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
map.set(key, value) – stores the value by the key, returns the map itself.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
map.clear() – removes everything from the map.
map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
*/

/* ==== task of map and set ==========



Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
// code
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
ans:-
// function unique(arr) {
//   return Array.from(new Set(arr))
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(values));


*/

/* ======== WeakMap  and WeekSet
--- pandding 
[1] link - https://javascript.info/weakmap-weakset 
[2] link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

from chatGPT:-
`WeakMap` and `WeakSet` are specialized collections in JavaScript, and while they might not be used as frequently as other data structures, they do serve specific purposes and can be important in certain scenarios. Let's discuss each one:

1. **WeakMap:**
   - **Use Case:** WeakMaps are often used when you want to associate data with objects in a way that doesn't prevent those objects from being garbage collected when they are no longer in use.
   - **Key Characteristics:**
     - Keys in a WeakMap must be objects.
     - Values can be any data type.
     - The entries in a WeakMap do not prevent the referenced objects from being garbage collected.
     - WeakMaps are not enumerable, meaning you cannot iterate over their entries.
   - **Common Use:** Storing private data associated with objects, where the private data should not prevent the objects from being garbage collected.

   ```javascript
   let weakMap = new WeakMap();

   let obj1 = {};
   let obj2 = {};

   weakMap.set(obj1, "Private Data for obj1");
   weakMap.set(obj2, "Private Data for obj2");
   ```

2. **WeakSet:**
   - **Use Case:** WeakSets are used to store a collection of unique objects. Like WeakMaps, they allow objects to be garbage collected if there are no other references to them.
   - **Key Characteristics:**
     - WeakSets can only contain objects (primitive values are not allowed).
     - The entries in a WeakSet do not prevent the referenced objects from being garbage collected.
     - WeakSets do not have methods for iterating over their entries.
   - **Common Use:** Managing a collection of objects where the membership of the objects in the collection should not prevent them from being garbage collected.

   ```javascript
   let weakSet = new WeakSet();

   let obj1 = {};
   let obj2 = {};

   weakSet.add(obj1);
   weakSet.add(obj2);
   ```

**Important Considerations:**
- While `WeakMap` and `WeakSet` have specific use cases, they might not be needed in every application. In many scenarios, regular `Map` and `Set` objects are sufficient.
- The use of weak collections is often tied to scenarios where you need to manage memory more explicitly, such as in certain types of memory-sensitive applications or frameworks.

In summary, whether `WeakMap` and `WeakSet` are important depends on the specific requirements and constraints of your application. They provide solutions to certain challenges related to memory management and object references, but their usage may not be necessary in every scenario.
*/

/* key , values, entries
// let obj = {
//   Name: "JavaScript",
//   Age: 28,
//   Dob: 1995,
// };

// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// // loop on values 

// for(let value of Object.values(obj)){
//   console.log(value);
// }



There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.

For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;

  for (let values of Object.values(salaries)) {
    if (!isNaN(values) || values == "") {
      sum += values;
    }
  }
  return sum;
}

console.log(sumSalaries(salaries));

Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

let user = {
  name: 'John',
  age: 30
};

function count(obj){
  return Object.keys(obj).length  
}


*/

/*  Destructuring 

// =--=-=-=-=-=-=-=-=-=-=-=-=-- arya destructuring ======================= 

// let arr = ["David", "Warner"];

// let [fname, lname] = arr;

// console.log(fname);
// console.log(lname);


// an other exmaple 

// let [fname,lname] = "David Warner".split(" ");
// console.log(fname);
// console.log(lname);

// let [fname, , age] = ["JavaScript", 1995, 28]; // in this case only name and age destructur and Bod jus ignore

// console.log(fname);
// console.log(age);

// let user = {};
// 
// [user.name,user.surname]= "harry bhai ".split(" ");

// console.log(user.name);
// console.log(user.surname);


let obj = {
  name: "JavaScript",
  age: 28,
  dob: 1995,
};


for(let [key,value] of Object.entries(obj)){
  console.log(`${key} : ${value}`);
}


// with map

let jsMap = new Map([
  ["name", "JavaScript"],
  ["age", 28],
]);
// console.log(jsMap);

for(let [key,val] of jsMap){
  console.log(`${key} : ${val}`);
}

//  swap variable using Destructuring

let num = 45;
let num2 = 55;

[num, num2] = [num2, num];

console.log(` first number ${num} and second number ${num2}`);

------------------------- ... rest oprator --------
let [greet,name,...rest] = ["Hello","JavaScript","Js is good"];

console.log(rest);
console.log(rest.length);

******************** and more  =========

// default value
// let [fname,laname] = [];

// console.log(fname);
// console.log(laname); // both  return undefined

let [fname = "David", laname = "Mark"] = ["harry"];
// let [fname = "David", laname = "Mark"] = [];
// this above are the default values if we provide than it accept it other wise not
console.log(fname);
console.log(laname);

=-=-=-=-==-=-=-=-=-=-= object destructring =-=-=-=-=-=-=-==-=-=-=

// let obj = {
//   name: "JavaScript",
//   age: 28,
//   birth: 1995,
// };

// let { name, age, birth } = obj;

// console.log(` name is ${name} , age :${age} and birthday is ${birth} `);

// order does't matter

let obj = {
  heigth: 123,
  width: 123,
  name: "ha ha ",
};

let { name, heigth, width } = obj;

console.log(heigth);


let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;
// writing width is too long lets short it

console.log(w);

// defualt values

let obj = {
  name: "JavaScript",
};

let { age = 28, dob = 1995 } = obj;
console.log(age);

let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;
// its too work

let obj = {
  name: "JavaScript",
  age: 28,
  dob: 1995,
};

let { name, ...rest } = obj;
console.log(`name is ${name} age is ${rest.age} and birth is ${rest.dob}`);

// nested destructuring
let order = {
  items: ["cake", "pizza"],
  cock: true,
  payment: {
    type: "upi",
    place: "shop",
  },
};

let {
  items: [item1, item2],
  payment: { type, place },
  buyerName = "JavaScript",
} = order;

console.log(
  ` Buyer name is ${buyerName} and he buy ${item1} and ${item2} from ${place} and pay via ${type}`
);


Destructuring assignment allows for instantly mapping an object or array onto many variables.

The full object syntax:

let {prop : varName = default, ...rest} = object
This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

Object properties that have no mapping are copied to the rest object.

The full array syntax:

let [item1 = default, item2, ...rest] = array
The first item goes to item1; the second goes into item2, all the rest makes the array rest.

It’s possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one.



*/

/* *********************  Date and Time ********


let today = new Date(); // display current date and time
console.log(today);


let print  1-jan-1970
let oldestDate = new Date(0);

console.log(oldestDate);

let Jan02_1970 = new Date(24 * 3600 * 1000);
let Dec31_1969 = new Date(-24 * 3600 * 1000);

new Date(year, month, date, hours, minutes, seconds, ms)
Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
The month count starts with 0 (Jan), up to 11 (Dec).
The date parameter is actually the day of month, if absent then 1 is assumed.
If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

// get date , month , time and etc.

let time = new Date();

// console.log(time.getDate()); // return today date 
// console.log(time.getDay()); // return day of a week
// console.log(time.getFullYear()); // return year
// console.log(time.getHours());  // return hour time in 24 - hour format
// console.log(time.getMonth()); // return month index jan - 0 and dec-11
// console.log(time.getTime()); // return time in milisecond from 1st jan 1970
// console.log(time.getTimezoneOffset()); // return time b/w utc and local computer in minuets
 
// and many more

// set the date

let time = new Date();

console.log(time.setDate(2));


same way we can set The following methods allow to set date/time components:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)

let time = new Date(2025,1,29).toDateString();

// in 2025 a feb month have only 28 day so it auto set next month and date

console.log(time);

Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
Months are counted from zero (yes, January is a zero month).
Days of week in getDay() are also counted from zero (that’s Sunday).
Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
Use Date.now() to get the current timestamp fast.
Note that unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.


tasks:-


1. Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.:-

let time = new Date(2012, 1, 20, 3, 12);
console.log(time);

European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2

let date = new Date(2012, 0, 3);
function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) {
    day == 7;
  }
  return day;
}

console.log(getLocalDay(date));
*/


