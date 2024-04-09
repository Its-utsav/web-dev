import { useState } from "react";
import useCurrencyInfo from "../../06-currency-convertor/src/hooks/useCurrencyInfo";
import "./App.css";
import Inputbox from "./components/Inputbox";

function App() {
  console.log(useCurrencyInfo("inr"));
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-wrap">
        <Inputbox label={"from"} />
        <div className="relative w-full ">
          <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 px-2 py-0.5 rounded-md text-white">
            swap
          </button>
        </div>
        <Inputbox label={"from"} className="mb-1" />
      </div>
    </>
  );
}

export default App;
