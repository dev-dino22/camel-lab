import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getListData } from "./api/getListData";
import { useState } from "react";

// 🔹 QueryClient 생성
const queryClient = new QueryClient();

function App() {
  // 🔸 상태 관리
  const [filterOption, setFilterOption] = useState({
    category: { value: "전체" },
    sort: { value: "asc" },
  });

  // 🔸 useQuery 훅을 사용하여 API 요청
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["productList", filterOption],
    queryFn: () => getListData(filterOption),
    keepPreviousData: true,
  });

  // 🔸 카테고리 변경 핸들러
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterOption((prev) => ({
      ...prev,
      category: { value: event.target.value },
    }));
  };

  // 🔸 정렬 변경 핸들러
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption((prev) => ({
      ...prev,
      sort: { value: event.target.value },
    }));
  };

  // 🔸 로딩 중일 때
  if (isLoading) return <p>로딩 중입니다...</p>;

  // 🔸 에러 발생 시
  if (isError) return <p>에러가 발생했습니다. 다시 시도해주세요.</p>;

  return (
    <div className="App">
      <h1>🛒 상품 목록</h1>
      <button onClick={() => refetch()}>🔄 새로고침</button>

      {/* 🔸 필터 선택 */}
      <div>
        <select onChange={handleCategoryChange} defaultValue="전체">
          <option value="전체">전체</option>
          <option value="전자제품">전자제품</option>
          <option value="가전">가전</option>
        </select>

        <select onChange={handleSortChange} defaultValue="asc">
          <option value="asc">낮은 가격순</option>
          <option value="desc">높은 가격순</option>
        </select>
      </div>

      {/* 🔸 상품 목록 */}
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>가격: {product.price}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🔸 Provider로 QueryClient 주입
export default function RootApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
