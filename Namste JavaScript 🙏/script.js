// function x() {
//   let a = 10;
//   function y() {
//     console.log(a); // a references not a 10 value
//   }
//   a = 100;
//   return y;
// }
// let z = x();

// z();

// closure and settimeout

// function x() {
//   let a = 10;
//   setTimeout(function () {
//     console.log(a);
//   }, 3000);
//   console.log("Namaste JavaScript");
// }

// function x() {
//   let a = 0;
//   function printAndAdd() {
//     if (a < 5) {
//       console.log(a);
//       a++;
//     }
//   }
//   setInterval(printAndAdd, 1000);
// }

// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello, World!!!");
// }

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello, World!!!");
// }

// x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
      return 
    }
    close(i); // when this function call it create a new copy of i
  }
  console.log("Hello, World !!");
}

x();
