const reactEle = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  childern: "Click Here to visit google.com",
};

function renderInpage(element, container) {
  //   const domEle = document.createElement(element.type);
  //   domEle.innerHTML = element.childern;
  //   domEle.setAttribute("href", element.props.href);
  //   domEle.setAttribute("target", element.props.target);
  //   // attribute creating problem
  //   container.appendChild(domEle);
  //   // oh my god
  //   // not a good code

  // -----

  const domEle = document.createElement(element.type);
  domEle.innerHTML = element.childern;

  for (const prop in element.props) {
    if (prop == "childern") {
      continue;
    }
    domEle.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domEle);
}

const root = document.getElementById("root");

renderInpage(reactEle, root);
