import React, { useState } from 'react'

// 여러 개의 input 관리하기
// 리액트는 객체를 찍으면 바로 죽어버림 그러니 객체를 바로 찍지 않도록 하자
// 
function App023() {

  const [inputs, setInputs] = useState({irum:'', nickname:''});

  const change=(e)=> {
    const {name, value} = e.target;
    // 1. inputs 를 irum 과 nickname 으로 분리
    // 2. {}로 irum 과 nickname 을 묶어 새로운 객체를 생성
    // 3. name 에는 irum, 또는 nickname 이라는 값이 담겨 있다
    //    name 변수를 이용해 irum 또는 nickname 을 value 로 바꿔주면 됨
    //    그런데 ↓ 처럼 적으면 {irum:'', nickname:'', name:'hello'} 이런 애가 생김
    //    즉, 새로운 필드를 추가해버린다
    // setInputs({...inputs, name:value})

    // 글자만 따로 분리하려면 대괄효 [] 를 사용하면 된다
    setInputs({...inputs, [name]:value});
  }

  // 이건 객체를 새로 만든 것. useState 와는 관계 없음
  const reset=()=>{
    setInputs({irum:'', nickname:''})
  }
  
  return (
    <div>
      <input placeholder='이름' onChange={change} value={inputs.irum} name='irum' />
      <input placeholder='닉네임' onChange={change} value={inputs.nickname} name='nickname' />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값:</b>{inputs.irum}({inputs.nickname})
      </div>
    </div>
  )
}

export default App023