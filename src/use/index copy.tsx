import { Suspense } from "react";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../routes/routePath";
import Header from "./Header";
import UseComponent from "./UseComponent";
import { api } from "./mockAPI";

function UsePage() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />{" "}
      {/* 이 헤더에는 현재 페이지로 navigate 를 일으키는 버튼 트리거가 포함되어 있다. */}
      <UseComponent promiseData={api.get()} />
      <button onClick={() => navigate(ROUTE_PATH.NEXT_PAGE)}>다음으로</button>
    </Suspense>
  );
}

export default UsePage;

// 이건 다른 궁금증인데, 이런 리렌더링이 일어나도 이런 리렌더링은 컴포넌트 하이라이트가 안잡히네. 프로파일도 안됨 ㅋㅋ
// 왜냐면 startTransition 은 다음 업데이트가 일어나기 전에 이전 화면 상태를 유지하기 때문인 거 같다.
// 정상적인 startTransition 의 리렌더링이 완료되면 하이라이트가 잡힌다.
