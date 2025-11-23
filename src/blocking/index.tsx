import { useState, startTransition } from "react";

function BlockingPage() {
  const [text, setText] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setInputVal(val);
    startTransition(() => {
      setText(val);
    });
  };

  const totalCells = text.length * 4000;
  const cells = Array.from({ length: totalCells });

  const columns = Math.floor(600 / 20);

  return (
    <div style={styles.container}>
      <h2>입력한 글자 수: {text.length}</h2>
      <h2>총 셀 수: {totalCells}</h2>
      <input
        type="text"
        value={inputVal}
        onChange={handleChange}
        placeholder="글자를 입력해보세요"
        style={styles.input}
      />
      <div
        style={{
          ...styles.grid,
          width: 600,
          height: 400,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {cells.map((_, i) => {
          const row = Math.floor(i / columns);
          const col = i % columns;
          const isLightBlue = (row + col) % 2 === 0;
          return (
            <div
              key={i}
              style={{
                ...styles.cell,
                backgroundColor: isLightBlue ? "#ADD8E6" : "#004080",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  input: {
    padding: "10px",
    width: "300px",
    fontSize: "16px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "1px",
    marginTop: "20px",
    overflow: "auto",
    border: "1px solid #ccc",
  },
  cell: {
    width: "20px",
    height: "20px",
    borderRadius: "2px",
    transition: "all 0.2s ease-in-out",
  },
};

export default BlockingPage;
