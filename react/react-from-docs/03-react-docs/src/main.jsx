import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App name={"utsav"} age={17} bornYear={2006} isMale={true}/>
    <App name={"dora"} isMale={false} />
    
  </React.StrictMode>
);
