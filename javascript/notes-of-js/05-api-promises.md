# JS , API and other things

## TOC

1. [basic about API](#few-words-about-api)
2. [XMLHttpRequest](#xmlhttprequest)

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
  if (xhr.readyState === 1) {
    console.log(`OPENED ${xhr.readyState}`);
  } else if (xhr.readyState === 2) {
    console.log(`HEADERS_RECEIVED ${xhr.readyState}`);
  } else if (xhr.readyState === 3) {
    console.log(`LOADING ${xhr.readyState}`);
  } else if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(`DONE ${xhr.readyState}`);
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
