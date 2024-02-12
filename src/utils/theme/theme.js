const getDesignTokens = (mode) => ({
    typography: {
        fontFamily: 'inherit',
        title: {
            fontSize: 60,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            '&-webkit-background-clip': 'text',
            '&-webkit-text-fill-color': 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)'
        },
        aboutTitle: {
            fontSize: 46,
            fontWeight: 500,
            background: 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            '&-webkit-background-clip': 'text',
            '&-webkit-text-fill-color': 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)'
        },
        list: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '30px'
        },
        subtitle: {
            fontSize: 22,
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 500,
        },

    },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#7D66F5E5',
          },
          background: {
            default: '#faf7f7',
            gradient: 'radial-gradient(61.9% 53.23% at 62.67% 50%, rgb(71, 62, 98) 0%, rgb(71, 62, 98) 100%)',
            dark: '#3f3f3f',
            light: '#4F4F4FCC',
          },
          text: {
            primary: '#000000',
            secondary: '#29292c',
            light: '#F1F1F17F',
            grey: '#5A5A5E',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#7D66F5E5',
          },
          background: {
            default: '#090909',
            gradient: 'radial-gradient(61.9% 53.23% at 62.67% 50%, rgb(71, 62, 98) 0%, rgb(71, 62, 98) 100%)',
            dark: '#3f3f3f',
            light: '#4F4F4FCC',
            modal: '#1d1d1d',
          },
          action: {
            disabled: '#FFFFFF66',
            error: '#DD3350CC',
            disabledBackground: '#7D66F566',
          },
          text: {
            primary: '#f1f1f1',
            secondary: '#a1a1aa',
            light: '#F1F1F17F',
            grey: '#5A5A5E',
          },
        }),
  },
});

export default getDesignTokens