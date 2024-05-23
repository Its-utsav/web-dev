# React

## TOC

1. [What is react](#what-is-react-)
2. [creating react app](#how-to-create-a-react-app-)

## what is react ?

- react is a open source JavaScript library by meta (facebook) , primarily used for making UI or SPA(single page application)

- react application build using the [components](#componenets) , components could be small button , text or big as whole page

- react use virtual dom (light weight copy of real dom) to update actual dom

- react use jsx (html like syntax that allow use to write evaluated expression (means last result of js code))

- for updating UI we use Diffrent types of [hooks](#hooks)

## how to create a react app ?

- for creating react app we use toolchain like `CRA` (`Create React App`) outdated or `vite`

## Componenets

- components is nothing just a normal js function that return jsx (only one jsx element if we need to return muliple element than use fragment empty tag(<></>))

## props

- react props (properties) is the mechanism that pass data from the parent component to child componets 
1. props are immutable 
2. props shlod be passdown from parent to child 
3. 

## hooks

- react control whole ui updation process

1. `useState()`:-

- change the state in ui

```js
let [state, setState] = useState(intitalState);
```

- here state update by setter function

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
