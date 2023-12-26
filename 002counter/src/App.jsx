import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const Adder = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    setCount(PrevCount => PrevCount + 1)
    setCount(PrevCount => PrevCount + 1)
    setCount(PrevCount => PrevCount + 1)
    setCount(PrevCount => PrevCount + 1)
    setCount(PrevCount => PrevCount + 1)
    setCount(PrevCount => PrevCount + 1)
  }
  const Subber = () => {
    setCount(count - 1)
  }



  return (
    <>
      <p >Suraj Aur Code</p>
      <h2>Count is {count}</h2>
      <button onClick={Adder}>Add to {count}</button>
      <br />
      <button onClick={Subber}>Sub to {count}</button>
    </>
  )
}

export default App
