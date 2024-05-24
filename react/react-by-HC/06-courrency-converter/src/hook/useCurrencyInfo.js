import { useState, useEffect } from "react";
function useCurrencyInfo(currency) {
  let [data, setData] = useState({}); // for changes in UI
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // string to json
      .then((data) => {
        setData({
          date: data.date,
          rates: data[currency],
        });
      }); // only currency object selected
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
