import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {


  return (
    <UserContextProvider>
      <h1>Hi</h1>
    </UserContextProvider>
  )
}

export default App
