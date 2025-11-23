import { Activity, useEffect, useState } from "react";

function ActivityTest() {
  const [actOpened, setActOpened] = useState(false);
  const [conditionalOpened, setConditionalOpened] = useState(false);

  return (
    <>
      <h1>Activity Test Page</h1>
      <section>
        <div>
          <button onClick={() => setActOpened((o) => !o)}>
            Activity 열고닫기 버튼
          </button>
          <button onClick={() => setConditionalOpened((o) => !o)}>
            Conditional 열고닫기 버튼
          </button>
        </div>
        <div>
          <ActivityDiv opened={actOpened} />
          <ConditionalDiv opened={conditionalOpened} />
        </div>
      </section>
    </>
  );
}

function ActivityDiv({ opened }: { opened: boolean }) {
  return (
    <Activity mode={opened ? "visible" : "hidden"}>
      <StatefulComponent name="Activity" />
    </Activity>
  );
}

function ConditionalDiv({ opened }: { opened: boolean }) {
  return <>{opened && <StatefulComponent name="Conditional" />}</>;
}

function StatefulComponent({ name }: { name: string }) {
  const [text, setText] = useState("");

  // 렌더링 부하 (DOM 3000개)
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i}`);

  useEffect(() => {
    console.log(`[${name}] Mounting... (초기화)`);
    // 무거운 연산 시뮬레이션
    const start = performance.now();
    while (performance.now() - start < 50) {}

    return () => console.log(`[${name}] Unmounting... (제거)`);
  }, [name]);

  return (
    <div>
      <p>입력값이 유지되는지 확인하세요:</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`${name} 입력`}
        style={{ marginBottom: 10, padding: 5 }}
      />
      <div style={{ height: "200px", overflow: "auto", background: "#f0f0f0" }}>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default ActivityTest;
