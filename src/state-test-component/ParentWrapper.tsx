import Child1 from "./Child1";
import Parent from "./Parent";

function ParentWrapper() {
  console.log("ParentWrapper 렌더링");

  return (
    <Parent>
      <Child1 />
    </Parent>
  );
}

export default ParentWrapper;
