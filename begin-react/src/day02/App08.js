import React, { useState } from 'react'

// 리액트는 컴포넌트의 상태가 변경될 경우 메모리에 컴포넌트를 다시 그린다 (가상 DOM)
// 가상 DOM 과 실제 DOM 을 비교해서 변경된 부분을 업데이트
// 
function App08() {
  console.log("========================");
  let count = 1;
  console.log("========================");
  
  // 상태 num 과 그 상태의 값을 변경할 함수를 useState 리액트 함수(Hooks)을 이용해 생성
  // 객체구조분해 할당은 정해진 이름을 사용
  // const obj = {irum:'홍길동', nai:20};
  // const{xxx, yyy} = obj;     ← xx
  // const {irum, nai} = obj;   ← oo
  // 배열을 구조분해할당 할 때는 이름을 자유롭게 지정할 수 있다
  // const ar = [10, 20];
  // const [first, second] = ar;

  const [num, setNum] = useState(1);
  
  const countInc=()=> {
    count++;
    console.log(count);
  }
  const numInc=()=>setNum(num+1);

  return (
    <div>
      비상태: {count}, 상태: {num} <br />
      <button onClick={countInc}>상태가 아닌 값 증가</button>
      <button onClick={numInc}>상태 증가</button>
    </div>
  )
}
// 코드의 상태가 바뀌게 되면 초기화되어 처음부터 다시 실행하기 때문에
// 상태가 아닌 값이 아무리 증가해도 상태인 값이 바뀌게 되면 다시 처음부터 카운트됨

export default App08