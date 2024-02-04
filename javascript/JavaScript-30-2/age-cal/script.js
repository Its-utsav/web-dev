const input = document.querySelector("#date");
const resultbtn = document.querySelector(".btn");
const displayResult = document.querySelector(".result");
input.max = new Date().toISOString().split("t")[0];

// console.log(input);

function calculateAge() {
  let dob = new Date(input.value);
  //   console.log(dob);
  let dobYear = dob.getFullYear();
  let dobMonth = dob.getMonth() + 1;
  let dobDate = dob.getDate();

  // console.log(dobMonth);

  let currentDate = new Date();
  let cyear = currentDate.getFullYear();
  let cmonth = currentDate.getMonth() + 1;
  let cDate = currentDate.getDate();

  let diffYear = cyear - dobYear;
  // let diffYear = cyear - dobYear - 1; // haha-1
  let diffMonth = Math.abs(cmonth - dobMonth);
  let diffDate = Math.abs(cDate - dobDate);

  if (cmonth < dobMonth || (cmonth === dobMonth && cDate < dobDate)) {
    diffYear--;
    // haha-2
  }

  if (dob >= currentDate) {
    alert(`please entre proper birthdate `);
  } else {
    displayResult.innerHTML = `You are ${diffYear} Year, ${diffMonth} Month , ${diffDate} Days old`;
  }
}
resultbtn.addEventListener("click", calculateAge);
