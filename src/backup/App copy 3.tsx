import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

// 🔍 Counter 컴포넌트 정의 (Forwarded Ref 사용)
const Counter = ({ ref }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // 🔍 useImperativeHandle로 외부에 메서드와 상태 노출
  useImperativeHandle(ref, () => ({
    increment,
    getCount: () => count,
    render: () => (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <p>Count: {count}</p>
        <button onClick={increment}>Count Up</button>
      </div>
    ),
  }));

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>Count: {count}</p>
      <button onClick={increment}>Count Up</button>
    </div>
  );
};

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [renderedInstance, setRenderedInstance] = useState<JSX.Element | null>(
    null
  );
  const counterRef = useRef(null);
  const instanceStore = useRef<any>(null);

  const openHandler = () => {
    setIsOpened(true);
  };
  const closeHandler = () => {
    setIsOpened(false);
  };

  const saveInstanceHandler = () => {
    if (counterRef.current) {
      instanceStore.current = counterRef.current;
      console.log("💾 인스턴스 저장됨:", instanceStore);
    }
  };

  const restoreInstanceHandler = () => {
    if (instanceStore.current) {
      console.log("🔄 저장된 인스턴스 호출");
      console.log("🧐 현재 카운트 값:", instanceStore.current.getCount());
      setRenderedInstance(instanceStore.current.render());
    }
  };

  return (
    <div>
      {isOpened && <Counter ref={counterRef} />}
      <button onClick={openHandler}>Counter 생성</button>
      <button onClick={closeHandler}>Counter 제거</button>
      <button onClick={saveInstanceHandler}>현재 인스턴스 저장하기</button>
      <button onClick={restoreInstanceHandler}>
        저장된 인스턴스 불러와서 렌더링
      </button>
      <div
        style={{
          marginTop: "20px",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <p>저장된 인스턴스가 렌더링될 공간</p>
        {renderedInstance}
      </div>
    </div>
  );
}
