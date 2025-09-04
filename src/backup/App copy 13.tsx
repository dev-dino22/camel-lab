import { useState } from "react";

function Counter({ isOpen, ...props }) {
  const [count, setCount] = useState(0);
  if (!isOpen.isOpen)
    return (
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count Up
      </button>
    );

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Count Up
      </button>
    </div>
  );
}

export default function App() {
  const [o_overlayData, setO_overlayData] = useState({
    counter: {
      isUnmounted: false,
      isOpen: false,
      Component: (isOpen: boolean) => <Counter isOpen={isOpen} />,
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          setO_overlayData((prev) => ({
            ...prev,
            counter: { ...prev.counter, isOpen: !prev.counter.isOpen },
          }));
        }}
      >
        Counter 열고 닫기 버튼(클로즈)
      </button>
      <button
        onClick={() => {
          setO_overlayData((prev) => ({
            ...prev,
            counter: {
              ...prev.counter,
              isUnmounted: !prev.counter.isUnmounted,
            },
          }));
        }}
      >
        Counter 열고 닫기 버튼(언마운트)
      </button>
      {Object.entries(o_overlayData).map(([key, value]) => {
        const { isUnmounted, isOpen, Component } = value;
        return isUnmounted ? <Component isOpen={isOpen} /> : null;
      })}
    </div>
  );
}
