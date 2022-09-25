import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import Modal from '@components/Modal';
import { Route, Switch } from 'react-router';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import loadable from '@loadable/component';

const Home = loadable(() => import('@pages/Home'));
const About = loadable(() => import('@pages/About'));
const MyPage = loadable(() => import('@pages/MyPage'));
const Settings = loadable(() => import('@pages/Settings'));
const ViewMypings = loadable(() => import('../../pages/Mypings/ViewMypings'));
const CreateMypings = loadable(() => import('../../pages/Mypings/CreateMypings'));
interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

export const ModalContent = styled.div`
  position: absolute;
  left: 0;
  width: 600px;
  height: 100vh;
  background-color: #e7eced;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const CloseButton = styled.button`
  font-size: 22px;
  width: 27px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -27px;
  border: none;
  background-color: #e7eced;
  border-radius: 0 4px 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #292929;
  cursor: pointer;
`;

const MainModal: FC<IProps> = ({ show, onCloseModal }) => {
  return (
    <Modal show={show} onCloseModal={() => null}>
      <ModalContent>
        <CloseButton onClick={onCloseModal}>
          <MdKeyboardArrowLeft />
        </CloseButton>
        <Switch>
          <Route path={'/mypings/create'} component={CreateMypings} />
          <Route path={'/users/:userId/mypings/:mypingsId'} component={ViewMypings} />
          <Route path={'/explore'} component={Home} />
          <Route path={'/mypage'} component={MyPage} />
          <Route path={'/settings'} component={Settings} />
          <Route path={'/about'} component={About} />
          <Route path={'/'} component={Home} />
        </Switch>
      </ModalContent>
    </Modal>
  );
};

export default MainModal;
