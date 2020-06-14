import React from 'react';
import Routes from './routes/Routes';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './assets/themes/theme';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    // <ThemeProvider theme={theme}>
      // <CssBaseline/>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
