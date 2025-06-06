import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DARK_THEME, LIGHT_THEME } from '@utils/constants/Theme/theme';
import getDesignTokens from '@utils/theme/theme';
import i18n from '@utils/i18n';

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

export const decorators = [withI18next];

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'uk', title: 'Ukrainian' },
      ],
      showName: true,
    },
  },
};

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
        light: createTheme(getDesignTokens(LIGHT_THEME)),
        dark: createTheme(getDesignTokens(DARK_THEME)),
      },
      defaultTheme: DARK_THEME,
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
