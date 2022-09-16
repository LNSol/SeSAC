import React, { useState, useCallback } from 'react';
import CreateMyPings from '../../components/Modal/CreateMyPings';
import UpdateMyPings from '../../components/Modal/UpdateMyPings';

const MyPage = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [settingModalOpen, setSettingModalOpen] = useState(false);

  /* MyPings 생성 모달 */
  const openCreateModal = useCallback(() => {
    setCreateModalOpen(true);
  }, [createModalOpen]);
  const closeCreateModal = useCallback(() => {
    setCreateModalOpen(false);
  }, [createModalOpen]);

  /* MyPings 수정 모달 */
  const openUpdateModal = useCallback(() => {
    setUpdateModalOpen(true);
  }, [updateModalOpen]);
  const closeUpdateModal = useCallback(() => {
    setUpdateModalOpen(false);
  }, [updateModalOpen]);

  /* MyPings 설정 모달 */
  const openSettingModal = useCallback(() => {

  }, [settingModalOpen]);
  const closeSettingModal = useCallback(() => {

  }, [settingModalOpen]);

  return (
    <div>
      <div>
        <h2>MyPings 생성 테스트</h2>
        <button onClick={openCreateModal}>MyPings 생성</button>
        {createModalOpen &&
        <CreateMyPings close={closeCreateModal}>
          MyPings 생성하기
        </CreateMyPings>
        }
      </div>
      <div>
        <h2>MyPings 수정 테스트</h2>
        <button onClick={openUpdateModal}>MyPings 수정</button>
        {updateModalOpen &&
        <UpdateMyPings close={closeUpdateModal}>
          MyPings 수정하기
        </UpdateMyPings>
        }
      </div>
      <div>
        <h2>MyPings 설정 테스트</h2>
        <button onClick={openSettingModal}>MyPings 설정</button>
      </div>
    </div>
  )
};

export default MyPage;
