function renderElement(reactEle, container) {
  /* // v1
  const domEle = document.createElement(reactEle.type);
  domEle.innerHTML = reactEle.children;
  domEle.setAttribute('href',reactEle.props.href);
  domEle.setAttribute('target',reactEle.props.target);
  container.appendChild(domEle)
  */

  const domEle = document.createElement(reactEle.type);
  domEle.innerHTML = reactEle.children;

  for (const prop in reactEle.props) {
    if (prop === "children") {
      continue;
    }
    domEle.setAttribute(prop, reactEle.props[prop]);
  }
  container.appendChild(domEle);
}

const reactElem = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google com",
};

const rootEle = document.getElementById("root");

renderElement(reactElem, rootEle);
