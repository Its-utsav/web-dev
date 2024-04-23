
- `let` and `const` declarations are hoisted !!!! but not same as `var`
- `var` **->** global scope
- `let` and `const` **->** script scope __other then__ global scope
- we can't access the value of `let` and `const` before initialized

-**Temporal Dead Zone(TDZ)**
- is the time between variable hosited and till initilized the value.


```js
var a = 12;
// temopral dead zone
//  temopral dead zone
//  temopral dead zone
//    temopral dead zone
let c = 12;
console.log(c);

```
- `const` is more stricter than `let` and `let` is more stricter than `var`

- with `const` initilized compulsory and we can't re-assign tha value
- with `const` and `let` variable re-declaration not allow got `SyntaxError` but with `var` allow 
- use `const` > `let` > `var` 
