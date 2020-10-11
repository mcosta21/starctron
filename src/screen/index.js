import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { darkTheme } from '../styles/theme';
import Routes from '../routes';
import MenuProvider from '../contexts/MenuContext';
import LoginProvider from '../contexts/LoginContext';
import { ThemeContext } from  '../contexts/ThemeContext';

function Screen() {
  
  const contextTheme = useContext(ThemeContext);

  const theme = contextTheme.theme.theme; // darkTheme or lightTheme
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
