import { useState } from "react";

function SetStatePage() {
  console.log("SetStatePage 리렌더링!");
  const [state, setState] = useState(true);
  const [count, setCount] = useState(0);

  //   const handleClick1 = () => {
  //     setState(false);
  //     setState(true);
  //   };

  const handleClick2 = () => {
    setTimeout(() => {
      setState(false);
    }, 3000);
    setState(true);
  };

  const handleClick3 = () => {
    setCount(1);
    setCount((prevCount) => prevCount + 1);
    const currentCount = count;
    setCount(currentCount);
  };
  return (
    <div>
      <h1>State 실험 페이지 : {state ? "true" : "false"}</h1>
      <button onClick={handleClick2}>상태 변경</button>
      <h2>현재 state: {state}</h2>
      <button onClick={handleClick3}>카운트 증가</button>
      <h2>count: {count}</h2>
    </div>
  );
}

export default SetStatePage;
