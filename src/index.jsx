import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store/store';
import { App } from './App';
import './utils/i18n';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import getDesignTokens from './utils/theme/theme';

const darkModeTheme = createTheme(getDesignTokens('dark'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkModeTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </Suspense>
);
