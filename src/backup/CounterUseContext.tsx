import { useTestContext } from "./TestProvider";

function CounterUseContext() {
  const { increment, decrement, reset } = useTestContext();
  console.log("CounterUseContext 렌더링");
  return (
    <>
      <button onClick={decrement}>----</button>
      <button onClick={increment}>++++</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default CounterUseContext;
