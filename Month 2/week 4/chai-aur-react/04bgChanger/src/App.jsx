import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('olive');

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{backgroundColor: bgColor}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setBgColor('red')}
              className="outline-none px-4 rounded-full text-white shadow-sm"
              style={{backgroundColor: "red"}}
            >
              Red
            </button>
            <button
              onClick={() => setBgColor('green')}
              className="outline-none px-4 rounded-full text-white shadow-sm"
              style={{backgroundColor: "green"}}
            >
              Green
            </button>
            <button
              onClick={() => setBgColor('blue')}
              className="outline-none px-4 rounded-full text-white shadow-sm"
              style={{backgroundColor: "blue"}}
            >
              Blue
            </button>
            <button
              onClick={() => setBgColor('olive')}
              className="outline-none px-4 rounded-full text-white shadow-sm"
              style={{backgroundColor: "olive"}}
            >
              Olive
            </button>
            <button
              onClick={() => setBgColor('pink')}
              className="outline-none px-4 rounded-full text-white shadow-sm"
              style={{backgroundColor: "pink"}}
            >
              Pink
            </button>
            <button
              onClick={() => setBgColor('orange')}
              className="outline-none px-4 rounded-full text-white shadow-sm"
              style={{backgroundColor: "orange"}}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
