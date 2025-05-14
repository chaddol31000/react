import React, { useState } from 'react'

// 여러 개의 input 관리하기
// 리액트는 객체를 찍으면 바로 죽어버림 그러니 객체를 바로 찍지 않도록 하자
// 
function App022() {
  const [name,setName] = useState('');
  const [nickname, setNickname] = useState('');

  const reset=()=> {
    setName('');
    setNickname('');
  }

  // const [inputs, setInputs] = useState({name:'', nickname:''});

  return (
    <div>
      <input placeholder='이름' onChange={(e)=>setName(e.target.value)} value={name} />
      <input placeholder='닉네임' onChange={(e)=>setNickname(e.target.value)} value={nickname} />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값:</b>{name}({nickname})
      </div>
    </div>
  )
}

export default App022