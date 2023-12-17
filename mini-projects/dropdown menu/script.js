const dropdown = document.querySelector("#dropdown");
dropdown.addEventListener("click", () => {
  const open = document.querySelector(".toggle");
  open.classList.toggle("active");
});
