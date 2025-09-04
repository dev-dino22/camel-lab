import { useCallback, useState } from "react";

class TestClass {
  data = new Uint32Array(1024 * 1024 * 10);
}

export default function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const newValue = new TestClass();

  const handleA = useCallback(() => {
    setState1(state1 + 1);
  }, [state1]);

  const handleB = useCallback(() => {
    setState2(state2 + 1);
  }, [state2]);

  const testHandle = () => {
    handleA();
    handleB();
    console.log(newValue);
    debugger;
  };

  return (
    <div>
      <button onClick={handleA}>A</button>
      <button onClick={handleB}>B</button>
      <button onClick={testHandle}>T</button>
    </div>
  );
}
