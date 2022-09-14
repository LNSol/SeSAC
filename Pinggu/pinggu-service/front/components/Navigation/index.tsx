import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import NavItem from '@components/Navigation/NavItem';
import { AiOutlineUser } from 'react-icons/ai';
import { VscHome } from 'react-icons/vsc';
import { GiPenguin } from 'react-icons/gi';
import { IoSettingsOutline, IoCompassOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useLocation } from 'react-router';
import Logo from '@components/Navigation/Logo';
import MainModal, { CloseButton } from '@components/MainModal';
import useCoords from '@hooks/useCoords';
import NavItemButtom from '@components/Navigation/NavItemButtom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const Base = styled.nav`
  width: 86px;
  height: 100vh;
  position: fixed;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3000;
`;

export const OpenButton = styled(CloseButton)`
  right: -27px;
`;

const Navigation = () => {
  const [showModal, setShowModal] = useState({ showMainModal: true });

  const onClickModal = useCallback((modalName: string) => {
    setShowModal((prev) => ({ ...prev, [modalName]: true }));
  }, []);
  const onCloseModal = useCallback(() => {
    setShowModal({ showMainModal: false });
  }, []);

  return (
    <>
      <Base>
        <OpenButton onClick={() => onClickModal('showMainModal')}>
          <MdKeyboardArrowLeft />
        </OpenButton>
        <ul>
          <Logo title={'Pingu'} icon={<GiPenguin />} url={'/'} />
          <NavItem title={'홈'} icon={<VscHome />} url={'/'} />
          <NavItem title={'탐색'} icon={<IoCompassOutline />} url={'/explore'} />
          <NavItem title={'마이페이지'} icon={<BsPerson />} url={'/mypage'} />
          <NavItem title={'설정'} icon={<IoSettingsOutline />} url={'/settings'} />
        </ul>
        <ul>
          <NavItemButtom icon={<HiOutlineInformationCircle />} url={'/about'} />
        </ul>
      </Base>
      <MainModal show={showModal.showMainModal} onCloseModal={onCloseModal} />
    </>
  );
};

export default Navigation;
