function Console({ boolean = true }) {
  console.log("콘솔 컴포넌트 리렌더링!");
  if (!boolean) {
    throw new Promise(() => setTimeout(() => (boolean = true), 1000));
  }
  return <div>콘솔 컴포넌트</div>;
}

export default Console;
