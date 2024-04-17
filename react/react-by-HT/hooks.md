# hooks in react js

## toc

1. [useState](#useSate)
2. [useEffect](#useeffect)

## useState

```jsx
let [state, setState] = useState(inntState);
```

## useEffect

```jsx
useEffect(() => {
  // callback
}, []); // dependency array
```

## custom hooks

- in react we can create custome hook
- hooks are just normal function with return value
- custom hooks can use in-built hooks
- as per standrad rules hook name start with _use_ and hooks functionality

```js
function useHello() {
  return [];
}
```
