const qoute = document.querySelector(".qouet");
const qouteAuthor = document.querySelector(".qouet-author");
const btn = document.querySelector(".next-btn");
const twtbtn = document.querySelector(".twitter-share-button");

const apiUrl = "https://api.breakingbadquotes.xyz/v1/quotes";

let encodeData;
async function CallApi() {
  let res = await fetch(apiUrl);
  let resData = await res.json();
  qoute.textContent = resData[0].quote;
  qouteAuthor.textContent = resData[0].author;

  twtbtn.addEventListener("click", () => {
    const dataToShare = resData[0].quote;
    console.log(dataToShare);
    encodeData = encodeURIComponent(dataToShare);
    
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeData} --by ${resData[0].author}`;
    window.open(twitterShareUrl, "_blank");
  });
}

CallApi();
btn.addEventListener("click", CallApi);
