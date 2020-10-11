import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './screen';
import ThemeProvider from  './contexts/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <Screen/>
  </ThemeProvider>,
  document.getElementById('root')
);
