import React, { useState, useEffect } from 'react';
import CreateMyPings from '../../components/Modal/CreateMyPings';

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>MyPings 생성 테스트</h2>
      <button onClick={openModal}>MyPings 생성</button>
      {modalOpen &&
      <CreateMyPings open={modalOpen} close={closeModal} header='Create New Mypings'>
        MyPings 생성하기
      </CreateMyPings>
      }
    </div>
  )
};

export default MyPage;
