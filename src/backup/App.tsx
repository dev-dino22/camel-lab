import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

// CSS CPU animation: slideUp (margin-top 변화 → 레이아웃, 페인트 영향)
const slideUpCpuKeyframes = keyframes`
  0% {
    opacity: 0;
    margin-top: 50px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

// CSS GPU animation: slideUp (transform을 사용 → GPU 가속)
const slideUpGpuKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  padding: 20px;
  font-family: sans-serif;
  max-width: 400px;
  margin: 0 auto;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

const SlideUpCpu = styled.div`
  animation: ${slideUpCpuKeyframes} 0.6s ease forwards;
`;

const SlideUpGpu = styled.div`
  animation: ${slideUpGpuKeyframes} 0.6s ease forwards;
  will-change: transform, opacity;
`;

function App() {
  const [showCpu, setShowCpu] = useState(false);
  const [showGpu, setShowGpu] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const jsRef = useRef<HTMLDivElement>(null);

  // Javascript 애니메이션 (style.top 직접 변경, CPU 부하 있음)
  const runJsAnimation = () => {
    if (!jsRef.current) return;
    const el = jsRef.current;

    el.style.opacity = "0";
    el.style.position = "relative";
    el.style.top = "50px";

    let start: number | null = null;
    const duration = 600;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // top과 opacity 직접 변경 (layout/repaint 비용 발생)
      el.style.top = `${50 - 50 * progress}px`;
      el.style.opacity = progress.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  };

  return (
    <Container>
      <div>
        <h2>CSS CPU Animation (margin-top)</h2>
        {showCpu && <SlideUpCpu>A 텍스트 (CPU 애니메이션)</SlideUpCpu>}
        <Button onClick={() => setShowCpu(true)}>애니메이션 실행</Button>
      </div>

      <div>
        <h2>JavaScript Animation (style.top)</h2>
        <div
          ref={jsRef}
          style={{
            fontSize: 24,
            marginTop: showJs ? 0 : 50,
            opacity: showJs ? 1 : 0,
            backgroundColor: "#eee",
            padding: 20,
            borderRadius: 6,
            textAlign: "center",
            userSelect: "none",
            position: "relative",
          }}
        >
          B 텍스트 (JS 애니메이션)
        </div>
        <Button
          onClick={() => {
            setShowJs(false); // 리셋
            setTimeout(() => {
              setShowJs(true);
              runJsAnimation();
            }, 10);
          }}
        >
          애니메이션 실행
        </Button>
      </div>

      <div>
        <h2>CSS GPU Animation (transform)</h2>
        {showGpu && <SlideUpGpu>A 텍스트 (GPU 애니메이션)</SlideUpGpu>}
        <Button onClick={() => setShowGpu(true)}>애니메이션 실행</Button>
      </div>
    </Container>
  );
}

export default App;
