const people = [
  { name: "Sam", year: 1998 },
  { name: "Gpt", year: 1999 },
  { name: "Bard", year: 1969 },
  { name: "Bing", year: 1941 },
  { name: "AI", year: 2100 },
];

const comments = [
  { text: "Very Good", id: 134 },
  { text: "Not Good", id: 1124 },
  { text: "OMG", id: 2234 },
  { text: "Good", id: 1234 },
];

// Q .1 is atleast one person 19 ?

// const adult = people.some((person) => {
//   const currentYear = (new Date()).getFullYear();
// //   currentYear.getFullYear;
//   if (currentYear - person.year >= 19) {
//     return true;
//   }
// });

// console.log(adult);

// Q .2 is every one is 19

// const everyAdult = people.every((p) => {
//   const cyear = new Date().getFullYear();

//   if (cyear - p.year >= 19) {
//     return true;
//   }
// return false because not every one in 19 year or mire than 19 year old
// });

// console.log(everyAdult);

// Q. 3 find comment id with 1234

// const findID = comments.find((c)=>{
//     if(c.id === 1234){
//         return true
//     }
// });

// console.log(findID);

// Q . 4 find comment id 1234 with its index and delete it

// const findId = comments.findIndex((c) => {
//   c.id === 1234;
// });

// if(findId!==1){
//     comments.splice(findId,1);
// }

// console.log(comments);
