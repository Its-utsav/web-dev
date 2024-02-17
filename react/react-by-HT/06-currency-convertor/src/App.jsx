import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("inr");
  let [to, setTo] = useState("usd");
  let [convertAmt, setConvertAmt] = useState(0);

  let currencyInfo = useCurrencyInfo(from);

  let options = Object.keys(currencyInfo);

  let swap = () => {
    const tempFrom = from;
    const tempTo = to;
    const tempAmount = amount;

    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(convertAmt); // Set amount to the converted amount
    setConvertAmt(tempAmount); // Set convertAmt to the original amount
  };

  let convert = () => setConvertAmt(amount * currencyInfo[to]);

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="w-full max-w-md max-auto border border-gray-50 rounded-lg p-5 background-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={"From"}
                amount={amount}
                currencyOpts={options}
                onCurrencyChange={(currency) => setAmount(currency)}
                selectCurreny={from}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div>
              <InputBox
                label={"to"}
                amount={convertAmt}
                currencyOpts={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurreny={to}
                amountDisable
              />
            </div>
            <button className="w-full bg-blue-600 text-white p-4 rounded-lg mt-5">
              Convert {from.toUpperCase()} to {to.toLowerCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
