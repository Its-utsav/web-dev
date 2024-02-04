const buttons = document.querySelectorAll("#btn");

buttons.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    document.body.style.backgroundColor = 'red';
  });
});


// buttons.addEventListener('click',(e)=>{
//     document.body.style.backgroundColor = 'red';

//     console.log(e.value);
// })