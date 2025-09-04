// Slide1.tsx
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    background: red;
  }
  100% {
    transform: translateY(0);
    background: lightblue;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 100px;
  background: lightblue;

  animation: ${slideUp} 1s ease-out both;
`;

export default function Slide1() {
  return <Box>Slide 1</Box>;
}
