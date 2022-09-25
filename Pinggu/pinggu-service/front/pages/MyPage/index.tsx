import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
// import CreateMyPings from '../../components/Modal/CreateMyPings';
// import UpdateMyPings from '../../components/Modal/UpdateMyPings';

interface User {
  id: number,
  nickname: string,
  profile_image_url: string
}

const MyPage = () => {
  const history = useHistory();
  let im: User | null = null;
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [settingModalOpen, setSettingModalOpen] = useState(false);

  useEffect(() => {
    const getMe = async () => {
      const { data } = await axios.get('http://localhost:4000/me', { withCredentials: true });
      console.log(data);
    };
    getMe();
  }, []);
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

  /* 특정 마이핑스 보기 페이지로 이동 */
  const onClickMoveViewMypingsPage = useCallback((mypingsId) => {
    history.push(`/users/7/mypings/${mypingsId}`);
  }, []);

  /* 마이핑스 생성 페이지로 이동 */
  const onClickMoveCreateMypingsPage = useCallback(() => {
    history.push('/mypings/create');
  }, []);

  return (
    <div>
      <div>
        <a href='http://localhost:4000/auth/login/kakao'>카카오 로그인</a><br />
        <a href='http://localhost:4000/auth/login/google'>구글 로그인</a><br />
        <a href='http://localhost:4000/auth/logout'>로그아웃</a> <br />
        <button onClick={() => onClickMoveViewMypingsPage(1)}>1번 마이핑스 보기</button>
        <button onClick={onClickMoveCreateMypingsPage}>Mypings 생성하기</button>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  )
};

export default MyPage;
