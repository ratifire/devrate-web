import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App';
import './assets/fonts/fonts.css';
import { persistor, store } from './redux/store/store';
import './utils/i18n';
import getDesignTokens from './utils/theme/theme';

const ThemedApp = () => {
  const themeMode = useSelector((state) => state.theme);
  const darkModeTheme = createTheme(getDesignTokens(themeMode.mode));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  </Suspense>
);
