function x() {
  let a = 10;
  function y() {
    console.log(a); // a references not a 10 value
  }
  a = 100;
  return y;
}
let z = x();

z();
