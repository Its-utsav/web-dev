import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});
  // when we change currency the data need to change in UI that reason we use useState
  // useEffect run when website load and any change in currency (see dependency array);
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(url) // fetch data
      .then((res) => res.json()) // data convert into json
      .then((res) => setData(res[currency])); // call setData function with current currency
    // console.table(data);
  }, [currency]); // dependency array
  // console.log(data);
  return data; 
}

export default useCurrencyInfo;
// return whole function 