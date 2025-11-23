import { startTransition, Suspense, useState } from "react";
import UseComponent from "./UseComponent";
import { api } from "./mockAPI";
import UseComponent2 from "./UseComponent2";

function UsePage() {
  const [count, setCount] = useState(0);
  // const [transitionCount, setTransitionCount] = useState(0);

  // function updateTransitionState() {
  //   startTransition(() => {
  //     setTransitionCount((c) => c + 1);
  //   });
  // }

  function updateState() {
    setCount((c) => c + 1);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button onClick={updateState}>state 업데이트: {count}</button>
      {/* <button onClick={updateTransitionState}>
        startTransition 업데이트: {transitionCount}
      </button> */}

      <UseComponent promiseData={api.get()} />
    </Suspense>
  );
}

export default UsePage;

// 이건 다른 궁금증인데, 이런 리렌더링이 일어나도 이런 리렌더링은 컴포넌트 하이라이트가 안잡히네. 프로파일도 안됨 ㅋㅋ
