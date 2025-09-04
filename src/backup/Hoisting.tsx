import styled from "@emotion/styled";
import { useState } from "react";

function Hoisting() {
  consolePrint("Hoisting component rendered");
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <S.Title hidden={hidden}>Hoisting Example</S.Title>
      <button onClick={() => setHidden(!hidden)}>Toggle Title</button>
      <ConsoleComponent />
    </div>
  );
}

export default Hoisting;

const S = {
  Title: styled.h1<{ hidden: boolean }>`
    /* display: ${(props) => (props.hidden ? "none" : "block")}; */
    visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  `,
};

const consolePrint = (message: string) => {
  console.log(message);
};

const ConsoleComponent = () => {
  consolePrint("ConsoleComponent rendered");
  return <div>콘솔컴포넌트</div>;
};
