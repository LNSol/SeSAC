import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

interface IProps {
  icon: React.ReactNode;
  url: string;
}

export const Base = styled.nav<{ [key: string]: any }>`
  width: 100%;
  height: 70px;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    color: #7c8688;

    > .icon {
      font-size: 24px;
    }
  }
`;

const NavItemButtom: FC<IProps> = ({ icon, url }) => {
  const { pathname } = useLocation();
  return (
    <Base active={pathname === url}>
      <Link to={url}>
        <span className={'icon'}>{icon}</span>
        {/*<span className={'title'}>{title}</span>*/}
      </Link>
    </Base>
  );
};

export default NavItemButtom;
