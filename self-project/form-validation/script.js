const nameInput = document.querySelector("#name");
const IsNameValid = document.querySelector(".name-check");

const ageInput = document.querySelector("#age");
const IsageValid = document.querySelector(".age-check");

const emailInput = document.querySelector("#email");
const IsemailValid = document.querySelector(".email-check");

const phoneInput = document.querySelector("#phoneno");
const IsphoneValid = document.querySelector(".phoneno-check");


const submit = document.querySelector(".sub-btn");

let detils = [];

function nameCheck() {
  console.log("i am checking", nameInput.value);
  if (
    nameInput.value != "" &&
    nameInput.value.match(/[a-z] || [A-Z] && ![0-9]/g)
  ) {
    IsNameValid.innerHTML = `<i class="fa-solid fa-circle-check green-icon"></i>`;
    return true;
  } else {
    IsNameValid.innerHTML = `<i class="fa-solid fa-circle-xmark red-icon" ></i>`;
    return false;
  }
}

nameInput.addEventListener("input", nameCheck);

function ageCheck() {
  const ageValue = ageInput.value;
  const ageNumber = parseInt(ageValue);
  if (ageNumber >= 18 && ageNumber <= 100) {
    IsageValid.innerHTML = `<i class="fa-solid fa-circle-check green-icon"></i>`;
    // console.log(ageNumber);
    return true;
  } else {
    IsageValid.innerHTML = `<i class="fa-solid fa-circle-xmark red-icon" ></i>  age must be 18+`;
    return false;
  }
}

ageInput.addEventListener("input", ageCheck);

function emailCheck() {
  if (emailInput.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}/)) {
    IsemailValid.innerHTML = `<i class="fa-solid fa-circle-check green-icon"></i>`;
    return true;
  } else {
    IsemailValid.innerHTML = `<i class="fa-solid fa-circle-xmark red-icon" ></i>`;
    return false;
  }
}

emailInput.addEventListener("input", emailCheck);

function phoneCheck() {
  let phoneNum = parseInt(phoneInput.value);
  console.log(phoneNum);
  console.log(phoneInput.value.length);

  if (phoneInput.value.length == 10) {
    IsphoneValid.innerHTML = `<i class="fa-solid fa-circle-check green-icon"></i>`;
    return true;
  } else {
    IsphoneValid.innerHTML = `<i class="fa-solid fa-circle-xmark red-icon" ></i>`;
    return false;
  }
}

phoneInput.addEventListener("input", phoneCheck);


submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameCheck && ageCheck && emailCheck && phoneCheck) {
    detils.push(nameInput.value);
    detils.push(emailInput.value);
    detils.push(phoneInput.value);
    detils.push(ageInput.value);
    save();
  }
  console.log("hmm");
});

function save() {
  localStorage.setItem("setdetails", detils);
}
