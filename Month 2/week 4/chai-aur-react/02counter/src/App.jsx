import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter >= 20) return;
    setCounter(++counter);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(--counter);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>value: {counter}</h2>
      <button
        onClick={addValue}
      >
        Add value{counter}
      </button>
      <br />
      <button
        onClick={removeValue}
      >
        Remove value{counter}
      </button>

    </>
  )
}

export default App
