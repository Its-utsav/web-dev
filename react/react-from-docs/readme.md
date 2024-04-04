# React

## TOC

1. [what is react](#what-is-react)
2. [what is components](#what-is-components)
3. [JSX](#jsx)
4. [props](#props)
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

_NOTE_ - react function name must start with capital letter but why ? ans => react treat _lower case_ letters as **HTML** tags and _Upper case_ letters as **custom react components**

- now HelloWorld Function can be used many time in web page just writing with `</HelloWorld>` or `<HelloWorld> </HelloWorld>`

---

_components defination can not be nested_
**don't try below code it may raise error / bugs**

```jsx
export default function App() {
  // parent componenet
  // dont do this
  function Child() {}
}
```

**try this**

```jsx
export default function App() {
  // comopnents defination
}
function Child() {
  //  comopnents defination
}
```

- the magic of components lies on reusability for this we can sperate the componenets in different file and use with `export` and `import`

- two way to export

  1. default export

  - only Test component will be used

  ```jsx
  export default function Test() {
    // jsx
  }
  ```

  2. named export

  - muliple export possiable multiple use of component also possiable

  ```jsx
  export function Lol() {
    //jsx
  }

  export const Heh = () => {
    // jsx
  };
  ```

  3. Mixed export (only react)

  - one defaule export and multiple named export

  ```jsx
  export default function One() {
    // jsx
  }

  export const Two = () => {
    //jsx
  };
  ```

## JSX

- jsx look like html markup but bit stricter and can display dynamic information.
- react function/comopnent return jsx (javascript extenstion) that render
- react render component(markup) and logic live together in same place .

**rules**

1. only one jsx can return
   - for this wrap content inside
   ```html
   <div>
     <!--content go here  -->
   </div>
   ```
   or use react **fragment**
   ```html
   <>
    <!--content go here  -->
   </>
   ```
   - why
     JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
2. need to close all tags
   - even self closing tag `<img/>`
3. use camelCase
   - due to javascript reversed keywords

- to use dynmaic value use `{}` even for attribute
  _eg_

```jsx
export default function App() {
  // example of dynamic content
  const name = "UTSAV";
  let age = 17;
  const bornYear = 2006;
  const gender = "male";
  const google = "https://www.google.com";
  return (
    <>
      <h1>Hello react</h1>
      <p>
        {name} is {age} year old and {gender == "male" ? "his" : "her"} born
        year is {bornYear}.
      </p>
      <p style={{ color: "red" }}>text in red</p>
      <a href={google} target="_blank">
        visit google
      </a>
    </>
  );
}
```
## props
- react comoponents use props to communicate to each other, parent compononent can pass some info to child (might like html attribute even pass js value like array,object,function)
- props are immutable , it can be dynamic (need to use state hook)

_eg of props_

```jsx
export default function App(){
   return (
    <>
      <h1>Hello</h1>
      <img src="https://i.imgur.com/1bX5QH6.jpg" alt="" width={100} />
    </>
  );
}
```
- here src, alt, width are props
- react componenet take only one argument that is props
```jsx 
export default function App({name,age,gender}){
  // content
} 
```