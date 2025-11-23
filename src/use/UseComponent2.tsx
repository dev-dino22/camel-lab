import { use } from "react";

function UseComponent2({ promiseData }: { promiseData: Promise<string> }) {
  console.log("UseComponent2 리렌더링! use() 호출 전");
  const data = use(promiseData);

  return (
    <div>
      <h2>data 반환값: {data}</h2>
    </div>
  );
}

export default UseComponent2;
