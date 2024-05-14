# JS , API and other things

## TOC

1. [basic about API](#few-words-about-api)
2. [XMLHttpRequest](#xmlhttprequest)
3. [Promises](#promises)

## few words about API

**NOTE** - this section may update in future .

- `API` stand for `Application Programming Interface`.
- It is a communication channel between front-end and backend

## XMLHttpRequest

- this is old way to call api in js (you may be learn about this is anywhere but now days developer don't use it but knowing this can be help full )

|

- use of `XMLhttpRequest`

1. create `XMLhttpRequest` object

- with help of `new` keyword and store in variable

```js
let xhr = new XMLHttpRequest();
```

2. make a request and sending request

```js
const URL = "https://api.github.com/users/its-utsav";
xhr.open("GET", URL, true); // set url
xhr.send();
```

- after making reqest below table came in picture

| Value | State              | Description                                                     |
| ----- | ------------------ | --------------------------------------------------------------- |
| `0`   | `UNSENT`           | Client has been created. `open()` not called yet.               |
| `1`   | `OPENED`           | `open()` has been called.                                       |
| `2`   | `HEADERS_RECEIVED` | `send()` has been called, and headers and status are available. |
| `3`   | `LOADING`          | Downloading; `responseText` holds partial data.                 |
| `4`   | `DONE`             | The operation is complete.                                      |

- for tracking the state change we an use below code

```js
xhr.onreadystatechange = function () {
  console.log(xhr.readyState); // when ever state change
};

console.log(xhr.status); // for code like 404 (Not found) OR 200 (Data recieve) etc
```

```js
const GITHUBURL = "https://api.github.com/users/hiteshchoudhary";
let xhr = new XMLHttpRequest();

xhr.open("GET", GITHUBURL, true);

xhr.send();

function displayOnPage(url, imgURl, name, followers, bio) {
  document.body.innerHTML = `<section class="h-screen w-screen flex items-center justify-center text-black">
  <div class="max-w-screen-sm m-4 flex flex-col rounded-xl bg-slate-300 p-2 duration-300 h-72">
    <div class="m-3 flex items-center justify-center">
      <a href=${url} target="_blank">
        <img src=${imgURl} alt="img" class="w-24 rounded-xl hover:cursor-pointer hover:shadow-2xl" title="visit gihub url" />
      </a>
    </div>
    <div class="bg-green-400 p-4 text-center font-semibold">
      ${name}
      <p><span class="font-normal capitalize"> followers </span> : ${followers}</p>
    </div>
    <div class="flex items-center py-2 text-center">
      <p class="text-lg">Bio:-</p>
      <p class="ml-3 hover:shadow">${bio}</p>
    </div>
  </div>`;
}

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(this.response); // get string conver into object
    displayOnPage(
      GITHUBURL,
      data.avatar_url,
      data.name,
      data.followers,
      data.bio
    );
  } else {
    document.body.innerHTML = `<div class="h-screen w-screen bg-slate-900 flex items-center justify-center ">
    <h2 class="text-center text-4xl capitalize p-4 text-white font-bold">unable to load data from github status code :- ${xhr.status}</h2>
  </div>`;
  }
};

xhr.onerror = function () {
  document.body.innerHTML = `<div class="h-screen w-screen bg-slate-900 flex items-center justify-center ">
  <h2 class="text-center text-4xl capitalize p-4 text-white font-bold">unable to load data from github status code :- ${xhr.status}</h2>
</div>`;
};
```

- even we can execute block of code when we get error using `xhr.onerror`

## Promises

- the `promise` is the object that represent the eventual completion (or failure) of am asymchronous opreation and its resulting the value

- promises have 3 state

1. pending - initial state
2. fulfilled - means operation complete successfuly
3. rejected - means operation faild

- in most of time we consumed promises but knowing how to create a promises can help to understrand `fetch` , `async/await` etc .

1. createing promises

- with the help of `new` keyword we can create a new promise object .
- its just like a normal function , promise also help to reduse callback hell
- promise have to part first promise may resolve or may be reject

```js
const primoseOne = new Promise(function (resolve, reject) {});
```

```js
const primoseOne = new Promise(function (resolve, reject) {
  // async task
  // DB call
  // cryptography, network

  setTimeout(function () {
    console.log(`async task complete successfuly`);
    resolve(); // connet with .than
    // if this line we didn't write than .than never execute
  }, 1000);
});
```

2. consumed promise

```js
primoseOne.then(function () {
  console.log(`promises consumed`);
});
```

---

whole code

```js
const primoseOne = new Promise(function (resolve, reject) {
  // async task
  // DB call
  // cryptography, network

  setTimeout(function () {
    console.log(`async task complete successfuly`);
    resolve(); // connet with .than
    // if this line we didn't write than .than never execute
  }, 1000);
});

primoseOne.then(function () {
  console.log(`promises consumed`);
});
```

- Data consumption

```js
let promiseThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({ username: "Utsav", age: 17 });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data.username); // Utsav will create 
});
```
