import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  let arr = [1, 2, 3];
  let obj = {
    name: "Utsav",
    age: 17,
  };
  return (
    <>
      <h1 className="bg-green-500 p-5 mb-4 rounded-2xl">Tailwind css test</h1>
      
      {/* <Card name="Utsav"  /> */}
      <Card username="Utsav" bio="hey, there i am utsav ,learing react fom CAC" />
      <Card  bio="hey, there i am utsav ,learing react fom CAC" />
    </>
  );
}

export default App;
