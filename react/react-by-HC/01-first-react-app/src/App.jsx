import FirstComp from "./FirstComp"

function App() {
  let programmingLan = "JavaScript";
  return (
    <>
      <h1>Hello React</h1>
      <FirstComp />
      <p>Programming langauge {programmingLan}</p>
      <div>
        <p>1 + 3 = {1 + 3}</p>
        <span>
          this is example of variable injection
        </span>
      </div>
    </>
  )
}

export default App
