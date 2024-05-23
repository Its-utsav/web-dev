import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  let [passLength, setPassLength] = useState(8); // for pass length DEP
  let [numAllow, setNumAllow] = useState(false);// pass include number and charcetr DEP
  let [charAllow, setCharAllow] = useState(false); // DEP
  //  render again when state change
  let [pass, setPass] = useState(""); // 
  let [dark, setDark] = useState(true);
  let [] = useState();

  let passRef = useRef(null); // pass selection
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let nums = '0123456789';
  let specialChar = '!@#$%^&*()_+{}|:"<>?[]-=';

  let passGeneartor = useCallback(() => {
    let pass = "";
    if (numAllow) str += nums;
    if (charAllow) str += specialChar;

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

  let darkMode = () => {
    if (dark) {
      setDark(false)
    } else {
      setDark(true);
    }
    console.log(dark);
  }




  return (
    <>
      <div className={` h-screen w-screen ${dark === true ? 'dark:bg-slate-800' : 'bg-slate-200'}`}>
        <nav className="w-full text-right">
          <div className="">
            <i className={`${dark === true ? 'fa-solid fa-sun hover:text-white' : 'fa-solid fa-moon  hover:text-black'} text-white text-2xl  hover:cursor-pointer m-8`}
              onClick={darkMode}
              onMouseOver={() => { { dark === true ? 'text-white' : 'text-black' } }}
            ></i>
          </div>
        </nav>
        <div className={`w-9/12 mx-auto shadow-lg rounded-lg p-4 my-6 text-orange-600 bg-gray-700 text-lg min-w min-w-[284px]`} >
          <h1 className="text-center text-white text-2xl my-4">Password Generator</h1>
          <div className="flex shadow-lg mb-4 rounded-lg overflow-hidden">
            <input
              type="text"
              value={pass}
              className="outline-none w-full py-4 px-4 rounded-sm"
              placeholder="password"
              readOnly
              ref={passRef}

            />
            <button
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'
              onClick={copyToClipbord}
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2 flex-col sm:flex-row">
            <div className="flex items-center gap-x-1 text-xl">
              <input
                type="range"
                min={8}
                max={100}
                value={passLength}
                className="cursor-pointer "
                onChange={(e) => { setPassLength(e.target.value) }}
              />
              <label htmlFor="" className="mx-4">length : {passLength}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                name=""
                defaultChecked={numAllow}
                id="numInput"
                onChange={() => { setNumAllow((preValue) => !preValue) }}
              />
              <label htmlFor="numInput" className="ml-3 text-xl">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                name=""
                defaultChecked={charAllow}
                id="charInput"
                onChange={() => { setCharAllow((preValue) => !preValue) }} // change for true to false or viseversa
              />
              <label htmlFor="charInput" className="text-xl">Characters</label>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;