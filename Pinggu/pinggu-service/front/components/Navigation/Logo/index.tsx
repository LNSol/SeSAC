import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  icon: React.ReactNode;
  url: string;
}

export const Base = styled.nav<{ [key: string]: any }>`
  width: 100%;
  height: 100px;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    color: #7c8688;

    //> .icon {
    //  font-size: 24px;
    //}
    > .title {
      font-size: 22px;
      font-weight: 800;
    }
  }
`;

const Logo: FC<IProps> = ({ title, icon, url }) => {
  return (
    <Base>
      <Link to={url}>
        {/*<span className={'icon'}>{icon}</span>*/}
        <span className={'title'}>{title}</span>
      </Link>
    </Base>
  );
};

export default Logo;
