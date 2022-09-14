import React, { FC, useEffect } from 'react';
import Navigation from '@components/Navigation';
import styled from '@emotion/styled';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { CloseButton } from '@components/MainModal';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@themes/themes';

interface IProps {
  children: React.ReactNode;
}

const Base = styled.div`
  width: 100vw;
  min-height: 100vh;

  > main {
    position: absolute;
    left: 86px;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #b6bbc6;
  }
`;

const Layout: FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Navigation />
        <main>{children}</main>
      </Base>
    </ThemeProvider>
  );
};

export default Layout;
