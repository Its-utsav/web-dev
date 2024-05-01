

import { useState } from 'react'
import './App.css'


function App() {
  let [color, setColor] = useState("olive");


  return (
    <>

      <div className='w-full h-screen  duration-200  relative' style={{ backgroundColor: color }}>
        <div className='flex items-center justify-center flex-wrap '>
          <p className='m-4 text-2xl text-center'>Click On Bellow button to change background color of the page</p>
        </div>
        <div className='fixed bottom-7 inset-x-0 px-2 '>

          <div className='bg-slate-300 rounded-lg m-2 p-4 drop-shadow-lg flex items-center justify-around  flex-wrap gap-3 text-black '>

            <button
              className='bg-red-500 p-2 rounded-lg outline-none text-white capitalize '

              onClick={() => setColor("red")}
            >
              Red
            </button>


            <button
              className=' p-2 rounded-lg outline-none bg-green-400 capitalize'
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className='p-2 rounded-lg outline-none bg-orange-400 capitalize'
              onClick={() => setColor("orange")}
            >
              orange
            </button>

            <button
              className=' p-2 rounded-lg outline-none bg-yellow-400 capitalize'
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>


            <button
              className=' p-2 rounded-lg outline-none bg-lime-400 capitalize'
              onClick={() => setColor("lime")}
            >
              lime
            </button>


            <button
              className=' p-2 rounded-lg outline-none bg-teal-400 capitalize'
              onClick={() => setColor("teal")}
            >
              teal
            </button>



            <button
              className=' p-2 rounded-lg outline-none bg-cyan-400 capitalize'
              onClick={() => setColor("cyan")}
            >
              cyan
            </button>

            <button
              className=' p-2 rounded-lg outline-none bg-violet-400 capitalize'
              onClick={() => setColor("violet")}
            >
              violet
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
