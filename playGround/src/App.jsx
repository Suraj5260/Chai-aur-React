import { useState } from 'react'




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

function App() {

  const [color, setColor] = useState("green")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }} >


      </div>
    </>

  )
}

export default App
