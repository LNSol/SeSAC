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
      <CreateMyPings open={modalOpen} close={closeModal} header='Create New Mypings'>
        마이핑스 생성 모다아아아아아알
      </CreateMyPings>
    </div>
  )
};

export default MyPage;
