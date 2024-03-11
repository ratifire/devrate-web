import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import getDesignTokens from '../src/utils/theme/theme';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: createTheme(getDesignTokens('light')),
        dark: createTheme(getDesignTokens('dark')),
      },
      defaultTheme: 'dark',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
