import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [numAllow, setNumAllow] = useState(false);
  let [charAllow, setCharAllow] = useState(false);
  let [pass, setPass] = useState("");

  // for tacking reference of password
  let passRef = useRef(null);

  // useCallback for better optimization
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*()_+={}|<>?~`,./;'[]";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numAllow, charAllow, setPass]);
  // when any change on above array then use useCallback

  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);
  // on page load and any chnage in above array it will run till now i know clen code missing for now

  const cpyToClip = useCallback(() => {
    // if any value than pass ref select
    passRef.current?.select();
    // give min and max range
    passRef.current?.setSelectionRange(0, 51, "forward");
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-200">
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={pass}
          className=" outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />

        <button
          className="bg-blue-600 text-white px-4 text-center outline-none hover:bg-blue-950"
          onClick={cpyToClip}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className=" flex item-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            name=""
            id=""
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Lenght :{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numAllow}
            onChange={() => {
              setNumAllow((pre) => !pre);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={numAllow}
            onChange={() => {
              setCharAllow((pre) => !pre);
            }}
          />
          <label htmlFor="charInput">Special charcter</label>
        </div>
      </div>
    </div>
  );
}

export default App;
