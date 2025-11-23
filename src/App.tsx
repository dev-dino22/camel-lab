import { useNavigate } from "react-router";
import { ROUTE_PATH } from "./routes/routePath";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(ROUTE_PATH.USE)}>
        클릭 시 Use 실험 페이지로 이동
      </button>
      <button onClick={() => navigate(ROUTE_PATH.NEW_PROMISE)}>
        클릭 시 New Promise 실험 페이지로 이동
      </button>
      <button onClick={() => navigate(ROUTE_PATH.SET_STATE)}>
        클릭 시 State 실험 페이지로 이동
      </button>
      <button onClick={() => navigate(ROUTE_PATH.UPDATE_STATE)}>
        클릭 시 Update State 실험 페이지로 이동
      </button>
      <button onClick={() => navigate(ROUTE_PATH.CSS_TEST)}>
        클릭 시 CSS 실험 페이지로 이동
      </button>
      <button onClick={() => navigate(ROUTE_PATH.BLOCKING)}>
        클릭 시 Blocking 실험 페이지로 이동
      </button>
      <button onClick={() => navigate(ROUTE_PATH.ACTIVITY_TEST)}>
        클릭 시 Activity Test 페이지로 이동
      </button>
      <h1>메인 페이지</h1>
    </div>
  );
}

export default App;
