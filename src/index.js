import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import qhatuStore from './core/stores/qhatuStore';
import qhatuTheme from './core/theme/qhatuTheme';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={qhatuStore}>
    <ThemeProvider theme={qhatuTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
