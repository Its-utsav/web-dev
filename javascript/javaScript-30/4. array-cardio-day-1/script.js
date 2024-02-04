const peopleNames = [
  "John,Smith",
  "Alice,Johnson",
  "Robert,Brown",
  "Emily,Davis",
  "Michael,Wilson",
  "Sophia,Miller",
  "Daniel,Lee",
  "Olivia,Anderson",
  "William,Taylor",
  "Emma,White",
  "Matthew,Turner",
  "Ava,Harris",
  "Christopher,Martin",
  "Grace,Jackson",
  "Joseph,Clark",
  "Chloe,Baker",
  "David,Moore",
  "Ella,Hall",
  "Andrew,Harris",
  "Mia,Nelson",
  "James,Johnson",
  "Isabella,Davis",
  "Benjamin,Anderson",
  "Sophia,Robinson",
  "Daniel,Wilson",
  "Lily,Taylor",
  "Alexander,Turner",
  "Ava,Wright",
  "Michael,Moore",
  "Grace,Parker",
  "William,White",
  "Emily,Martin",
  "Oliver,Turner",
  "Charlotte,Nelson",
  "Christopher,Anderson",
  "Sophia,Wright",
  "Ethan,Baker",
  "Amelia,Clark",
  "Samuel,Miller",
  "Abigail,Taylor",
  "Daniel,Lewis",
  "Grace,Hall",
  "Elijah,Taylor",
  "Hannah,Wilson",
  "Andrew,Brown",
  "Mia,Smith",
  "Carter,Robinson",
  "Ella,Nelson",
  "Jack,White",
  "Sophia,Parker",
];

const inventors = [
  {
    firstName: "Thomas",
    lastName: "Edison",
    invention: "Light Bulb",
    birthYear: 1847,
    deathYear: 1931,
  },
  {
    firstName: "Nikola",
    lastName: "Tesla",
    invention: "Alternating Current",
    birthYear: 1856,
    deathYear: 1943,
  },
  {
    firstName: "Marie",
    lastName: "Curie",
    invention: "Radioactivity",
    birthYear: 1867,
    deathYear: 1934,
  },
  {
    firstName: "Alexander",
    lastName: "Graham Bell",
    invention: "Telephone",
    birthYear: 1847,
    deathYear: 1922,
  },
  {
    firstName: "Leonardo",
    lastName: "da Vinci",
    invention: "Various Inventions",
    birthYear: 1452,
    deathYear: 1519,
  },
  {
    firstName: "Albert",
    lastName: "Einstein",
    invention: "Theory of Relativity",
    birthYear: 1879,
    deathYear: 1955,
  },
  {
    firstName: "Ada",
    lastName: "Lovelace",
    invention: "First Computer Programmer",
    birthYear: 1815,
    deathYear: 1852,
  },
  {
    firstName: "Galileo",
    lastName: "Galilei",
    invention: "Telescope",
    birthYear: 1564,
    deathYear: 1642,
  },
  {
    firstName: "Grace",
    lastName: "Hopper",
    invention: "COBOL Programming Language",
    birthYear: 1906,
    deathYear: 1992,
  },
  {
    firstName: "James",
    lastName: "Watt",
    invention: "Steam Engine",
    birthYear: 1736,
    deathYear: 1819,
  },
];

// q.1 filter the list of invetors for those who are born in the 1500
// Array.prototype.filter()

// const bornYear = inventors.filter((value, index, Array) => {
//   if (value.birthYear >= 1500 && value.birthYear < 1600) {
//     return true;
//   }else{
//     return false;
//   }
// });

// const bornYear = inventors.filter(
//   (value) => value.birthYear >= 1500 && value.birthYear < 1600
// );

// console.table(bornYear);

// q .2 give the array of first and last name of inventers
// Array.prototype.map()

// let fNameLname = inventors.map((values)=>{
//     return `First Name: ${values.firstName} | Last Name: ${values.lastName}.`;
// })

// console.log(fNameLname);

// q.3 sort inventors by birthDate ,  oldest to Youngest
// Array.prototype.sort()

// let oldestToYoungest = inventors.sort((a, b) => {
//   // return a.birthYear - b.birthYear; // more effictive
//   if (a.birthYear > b.birthYear) {
//     return 1;
//   } else return -1;
// });

// console.table(oldestToYoungest);

// q.4 how many year inventors  lives;

// Array.prototype.reduce()

// const totalLiveYear = inventors.reduce((year, values, index, arr) => {
//   return year += (values.deathYear - values.birthYear);
//   // console.log(typeof values.birthYear);
// },0);

// console.table(totalLiveYear);

// let totalLiveYear = 0;

// for (let i = 0; i < inventors.length; i++) {
//   totalLiveYear += inventors[i].birthYear;
// }

// console.log(totalLiveYear);

// // q.5 sort the inventors by lived
// // Array.prototype.sort()

// const live = inventors.sort((a, b) => {
//   const lastIn = a.deathYear - a.birthYear;
//   const nextIn = b.deathYear - b.birthYear;
//   return lastIn - nextIn;
// });

// console.table(live);

// q 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

// const url = "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris";

// const de =links.map((val)=>{
//     return val.textContent()
// }).filter((stename )=>{
//     return stename.includes('de');
// })

// 7. sot Exercise

// Sort the people alphabetically by last name

// const alpha = peopleNames.sort((lastone,firstone) => {
//   const [last,first] = lastone.split(",");
//   console.log(last,first);
// });

// ... //learn more

// const data = ["car", "bike", "truck", "walk", "bike", "plan", "bike", "car"];

// const transport = data.reduce((count, value) => {
//   if (!count[value]) {
//     count[value] = 0;
//   }
//   count[value]++;

//   return count;
// }, {});

// console.log(transport);
