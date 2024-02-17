import React, { useId } from "react";

function InputBox({
  label, // for lable- to or from
  amount, // amount for converting value
  onAmountChange, //for taking value of amount whenever change
  onCurrencyChange, //when currencey change
  currencyOpts = [], // all currency options
  selectCurreny = "usd", // selected currency
  amountDisable = false,
  currencyDisable = false, // check diaable or not
  className = "",
}) {
  let amountId = useId();
  return (
    <>
      <div className={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
            {label}
          </label>
          <input
            id={amountId}
            type="number"
            className="outline-none w-full py-10 bg-transparent text-black"
            placeholder="amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>
        <div className="flex w-1/2 flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 inline-block">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
            value={selectCurreny}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOpts.map((c) => (
              <option value={c} key={c} className>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
