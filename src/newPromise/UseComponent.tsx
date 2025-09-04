import { use } from "react";

function UseComponent({ promiseData }: { promiseData: Promise<string> }) {
  const data = use(promiseData);
  console.log("UseComponent rendered");

  return (
    <div>
      <h2>data 반환값: {data}</h2>
    </div>
  );
}

export default UseComponent;
