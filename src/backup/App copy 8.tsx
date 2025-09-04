import { useState } from "react";

function Counter({ ...props }) {
  const [count, setCount] = useState(0);
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

const data = {
  isOpened: false,
  component: {
    id: "counter",
    component: <Counter />,
  },
};
// 5. 메인 앱 컴포넌트
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isInstanceCountOpened, setIsInstanceCountOpened] = useState(false);

  return (
    <div>
      {isOpened && data.component.id === "counter" && data.component.component}

      <button
        onClick={() => {
          setIsOpened((prev) => !prev);
          data.isOpened = !data.isOpened;
        }}
      >
        Counter 열고 닫기 버튼
      </button>
      <button onClick={() => setIsInstanceCountOpened((prev) => !prev)}>
        저장된 인스턴스 불러와서 렌더링
      </button>
      <div>
        {isInstanceCountOpened &&
          data.component.id === "counter" &&
          data.component.component}
      </div>
    </div>
  );
}
