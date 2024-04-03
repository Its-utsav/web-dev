# React

## TOC

1. [what is react](#what-is-react)
2. [what is components](#what-is-components)

## what is react

- react is a JavaScript library for rendering small ui(user interface) like button,text ,images even render full complex page
- react combine them into reuseable,nestable components.

## what is components

- isolated piece of UI call as components . and react components is a javaScript function along with markup(jsx / tsx)
- a components can be take input known as **props** , and may be they maintain own internal state using **hook** (hook and props learn later)

_eg of component_

```jsx
export default function HelloWorld() {
  return <h1>Hello World From REACT !!!</h1>;
}
```

_NOTE_ - react function name must start with capital letter but why ? ans => react treat *lower case* letters as **HTML** tags and *Upper case* letters as **custom react components** 

- now HelloWorld Function can be used many time in web page just writing with `</HelloWorld>` or `<HelloWorld> </HelloWorld>`

-----------
_components defination can not be nested_
**don't try below code it may raise error / bugs**
```jsx
export default function App(){
  // parent componenet
  // dont do this
  function Child(){
  }
}
```
**try this**

```jsx
export default function App(){
 // comopnents defination
}
function Child(){
//  comopnents defination
}
```
- the magic of components lies on reusability for this we can sperate the componenets in different file and use with `export` and `import`

- two way to export 
  1. default export
  -  only Test component will be used 
  ```jsx
  export default function Test(){
    // jsx
  }
  ``` 
  2. named export
  - muliple export possiable multiple use of component also possiable 
  ```jsx
  export function Lol(){
    //jsx
  }

  export const Heh = ()=>{
    // jsx
  }

  ```
  3. Mixed export (only react)
  - one defaule export and multiple named export
  ```jsx
  export default function One(){
    // jsx
  }

  export const Two = ()=>{
    //jsx
  }
  ```
