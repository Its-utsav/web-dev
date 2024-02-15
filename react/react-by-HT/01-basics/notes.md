# react

``` js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const ReactElem = {
//   type: "a",
//   props: {
//     href: "<https://www.google.com>",
//     target: "_blank",
//   },
//   children: "Click me to visit google com",
// };

// //  this is not valid in react , because may be insedt of writing type i write LOL , this is not valid so react hase some rules

//  do same thing in react

// below code same to React.createElement
const anotherEle = (
  <a href="https://www.google.com" target="_blank">
    click here to visit
  </a>
);

// both code are same
const ReactEle = React.createElement(
  "a", //type of element
  {
    // property (props) attributes
    href: "<https://www.google.com>",
    target: "_blank",
  },
  "click here to visite google" // childrens (tes=xt content)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // anotherEle
  ReactEle
);

```
