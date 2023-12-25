import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let count = 5;
  let [count, setCount] = useState(5)
  const adder = () => {
    if (count >= 20) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  }
  const suber = () => {
    if (!count) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Count is :{count}</h1>
      <button
        onClick={adder}
      >Count++{count}</button>
      <br />
      <button
        onClick={suber}
      >Count--{count}</button>
      <footer>Footer: {count}</footer>
    </>
  )
}

export default App
