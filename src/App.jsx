import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  const addValue=()=>{
    if(counter>=0)
      setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter>0)
      setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add Count : {counter
        +1}</button>
      <br />
      <br />

      {counter>0 && <button onClick={removeValue}>Remove Count : {counter}</button>}
      <p>footer : {counter}</p>
    </>
  )
}

export default App
