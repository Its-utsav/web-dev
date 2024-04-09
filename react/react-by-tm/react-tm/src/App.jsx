
import './App.css'

function App() {
  const name = "utsav";
  const nameList = ['utsav', 'raj', 'rahul', 'sam', 'harry']
  let isLogedin = true;

  return (
    <>
      <div className='bg-slate-600 text-white'>
        <h1 className="bg-red-200 text-black ">Hello to React from {name}</h1>
        <ul>
          {nameList.map((name, index) => <li key={index} className="mt-2 p-2 m-0.5 bg-red-500 cursor-pointer">{name}</li>)}
        </ul>
        {isLogedin ? <h2> hello welcome back </h2> : <h2>First time visit ?</h2>}
        {isLogedin && <h2>Hi user</h2>}
      </div>
    </>
  )
}

export default App
