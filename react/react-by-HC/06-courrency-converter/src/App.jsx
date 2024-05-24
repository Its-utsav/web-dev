import InputBox from "./components/InputBox";
import { useEffect, useState } from 'react'
import useCurrencyInfo from './hook/useCurrencyInfo'
function App() {

  let [amount, setAmount] = useState(0); // for amount
  let [from, setFrom] = useState('usd'); // for cunrrency
  let [to, setTo] = useState('inr'); // for cunrrency
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [error, setError] = useState(''); // when from currency is ZERO

  let currencyInfo = useCurrencyInfo(from);
  let currencyOption = currencyInfo.rates ? Object.keys(currencyInfo.rates) : [];


  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  let swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setError('');
  }

  let convert = () => {
    setConvertedAmount(amount * currencyInfo['rates'][to]);
    setError('');
  }
  let displayError = () => {
    if (amount === 0) {
      setError('Conversion rate for the selected currency is zero. Please try again later.');
      setConvertedAmount(0)
      return
    }

  }

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
      <h1 className="bg-white/30 w-full text-center p-3">Rate as per : {currencyInfo.date} </h1>
      <div className="w-full">
        <div className="w-72 max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 min-w-24 sm:w-10/12 md:h-2/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyOption}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrecncy={from}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div
              className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOption}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrecncy={to}
                amountDisable
              />
            </div>

            {
              error && (<div className="text-red-300 text-sm mb-2 text-center text  font-bold bg-black p-2 rounded-lg">
                {error}
              </div>)
            }

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 ${amount === 0 ? 'cursor-not-allowed' : ' cursor-pointer'}`}
              onMouseOver={displayError}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;