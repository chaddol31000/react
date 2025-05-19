import React, { useState } from 'react'


// 지금 필요한 상태는
  // 구매 예정 금액? 
  // 숫자 카운트 (1에서 안 내려가는)

function App012() { 

  const snack = 'https://namu.wiki/w/%ED%99%88%EB%9F%B0%EB%B3%BC%28%EA%B3%BC%EC%9E%90%29'
  
  const [price, setPrice] = useState(1520);
  const [count, setCount] = useState(1);

  const countDec=()=> {
    setCount(count-1);
    setPrice(price-1520);
    if(count===0) {
      setCount(1);
      setPrice(price+1520);
    }
  }

  const countInc=()=> {
    setCount(count+1);
    setPrice(price+1520);
  }


  return (
    <div>
      <h1>상품</h1>
      <img src={snack}/>
      <h1>구매 예정 금액</h1>
      <div>{price}원</div>
      <button onClick={countInc}>+</button>
      <div>{count}</div>
      <button onClick={countDec}>-</button>
    </div>
  )
}

export default App012