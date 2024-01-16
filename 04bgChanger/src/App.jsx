import { useState } from "react"


function App() {
  const [color, SetColor] = useState("grey")

  return (
    <div className="w-full flex justify-center h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="  bg-white size-max justify-center outline-none px-4  py-1 my-10  rounded-full  shadow-lg">Color is {color}</div>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 shadow-lg py-2 rounded-3xl ">
          <button
            onClick={() => SetColor("Red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => SetColor("green")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => SetColor("blue")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => SetColor("olive")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >Olive</button>
          <button
            onClick={() => SetColor("yellow")}
            className=" outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
            onClick={() => SetColor("pink")}
            className=" outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "pink" }}
          >Pink</button>
          <button
            onClick={() => SetColor("purple")}
            className=" outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "purple" }}
          >Purple</button>
          <button
            onClick={() => SetColor("lavender")}
            className=" outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >Lavender</button>
          <button
            onClick={() => SetColor("white")}
            className=" outline-none px-4 py-1 rounded-full  shadow-lg"
            style={{ backgroundColor: "white" }}
          >White</button>
          <button
            onClick={() => SetColor("black")}
            className=" outline-none px-4 py-1 rounded-full  text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >Black</button>
        </div>
      </div>
    </div >
  )
}

export default App
