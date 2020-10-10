import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyle';
import { lightTheme } from '../styles/theme';
import Routes from '../routes';
import MenuProvider from '../contexts/MenuContext';
import LoginProvider from '../contexts/LoginContext';

function Screen() {
  const theme = lightTheme; // darkTheme or lightTheme
  return (
        <ThemeProvider theme={ theme }>
          <LoginProvider>
            <MenuProvider>
              <Routes/>
              <GlobalStyle/>
            </MenuProvider>
          </LoginProvider>
        </ThemeProvider>
  );
}

export default Screen;
