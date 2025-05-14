// 리액트 컴퍼넌트 : css + html + js 를 하나의 파일에 사용자 정의 태그
// 파이썬은 py 파일이 모듈이 되고 다른 곳에서 import 를 이용해 타인이 작성한 py 에 담긴 함수, 객체 등을 가져다 사용할 수 있었다
// JS 모듈에서는 개발자가 export 한 함수, 객체만 다른 사람이 import 해서 사용할 수 있다
// 하나만 export 할 때 export default 문법을 사용

import React from 'react'

function Hello() {
  // 자바스크립트 영역
  return (
    // JSX (react의 독자적인 문법)
    // 1. 태그는 반드시 닫는다
    // 2. 전체를 감싸는 root 태그가 있어야 한다
    // 3. <></> 제공 → div 대신 사용 → html 에서는 나타나지 x
    <div>Hello</div>
  )
}

export default Hello