import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: React.ReactNode;
  show: boolean;
  onCloseModal: () => void;
}

export const Base = styled.div`
  position: fixed;
  top: 0;
  left: 86px;
  right: 0;
  bottom: 0;
  z-index: 4000;
`;

const Modal: FC<IProps> = ({ children, show, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <Base onClick={onCloseModal}>
      <div onClick={stopPropagation}>{children}</div>
    </Base>
  );
};

export default Modal;
