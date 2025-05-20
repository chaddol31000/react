import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../component/LoadingSpinner';
import axios from 'axios';
import { deleteByNoUrl, findByNoUrl } from '../component/constant';

function ContactRead() {
  // 훅은 전부 use 로 시작함
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const no = params.get('no');

  useEffect(()=> {
    async function fetch() {
      try {
        const response = await axios.get(findByNoUrl(no));
        setContact(response.data);
      }catch(err) {
        console.log(err);
      }
    }
    fetch();
  },[]);

  // 비동기 작업을 실행하면 결과값은 Promise 객체(나중에 완료되면 값이 저장될거라는 약속)
  // 과거에는 비동기작업.then(성공했을 때 함수).catch(실패했을 때 함수) → 이렇게 작성
  // 간단한 작업일 때는 간편하지만 여러 작업을 순서대로 해야하는 경우 매우 불편하다
      // ex. a().then(b().then(c().then().catch('c 실패')).catch('b 실패')).catch('a 실패') ← 여러 작업을 하면 이렇게 됨
      // 하지만 try catch 를 사용하면?
        /* then, catch 로 사용하다가 async, await 가 나옴
          try {
            await a();
            await b();
            await c();
          } catch(err) {
           console.log(err);
          }
        */
  // 비동기 작업이 성공하면 then 으로, 실패하면 catch 로 이동
  const remove=()=> axios.delete(deleteByNoUrl(no)).then(()=>navigate('/')).catch(err=>console.log(err));

  if (contact==null)
    return <LoadingSpinner />
  console.log(contact);
  return (
    <>
      <table className='table table-border'>
        <tbody>
          <tr>
            <td>
              <img src={contact.photo} />
            </td>
          </tr>
          <tr>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>{contact.tel}</td>
          </tr>
          <tr>
            <td>{contact.address}</td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={()=>navigate(`/update?no=${no}`)}>업데이트로</button>
      <button className='btn btn-danger' onClick={remove}>삭제하기</button>
    </>
  )
}

export default ContactRead