import { useCallback, useEffect, useState } from 'react'




// function App() {
//   const [count, setCount] = useState(0)
//   const adder = () => {
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//     setCount(prevCount => prevCount + 1);
//   }
//   const subber = () => {
//     setCount(count - 1);
//   }


//   return (
//     <>
//       <h1>Count is {count}</h1>
//       <button onClick={adder}> ++ </button>
//       <br />
//       <button onClick={subber}> -- </button>
//     </>
//   )
// }

// BG changer

// function App() {

//   const [color, setColor] = useState("green")

//   return (
//     <>
//       <div className="w-full h-screen duration-200"
//         style={{ backgroundColor: color }} >


//       </div>
//     </>

//   )
// }



function App() {

  const [count, setCount] = useState(0)
  const [line, setLine] = useState("0")

  const adder = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const counter = useCallback(() => {

    let str = "0";
    for (let i = 1; i <= count; i++) {
      str = i + ", " + str;
    }

    setLine(str)

  }, [count, setLine])

  useEffect(counter, [count])


  return (
    <>
      <h1>count is :{count}</h1>
      <h1>Line is :{line}</h1>
      <button
        onClick={adder}
      >adder</button>
    </>
  )
}
export default App
