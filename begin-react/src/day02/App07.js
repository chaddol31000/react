import React from "react";
import "./App03.css";

// 조건부 렌더링
const App07 = () => {
  const a = 10;
  const b = 15;

  return (
    <div>
      <div className={a % 2 == 0 ? "green" : "red"}>{a}</div>
      <div className={b % 2 == 0 ? "green" : "red"}>{b}</div>
    </div>
  );
};

export default App07;
