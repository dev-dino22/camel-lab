import { Suspense, useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../routes/routePath";
import Header from "./Header";
import UseComponent from "./UseComponent";
import { api } from "./mockAPI";

function UsePage() {
  console.log("UsePage 리렌더링!");
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button onClick={() => navigate(ROUTE_PATH.USE)}>
        여기 페이지로 다시 이동
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        카운트 증가: {count}
      </button>
      <Header />
      <UseComponent promiseData={api.get()} />
    </Suspense>
  );
}

export default UsePage;
