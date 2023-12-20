document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input-field");
  const output = document.querySelector(".output");
  const btnContainer = document.querySelector(".btns");

  btnContainer.addEventListener("click", (e) => {
    const btnTxt = e.target.innerText.trim();
    const inputValue = input.value;
    console.log(inputValue);
    console.log(btnTxt);
    switch (btnTxt) {
      case "ABC":
        output.innerText = inputValue.toUpperCase();
        break;
      case "abc":
        output.innerText = inputValue.toLowerCase();
        break;
      case "Abc":
        output.innerText = inputValue.replace(/\b\w/g, (char) =>
          char.toUpperCase()
        );
        break;
      case "B":
        output.innerHTML = `<b>${inputValue}</b>`;
        break;
      case "/":
        output.innerHTML = `<i>${inputValue}</i>`;
        break;
      case "underline":
        output.innerHTML = `<u>${inputValue}</u>`;
        break;
      default:
        break;
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.querySelector("#input-field");
//     const output = document.querySelector(".output");
//     const buttons = document.querySelectorAll(".btn");

//     buttons.forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const btnTxt = e.target.innerText.trim();
//         const inputValue = input.value;
//         console.log(inputValue);

//         switch (btnTxt) {
//           case "ABC":
//             output.innerText = inputValue.toUpperCase();
//             break;
//           case "abc":
//             output.innerText = inputValue.toLowerCase();
//             break;
//           case "Abc":
//             output.innerText = inputValue.replace(/\b\w/g, (char) =>
//               char.toUpperCase()
//             );
//             break;
//           case "B":
//             output.innerHTML = `<b>${inputValue}</b>`;
//             break;
//           case "/":
//             output.innerHTML = `<i>${inputValue}</i>`;
//             break;
//           case "underline":
//             output.innerHTML = `<u>${inputValue}</u>`;
//             break;
//           default:
//             break;
//         }
//       });
//     });
//   });
