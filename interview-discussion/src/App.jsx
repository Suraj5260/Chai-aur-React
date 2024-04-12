import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0
  })


  // const [multipliedValue, setMultipliedValue] = useState(1)

  // let multipliedValue = count * 5

  // const multiply = () => {
  //   // setMultipliedValue(count * 5)
  //   setCount(count + 1)
  // }

  const clickMe = () => {
    setValue({
      value: 0
    })
  }

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button
        onClick={clickMe}
      >click Me</button>
      {/* <h1>Multiplied value: {multipliedValue} </h1> */}
    </>
  )
}

export default App
