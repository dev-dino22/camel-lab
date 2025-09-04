// Slide2.tsx
import styled from "@emotion/styled";

const Box = styled.div`
  width: 200px;
  height: 100px;
  background: lightgreen;

  /* 같은 이름 slideUp 정의 - 위로 슬라이드 */
  @keyframes slideUp {
    0% {
      transform: translateY(-100%);
      background: purple;
    }
    100% {
      transform: translateY(0);
      background: lightgreen;
    }
  }

  animation: slideUp 1s ease-out both;
`;

export default function Slide2() {
  return <Box>Slide 2</Box>;
}
