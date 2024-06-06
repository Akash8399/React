import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  //let counter = 5
  const addValue = () =>{
    counter += 1
    setCounter(counter)
    //console.log("value Added",counter); this is not required, but koi problem bhi nhi hai 
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value : {counter}</button><br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
