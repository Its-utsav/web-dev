const userBornDate = document.querySelector("#select-age");

const ageCalBtn = document.querySelector(".btn");

ageCalBtn.addEventListener("click", () => {
  const ageDisplay = document.querySelector(".age-cal");

  // console.log(userBornDate.value);
  const montnsInOneYear = 12;

  // this create new date from user input
  let UserDate = new Date(userBornDate.value);

  // if user don't give proper dob than it give invlaid
  if (isNaN(UserDate.getTime())) {
    ageDisplay.innerHTML = `InValid Date`;
    return;
  }

  // from user date bellow variables gets user born year, monthindex,date
  let userYear = UserDate.getFullYear();
  let userMonth = UserDate.getMonth();
  let userDate = UserDate.getDate();

  // console.log(UserDate);
  // console.log(UserDate.getFullYear());
  // console.log(UserDate.getMonth());
  // console.log(UserDate.getDate());
  // console.log(UserDate);

  // todays date
  let todayDate = new Date();
  let cYear = todayDate.getFullYear();
  let cMonth = todayDate.getMonth();
  let cDate = todayDate.getDate();

  // console.log(cMonth);

  // this for user-next birthday so we can easily found how many year user old. in future i can create a one feuture that display in how many day (with month) left for upcomming birthday.
  let nextBirthDay = new Date(cYear, userMonth, userDate);
  let nextBirthDayMonth = nextBirthDay.getMonth();
  let nextBirthDaydate = nextBirthDay.getDate();

  // console.log(nextBirthDay);

  let yearDiff = cYear - userYear - 1;
  let monthDiff = montnsInOneYear - Math.abs(cMonth - userMonth);
  let dateDiff = Math.abs(cDate - userDate);

  ageDisplay.innerHTML = `You are ${yearDiff} Year , ${monthDiff} Month and ${dateDiff} Day old .`;
});
