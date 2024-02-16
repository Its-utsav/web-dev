import { useState } from "react";
import "./App.css";

function App() {
  // note 1 color are changing -store in a variables also refeleact in UI- useState
  let [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-20 flex items-start justify-center flex-wrap rounded-md inset-x-0">
        <div className="bg-white flex flex-wrap justify-center items-center rounded-md p-5 m-3 gap-5 shadow-md">
          <button
            className="bg-red-400  outline-none shadow-xl"
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="bg-green-400  outline-none shadow-xl"
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="bg-pink-400  outline-none shadow-xl"
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="bg-yellow-400  outline-none shadow-xl"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
