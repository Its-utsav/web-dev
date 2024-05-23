import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  let [passLength, setPassLength] = useState(8); // for pass length DEP
  let [numAllow, setNumAllow] = useState(false);// pass include number and charcetr DEP
  let [charAllow, setCharAllow] = useState(false); // DEP
  //  render again when state change
  let [pass, setPass] = useState(""); // 

  let passRef = useRef(null); // pass selection

  let passGeneartor = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*()_+{}|:"<>?[]-=';

    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPass(pass);
  }, [passLength, numAllow, charAllow]); // for memoization

  useEffect(() => {
    passGeneartor();
  }, [passLength, numAllow, charAllow]) // change anything from array than render again

  let copyToClipbord = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 101)// for copy we need to select the pass
    window.navigator.clipboard.writeText(pass);
  }, [pass])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg p-4 my-6 text-orange-600 bg-gray-700">
        <h1 className="text-center text-white text-2xl ">Password Generator</h1>
        <div className="flex shadow-lg mb-4 rounded-lg overflow-hidden">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 rounded-sm"
            placeholder="password"
            readOnly
            ref={passRef}
           
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyToClipbord}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={passLength}
              className="cursor-pointer "
              onChange={(e) => { setPassLength(e.target.value) }}
            />
            <label htmlFor="">length : {passLength}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => { setNumAllow((preValue) => !preValue) }}
            />
            <label htmlFor="numInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => { setCharAllow((preValue) => !preValue) }} // change for true to false or viseversa
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;