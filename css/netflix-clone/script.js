const allBox = document.querySelectorAll(".que-box");

allBox.forEach((box) => {
  const ans =  box.nextElementSibling;
  const icon = box.querySelector(".icon");
  // const openIcon = box.querySelector(".que-icon");

  let flag = false;
  box.addEventListener("click", () => {
    if (!flag) {
      display();
    } else {
      hide();
    }
  });

  function display() {
    console.log("See");
    flag = true;
    ans.style.display = "block";
    icon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  }
  function hide() {
    console.log("nono");
    ans.style.display = "none";
    icon.innerHTML = `<i class="fa-solid fa-plus que-icon"></i>`
    flag = false;
  }
});
