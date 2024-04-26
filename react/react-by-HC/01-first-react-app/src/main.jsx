import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// this is how we create and render element in DOM using React inbuilt method
const Username = "Harray"

const ReactEle = React.createElement('a', {
  href: 'https://www.google.com',
  target: "_blank"
}, "Click here to visit google com"
  , Username
)

const anotherEle = (
  <a href="https://www.google.com" target='_blank'>visit google </a>
)
// above direct work

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // anotherEle // off strict mode
// ReactEle // off strict mode */}
    <App />
  </React.StrictMode>
)
