import { useSelector } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { App } from '../../App.jsx';
import getDesignTokens from './theme.js';

const rootDom = document.getElementById('root');

const ThemedApp = () => {
  const themeMode = useSelector((state) => state.theme);
  const darkModeTheme = createTheme(getDesignTokens(themeMode.mode));

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={2000}
        domRoot={rootDom}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default ThemedApp;
