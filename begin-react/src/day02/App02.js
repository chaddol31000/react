import React from 'react'


// 표현식을 출력할 때는 {} 를 사용한다
// 표현식(expression) : 값이 될 수 있는 문장

function App02() {
  const a = 10;
  const b = a+10;
  return (
    <div>{a}+{b}={a+b}</div>
  )
}

export default App02