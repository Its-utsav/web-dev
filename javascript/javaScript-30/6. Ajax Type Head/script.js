document.addEventListener("DOMContentLoaded", function () {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const city = [];

  // Fetch data using async/await for cleaner syntax
  async function fetchData() {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      city.push(...data);
      console.log(city);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Use more descriptive variable names
  function findMatches(userInput, cities) {
    const regex = new RegExp(userInput, "gi");
    return cities.filter(
      (place) => place.city.match(regex) || place.state.match(regex)
    );
  }

  function displayMatches() {
    const userInput = this.value;
    const matchArr = findMatches(userInput, city);

    // Use map and join directly on the array
    const html = matchArr
      .map(
        (place) =>
          `<li><span class="name">${place.city}, ${place.state}</span></li>`
      )
      .join("");

    // Use innerHTML instead of creating a new element
    suggestion.innerHTML = html;

    // Show/hide suggestions based on matches
    suggestion.style.display = userInput && matchArr.length ? "block" : "none";
  }

  const input = document.querySelector("#city");
  const suggestion = document.querySelector(".suggestion");

  input.addEventListener("input", displayMatches);

  // Fetch data on page load
  fetchData();
});
