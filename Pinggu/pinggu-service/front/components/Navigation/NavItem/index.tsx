import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

interface IProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

export const Base = styled.nav<{ [key: string]: any }>`
  width: 100%;
  height: 70px;
  background-color: ${({ active }) => (active ? '#fff' : '#ffcc35')};
  border-bottom: 1px solid #000;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    transition: 0.3s;
    z-index: 3000;

    > .icon {
      font-size: 24px;
    }
    > .title {
      font-size: 12px;
      margin-top: 2px;
    }

    &:hover {
      background-color: ${({ active }) => (active ? '#fff' : 'rgb(36, 31, 27)')};
      color: ${({ active }) => (active ? '#000' : '#fff')};
    }
  }
`;

const NavItem: FC<IProps> = ({ title, icon, url }) => {
  const { pathname } = useLocation();
  return (
    <Base active={pathname === url}>
      <Link to={url}>
        <span className={'icon'}>{icon}</span>
        <span className={'title'}>{title}</span>
      </Link>
    </Base>
  );
};

export default NavItem;
