var x = 1; // IN GEC memoery alloacate and set value to the undeinfed for x variable 
// for both function copy (kind of) to in GEC 
// x = 1;
a(); // function invoke // hoisting
b(); // function invoke // hoisting
console.log(x); // x = 1 print
// CALL STACK

// GEC CREATED AT BOTTOM 
// 1. function a invoke THAN FUNCTION'S  LOCAL EXECEUTION CONTEXT and DESTORYED AT function complition
// 2. function a invoke THAN FUNCTION'S  LOCAL EXECEUTION CONTEXT and DESTORYED AT function complition
// GEC destory 
// CAll stack compelete 


function a() { // LOCAL EXECEUTION CONTEXT create and memory alloacte , set variable value `undefined`
  var x = 10; // var x = undefined // here undefiend repalce with 10  
  console.log(x); // x value that 10 created
} // LOCAL EXECEUTION CONTEXT destory 

function b() { // LOCAL EXECEUTION CONTEXT create and memory alloacte , set variable value `undefined`
  var x = 100; // var x = undefined // here undefiend repalce with 100
  console.log(x);  // x value that 10 created
} // LOCAL EXECEUTION CONTEXT destory 
