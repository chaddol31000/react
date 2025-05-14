import React, { useState } from 'react'
  // 선생님 코드
    // 사진만 다름

  const product = {
    name : '홈런볼 초코',
    price : 1520,
    image : 'https://i.namu.wiki/i/zTfQR5U-nZ8joJTbDyb4_EKj6FzCqIbKVSPtjZ5sAXkUfVJNIVkVys2PZ7z1R0L2Scv9BuMv753XsXf3mEzhmeAkf750kEer4g_pM3_auSi2qIQ2xTyuppvFFUYHuS_t8cYWgh_hGHMi6zMcKXHZGg.webp',
    count : 1
  }

function App012_1() {
  const [item, setItem] = useState(product);

  // 리액트는 새로운 객체가 만들어져야 상태가 변경됐다는 사실을 눈치채고 재렌더링 하게 된다
  // 정 반대인 경우는 vue
  // vue 는 기존 객체의 값을 바꿔야 상태가 변경되었다는 사실을 눈치채고 재렌더링 하게 된다
  const inc=()=> {
    setItem({...item, count:item.count+1});
  }
  const dec=()=> {
    let count = item.count;
    if(count>1) {
      setItem({...item, count:item.count-1})
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>상품</th><th>구매예정금액</th><th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={item.image} width='200px'/></td>
            <td>{item.price * item.count}원</td>
            <td>
              <button onClick={inc}>+</button>
              <span>{item.count}</span>
              <button onClick={dec}>-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App012_1