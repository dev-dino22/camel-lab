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
      <h1>메인 페이지</h1>
    </div>
  );
}

export default App;
