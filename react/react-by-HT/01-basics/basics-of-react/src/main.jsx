import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const ReactElem = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google com",
// };

// //  this is not valid in react , because may be insedt of writing type i write LOL , this is not valid so react hase some rules

//  do same thing in react

const name = "Utsav";
// name is evaluate expression-> that means we are not write full JavaScript . we werite only final output of that js code not write full js synatx in js object we write if statement ? of couse not

// below code same to React.createElement
const anotherEle = (
  <a href="https://www.google.com" target="_blank">
    click here to visit {name}
  </a>
);

// both code are same

const ReactEle = React.createElement(
  "a", //type of element
  {
    // property (props) attributes
    href: "https://www.google.com",
    target: "_blank",
  },
  "click here to visite google ", // childrens (text content)
  name
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // anotherEle
  ReactEle
);
