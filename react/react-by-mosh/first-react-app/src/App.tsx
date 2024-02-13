import ListGroup from "./comonents/ListGroup";

import { useState } from "react";
import Alert from "./comonents/Alert";
import Button from "./comonents/Button";

function App() {
  let cityArr = ["Delhi", "Mumbai", "Surat", "New York", "Jaipur", "Rajkot"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVis, setAlertVis] = useState(false);

  return (
    <>
    <div>
      <ListGroup
        items={cityArr}
        heading="Cites"
        onSelectItem={handleSelectItem}
      />
     </div>
    {/* // <Alert text="Hello Duniya !!! from react js  " /> */}
    {/* // <Alert>Hello Duniya !!! from  <b>react js</b> </Alert> */}
   
      {alertVis && (
        <Alert onClose={() => setAlertVis(false)}> this is alert </Alert>
      )}
      <Button
        text="Click me "
        click={() => {
          // console.log("halo");
          setAlertVis(true);
        }}
        color="dark"
      />
    </>
  );
}

export default App;

{
  /* // this is good but what if we are passing html , any tag so what // see on alert props  */
}
