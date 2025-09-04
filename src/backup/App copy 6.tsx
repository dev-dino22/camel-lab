import React, { useState, useRef } from "react";

// 🔍 Counter 컴포넌트 정의
const Counter = ({ count, onIncrement }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>Current Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

// 🔍 App 컴포넌트 정의
export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const instanceStore = useRef({
    count: 0,
  });

  const handleIncrement = () => {
    instanceStore.current.count += 1;
  };

  const handleClose = () => {
    console.log("🛑 컴포넌트를 숨깁니다.");
    setIsVisible(false);
  };

  const handleOpen = () => {
    console.log("🔄 컴포넌트를 다시 엽니다.");
    setIsVisible(true);
  };

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={handleOpen}>Open Counter</button>
      <button onClick={handleClose}>Close Counter</button>
      <div style={{ marginTop: "20px" }}>
        {isVisible && (
          <Counter
            count={instanceStore.current.count}
            onIncrement={handleIncrement}
          />
        )}
      </div>
    </div>
  );
}
