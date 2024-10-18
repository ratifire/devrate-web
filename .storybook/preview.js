import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import getDesignTokens from '../src/utils/theme/theme';
import i18n from '../src/utils/i18n';
import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DARK_THEME, LIGHT_THEME } from '../src/utils/constants/Theme/theme';

const withI18next = (Story, context) => {
  const { locale } = context.globals;

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
