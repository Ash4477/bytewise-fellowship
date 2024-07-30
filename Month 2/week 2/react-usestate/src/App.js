import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount(prevCount => prevCount-1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount+1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
