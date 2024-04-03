# React

## TOC

1. [what is react](#what-is-react)
2. [what is components](#what-is-components)

## what is react

- react is a JavaScript library for rendering small ui(user interface) like button,text ,images even render full complex page
- react combine them into reuseable,nestable components.

## what is components

- isolated piece of UI call as componenys . and react components is a javaScript function along with markup(jsx / tsx)
- a components can be take input known as **props** , and may be they maintain own internal state using **hook** (hook and props learn later)

_eg of component_

```jsx
export default function HelloWorld() {
  return <h1>Hello World From REACT !!!</h1>;
}
```

_NOTE_ - react function name must start with capital letter but why ? ans => react treat *lower case* letters as **HTML** tags and *Upper case* letters as **custom react components** 

- now HelloWorld Function can be used many time in web page just writing with `</HelloWorld>` or `<HelloWorld> </HelloWorld>`
