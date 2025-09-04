import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const abc = 10;

  function outer() {
    const a = 1;
    const b = 2;

    return function inner() {
      //console.log(a);
      debugger; // 여기에 멈춤
    };
  }

  const fn = outer();

  return (
    <>
      <button onClick={fn}>count is {count}</button>
    </>
  );
}

export default App;
