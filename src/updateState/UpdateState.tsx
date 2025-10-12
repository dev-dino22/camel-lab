let outCount = 0;

function UpdateState() {
  const handleOutCount = () => {
    setTimeout(() => {
      console.log("outCount:", outCount);
      outCount++;
    }, 1000);
  };

  return (
    <div>
      outCount: {outCount}
      <button onClick={handleOutCount}>외부변수 업데이트!</button>
    </div>
  );
}

export default UpdateState;
