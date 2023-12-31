// f26ad90b3be52cf82fec823e701c76ce

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f26ad90b3be52cf82fec823e701c76ce

// https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f26ad90b3be52cf82fec823e701c76ce

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=f26ad90b3be52cf82fec823e701c76ce

const apiKey = "f26ad90b3be52cf82fec823e701c76ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".searchTxt");
const searchBtn = document.querySelector("button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  let data = await response.json();
  // console.log(data);

  const tempInKel = data.main.temp;
  // console.log(typeof tempInKel);

  function kelToCel(temp) {
    return temp-273.15;
  }

  const tempInCel = kelToCel(tempInKel);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = tempInCel.toFixed(2);
  document.querySelector(".wind").innerHTML = data.wind.speed;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
}

searchBtn.addEventListener("click", (e) => {
  const input = searchBox.value;
  const byDefault = input === "" ? "Delhi " : input;
  checkWeather(byDefault);
  console.log(searchBox.value);
});

checkWeather("Delhi");
