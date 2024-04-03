const allImgs = document.querySelectorAll("#logo");

allImgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.classList.add("hover:scale-95", "hover:shadow-xl");
  });
  img.addEventListener("mouseleave", () => {
    if (img.classList.contains("hover:scale-95", "hover:shadow-xl") === true) {
      img.classList.remove("hover:scale-95", "hover:shadow-xl");
    }
  });
});

const arrowIcon = document.querySelector(".icon");
const lang = document.querySelector("#language-box");
const lang_list = document.querySelector(".lang-list");

console.log(lang_list);
function openLangBox() {
  lang.classList.remove("hidden");
  lang.classList.add("block");
  arrowIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
}

arrowIcon.addEventListener("click", () => {
  openLangBox();
});

lang_list.addEventListener("mouseover", () => {
  openLangBox();
});

arrowIcon.addEventListener("mouseleave", () => {
  lang.classList.add("hidden");
  arrowIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
});
