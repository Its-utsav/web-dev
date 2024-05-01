
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(1);

  let addValue = () => {
    // setCounter(counter + 1);
    // interview question is counter value will increase by 5 ? 
    // - absolutely f* not 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); // wont work
    // why useState() method aka HOOK update state or vraible in batches
    // that why counter varible update by 1 not by 5 or any number

    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
    // setCounter(preCounter => preCounter + 1);
    setCounter(preCounter => (preCounter < 20 ? preCounter + 1 : preCounter ));
    setCounter(preCounter => (preCounter < 20 ? preCounter + 1 : preCounter ));
    setCounter(preCounter => (preCounter < 20 ? preCounter + 1 : preCounter ));
    setCounter(preCounter => (preCounter < 20 ? preCounter + 1 : preCounter ));
    setCounter(preCounter => (preCounter < 20 ? preCounter + 1 : preCounter )); 
    // answer for the question 
   

    // setCounter(
    //   preCounter => (preCounter < 20 ? preCounter + 1 : preCounter)
    // ); // chatGPT
  }

  let decValue = () => {
    // setCounter(counter - 1);
    setCounter(
      preCounter => (preCounter > 0 ? preCounter - 1 : preCounter)
    );

  }
  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value : {counter}</h2>

      <p style={counter == 20 || counter == 0 ? {
        display: "block"
      } : {
        display: 'none'
      }}>
        Now counter value can't update
      </p >
      <span style={counter == 20 || counter == 0 ? {
        display: "block"
      } : {
        display: 'none'
      }}>
        <p>You need to {counter == 20 ? "decrese" : "increase"}  the value </p>
      </span>


      <button style={{ margin: "2rem" }}
        onClick={addValue }
        title='increase to the counter'
        // disabled={counter < 20 ? false : true} //  with my thinking
        // disabled={counter == 20} // gemini
        disabled={counter >= 20}
      >
        Add Value
      </button>

      <button
        style={{ marginLeft: "2rem" }}
        onClick={decValue}
        title='decerse from the counter'
        // disabled={counter > 0 ? false : true} //  //  with my thinking
        disabled={counter == 0} // gemini
      >
        Decrese the value
      </button>
    </>
  )
}

export default App
