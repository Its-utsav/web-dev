# part 2 of JavaScript

## TOC

1. [js working](#how-js-work)

## How JS work

- when ever JavaScript Execute , there is `Execution Context` is created.
- JS is single threaded langauge .

```js
let a = 12;
console.log(a);
```

- let's assume above code is execute.

1. Global Execution Context (`this`)
2. Function Execution Context (For `Function`)
3. Eval Execution Context (property of Global execution)

- in interview can say `2` execution context created than ok .
- the whole JS Code Execution in `2 phase` .

1. Memory Creation Phase (Memory Creation Phase)
2. Code Execution Phase (Execution Phase)

- let's understand those 2 phase using below example .

```js
let v1 = 10;
let v2 = 5;
function add(num1, num2) {
  let ans = num1 + num2;
  return ans;
}
console.log(add(v1, v2));
console.log(add(100, 100));
```

- When above code start execute then

1. Global Execution Context is created (`this` , `Window` object for Browser)
2. Memory For all variable are allocated and set `undefined` value for all variable includeig `let` and `const` and for the function whole function statement copy into function name (function defination) , i only decalre function not a invoke the function

![Memory Creation Pahse](https://media.discordapp.net/attachments/1205479570900521003/1236548827373375528/EC-1.png?ex=66386956&is=663717d6&hm=08fcf325fc20040cbf41788072dec037356bfde36654969ba5faf234ea897c03&=&format=webp&quality=lossless&width=1260&height=583)

3. Execution Phase in this phase all the value of variable replace `undefined`

![Execution Phase](https://media.discordapp.net/attachments/1205479570900521003/1236550294800699502/EC_-2.png?ex=66386ab4&is=66371934&hm=e6bdba4f49d9511e02483e6e7da3032e4eb5d36f2fc15d226765926dea5fed7a&=&format=webp&quality=lossless&width=1174&height=583)

4. now `console.log(add(v1, v2));` line encounted here function is invoked , so another Execution contex is created for the function but now it is not a Global Exceution contex

5. in Function we have varibale call `ans ` in is value set to the `undefined` and even for `num1`, `num2` parameter and set value `undefined` .

6. then perform addition operation than return the value to the caller (`Global Execution context`) .

7. and print the value `15`

8. And Function Execution context Will Destory

9. next line execute it is also function so again `Function Execution Context Created`

10. Same agian memory creation phase and code excution phase start and end.

- in between this call stack also create as per function execute .

![Call Stack](https://media.discordapp.net/attachments/1205479570900521003/1236633652431949855/call_stack_1.png?ex=6638b856&is=663766d6&hm=7e194bb24167bf65bb4e7146e05321325b8e794d8acfa831861f8fa55b02259b&=&format=webp&quality=lossless&width=825&height=384)

- Graphical Example of Call stack for the below code

```js
function one() {
  console.log("Hello From Function one");
  two();
}

function two() {
  console.log("Hello From Function Two");
}
one();
```

- one function one call than `Hello From Function one` will print after that function two call and `Hello From Function Two` will print till here global exacution context at bottom of the Call Stack .
- than function one call and it will place at up from `global exacution context` than function two call and function two place top of function `one` execution context
- firstly two execution context destory than function one execution context destory and if thrie on statement so even global execution will also destory .

![call stack](https://media.discordapp.net/attachments/1205479570900521003/1236636059027116052/call_stack_2.png?ex=6638ba94&is=66376914&hm=5f1ea73bf1a27ce49e0d64988e05a8399e5a71ebf8c2b2598ba68e11016f788e&=&format=webp&quality=lossless&width=1267&height=583)

- call stack have concept of `LIFO` aka Last In First Out .

![call stack](https://media.discordapp.net/attachments/1205479570900521003/1236639230017671229/diagram-export-5-5-2024-4_52_31-pm.png?ex=6638bd88&is=66376c08&hm=757025926a3e300a21672a75924b44ee15e34bfca7fbf3e56e1ada32f4387971&=&format=webp&quality=lossless&width=825&height=451)
