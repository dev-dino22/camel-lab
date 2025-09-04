import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const TestContext = createContext(null);

export const TestProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);
  const reset = useCallback(() => setCount(0), []);
  // const value = useMemo(
  //   () => ({ increment, decrement, reset }),
  //   [increment, decrement, reset]
  // );
  return (
    <TestContext.Provider value={{ increment, decrement, reset }}>
      {children}
      <div>count: {count}</div>
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }

  const { increment, decrement, reset } = context;
  return { increment, decrement, reset };
};
