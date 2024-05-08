# JavaScript Dom

## TOC

1. [dom](#dom)

## DOM

- DOM stand for `Document Object Model`.
- [MDN Dom](https://developer.mozilla.org/en-US/docs/Web/API/Document)
-

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>This is Title</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    <script src="main.js"></script>
  </body>
</html>


```

- for this above `HTML` code `DOM` parse like this
  **NOTE:-** this is only for `visualization`

  - ![DOM visualization](https://media.discordapp.net/attachments/1205479570900521003/1237304330512633936/image.png?ex=663b28f4&is=6639d774&hm=0de30707bbd532f487410d2fef725ddde8d938a04df54895fa133056aa7291bd&=&format=webp&quality=lossless&width=949&height=583)

- selecting `HTML` Elements

1. `document.getElementById("id")` - based on id
2. `document.getElementsByClassName("heading")` - based on class name return `HTMLcollection` that is differnt from `NodeList`
3. `document.getElementsByName("this is heading")` - based on `name` attribute return `NodeList`
4. `document.getElementsByTagName("h1")` - based on html tag
5. `document.querySelector('h1')` - by `id` , `tag` , `class` ,`name` but select only one element
6. `document.querySelectorAll('h1')` - same `querySelector` bu select multiple element it return `NodeList` not an array

---

- `document.getElementById("title").className` - we get class names
- `document.getElementById("title").getAttribute('id')` - we get attribute based on key (`id`,`class`)
- `document.getElementById("title").setAttribute("title", "this is title")` - we can set attribute always overwrite
- `End More`

---

retrive text from Element

1. `Element.textContent` - return text of elements even of descendant
2. `Element.innerText` - return renders (a contatin that is display on browser) text
3. `Element.innerHTML` - we get element deatils with nested elements .

---

### Element Family

1. `Element.children` - return `HTMLcollection`
2. `Element.lastElementChild` return `last` element from selected element
3. `Element.firstElementChild` - return `First` element from selected element
4. `Element.lastChild` and `Element.firstChild` - return `last` and `first` child from selected element
5. `Element.parentElement` - return `parent Element` to the selected element
6. `Element.nextElementSibling` - return next element
7. `Element.childNodes` - return all nodes includeing `new line` , `tags` , `comment`

### Add and removing Element

- set style and much more

```js
const div = document.createElement("div"); // create element

// div.innerText = "Hello World from JS"; // way 1 to add text always overwrite
div.setAttribute("title", "hello from js"); // set attributes
div.style.backgroundColor = "red"; // css
div.style.padding = "4rem"; //  css
let txt = document.createTextNode("Hello World from js"); // way 1 to add text
div.append(txt); //  multiple element or can be string
weekDiv.appendChild(div); // only one element can add
```

- `Element.remove()` - remove Element

```js
function addListItems(langauge) {
  let li = document.createElement("li");
  li.textContent = `${langauge}`;
  document.querySelector(".langauges").appendChild(li);
}

addListItems("C");
```

```js
function addListItems(langauge) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(langauge));
  document.querySelector(".langauges").appendChild(li);
}
```
