import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../routes/routePath";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate(ROUTE_PATH.USE)}>
        클릭 시 자기자신으로 네비게이트
      </button>
    </header>
  );
}

export default Header;
