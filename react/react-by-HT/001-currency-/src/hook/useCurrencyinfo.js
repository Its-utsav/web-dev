import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // jevi website load thay atle by defulat data aava joye ane currency ma change thay atle fari thi call thavao joyo
  // data ui ma render thay te mate useState

  let [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setData(res.currency);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
