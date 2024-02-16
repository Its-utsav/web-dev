import { useState } from "react";
import "./App.css";

// create a method that check that value should be 0 to 20 and stop clicking
function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);

    // setCounter(counter + 1);

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // guwas the output for above 5 commented code
    // it will not +5 becuase useState will send above 5 line into batch (aboce 5 line do same task)
    // what if i nedd to write like above and plus by 5

    // setCounter(counter + 5); // 1

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    // console.log("clicked ", i++, counter);
    checkValue(counter);
  };

  const decValue = () => {
    counter = counter - 1;
    setCounter(counter);
    checkValue(counter);
  };

  function checkValue(counter) {
    if (counter < 0 || counter > 20) {
      // alert("stop");
      return false;
    }
  }

  // hmm , everything code good but in UI value of counter not changing (propgate), but in console value of counter is changing
  // ans :- react tack care of chagning in UI , so we need to say to react  that we need to change the value of react when button click
  // hooks - React.js, a state is a built-in feature that allows components to keep track of changing data. It represents the dynamic information in a component, such as user input, network responses, or any data that can change over time.

  return (
    <>
      <h1>React with HC</h1>
      <h2>Counter value : {counter}</h2>

      <div>
        <button onClick={addValue} disabled={counter >= 20}>
          add value
        </button>
        <br />
        <br />
        <button onClick={decValue} disabled={counter <= 0}>
          dec value
        </button>
      </div>

      <p> why i am here {counter}</p>

      <footer> iam at footer {counter}</footer>
    </>
  );
}

export default App;
