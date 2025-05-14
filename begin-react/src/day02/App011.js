import React, { useState } from 'react'

function App011() {
  const off = 'https://www.w3schools.com/js/pic_bulboff.gif'
  const on = 'https://www.w3schools.com/js/pic_bulbon.gif'

  // 상태가 on, off, 버튼에 들어갈 이름 켜기, 끄기 해서 상태 종류가 총 2개
  const [url,setUrl] = useState(off);
  const [title, setTitle] = useState("켜기");
  
  // 한 버튼으로 2가지 기능을 하기에 변수 하나를 만들어서 if 문으로 연결
  const toggle=()=> {
    if(title==="켜기") {
      setUrl(on);
      setTitle("끄기");
    } else {
      setUrl(off);
      setTitle("켜기");
    }
  }

  return (
    <div>
      {/* 이벤트 처리를 if 문 연결한 걸로 연결하고 버튼 이름으로 title 불러오기 */}
      <button onClick={toggle}>{title}</button>
      <img src={url}/>
    </div>
  )
}

export default App011