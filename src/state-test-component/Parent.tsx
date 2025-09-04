import { useState } from "react";
import Child2 from "./Child2";
import Text1 from "./Text1";

function Parent({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  console.log("Parent 컴포넌트 렌더링");
  const updateCount = () => {
    setCount((prev) => prev + 1);
    setTimeout(() => {
      setCount((prev) => prev + 1000000000000000);
    }, 1000);
  };

  return (
    <div>
      <Text1 />
      <p>현재 카운트: {count}</p>
      <p>자식 컴포넌트들을 렌더링합니다.</p>
      {children}
      <Child2 />
      <button onClick={updateCount}>++++</button>
    </div>
  );
}

export default Parent;
