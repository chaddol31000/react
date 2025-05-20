import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { changePhotoUrl, createUrl } from '../component/constant';

function ContactWrite() {
  // application/json 으로 넘긴다
  const [fromData, setFormData] = useState({name:'', tel:'', address:''});
  // multipart/form-data 로 넘긴다
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  const changePhoto=(e)=> {
    // e.target 이라고 하면 이벤트가 발생한 html 요소 : <input type='file'~~~ >
    // file 요소에는 files 라고 하는 배열이 있음 (사진은 multiple 속성을 추가하면 사진을 여러 장 선택할 수 있기에 배열임)
    // onChange={changePhoto} multiple
    setPhoto(e.target.files[0])
  }
  
  const changeFormData=(e)=> {
    const {name, value} = e.target;
    setFormData(prev=> ({...prev, [name]:value}));
  }

  const writeContact=async()=> {
    try {
    // 1. post/contacts 로 연락처 추가 요청 보낸다
      const response = await axios.post(createUrl(),fromData);
    // 2. 응답을 받아서 새로운 contact 의 no 를 꺼낸다
      const newNo = response.data.no;
    // 3. no를 이용해서 사진을 변경한다 (photo의 기본값은 빈 문자열 '' JS 는 빈값('',null,undefined)를 false 로 취급함)
      if(photo) {
        const photoData = new FormData();
        photoData.append('photo', photo);
        // axios 의 기본 형식은 application/json → 지금 보낸 파일의 형식을 header 에 form-data 라고 기록해서 서버로 전송
        await axios.post(changePhotoUrl(newNo), photoData, {
          headers: {'Content-Type':'multipart/form-data'}
      });
      }
    // 4. 읽기로 이동한다
      navigate(`/read?no=${newNo}`);
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className='mb-3 mt-3'>
        <label htmlFor='photo' className='form-label'>사진</label>
        <input type='file' className='form-control' name='photo' onChange={changePhoto} />
      </div>
      <div className='mb-3 mt-3'>
        <label htmlFor='name' className='form-label'>이름</label>
        <input type='text' className='form-control' name='name' onChange={changeFormData} />
      </div>
      <div className='mb-3 mt-3'>
        <label htmlFor='address' className='form-label'>주소</label>
        <input type='text' className='form-control' name='address' onChange={changeFormData} />
      </div>
      <div className='mb-3 mt-3'>
        <label htmlFor='tel' className='form-label'>연락처</label>
        <input type='text' className='form-control' name='tel' onChange={changeFormData} />
      </div>
      <div className='mb-3 mt-3'>
        <button className='btn btn-primary' onClick={writeContact}>연락처 추가</button>
      </div>
    </>
  )
}

export default ContactWrite

/*
  연락처 : 사진, 이름, 주소, tel
  post/contacts
    이름, 주소, tel → 사진은 레고 블록 사진

  post/contacts/연락처번호/photo
    사진을 변경
*/