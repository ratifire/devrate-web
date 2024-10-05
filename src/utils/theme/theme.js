import { green, lime } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  spacing: [0, 4, 8, 16, 24, 32], //theme.spacing(1) = '4px' //theme.spacing(6) = '36px'
  shape: {
    borderRadius: 4, // borderRadius:1 = 4px borderRadius:2 = 8px
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1272,
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: 96,
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: -1.5,
    },
    h2: {
      fontSize: 60,
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: -1.5,
    },
    h4: {
      fontSize: 34,
      fontWeight: 400,
      lineHeight: 1.24,
      letterSpacing: -1.5,
    },
    h5: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: 0.15,
    },

    subtitle1: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: 0.15,
    },
    subtitle3: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: 0.1,
    },
    body: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0.15,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: 0.17,
    },
    caption1: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.43,
      letterSpacing: 0.17,
    },
    caption2: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.66,
      letterSpacing: 0.4,
    },
    //overline
    caption3: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: 0,
    },
  },
  palette: {
    ...(mode === 'dark'
      ? {
          themeSwitcher:{
            backgroundColor: "#8796A5",
            switcherColor: '#8133F1',
            borderColor: "#1D1D1D"
          },
          sliderAssessment: {
            violet: '#8133F1',
            lightGray: '#C5C5C6',
            gray: '#69696B',
            darkGray: '#3E3E40',
          },
          common: {
            black: '#000000',
            white: '#ffffff',
            titleGradient: 'linear-gradient(90deg, rgb(117, 98, 228), rgb(251, 147, 166))',
          },
          text: {
            primary: '#ffffff',
            secondary: '#C5C5C6',
            disabled: '#F1F1F1', //визначити колір
          },
          action: {
            active: '#B78AF7',
            hover: '#CEB0FA',
            selected: '#CEB0FA',
            disabled: '#F1F1F1', //визначити колір
            focus: '#CEB0FA',
          },

          background: {
            default: '#1D1D1D',
            backdrop: '#1D1D1D',
            body: '#1D1D1D',
            level1: '#1D1D1D',
            level2: '#303032',
            level3: '#69696B',
            gradient: 'radial-gradient(62.0% 54% at 63% 50%, rgba(71, 62, 98, 0.5) 0%, rgba(71, 62, 98, 0) 100%)',
            scrollbarTrack: '#303032',
            scrollbarThumb: '#FFF',
            btnGroup: '#3E3E40',
          },
          primary: {
            50: '#EFE6FD',
            100: '#CEB0FA',
            200: '#B78AF7',
            300: '#9654F4',
            400: '#8133F1',
            500: '#6200EE',
            600: '#5900D9',
            700: '#4600A9',
            800: '#360083',
            900: '#290064',
          },
          neutral: {
            50: '#ECECED',
            100: '#C5C5C6',
            200: '#A9A9AA',
            300: '#828283',
            400: '#69696B',
            500: '#444446',
            600: '#3E3E40',
            700: '#303032',
            800: '#252527',
            900: '#1D1D1D',
          },
          success: {
            main: '#64FF2E',
            dark: '#3AB310',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#F3DD12',
            dark: '#D6C20F',
            contrastText: '#ffffff',
          },
          error: {
            main: '#B72F46',
            dark: '#A70000',
            contrastText: '#ffffff',
          },
          info: {
            main: '#25CBFF',
            azure: '#16FFB9',
            hover: '#CEB0FA',
            contrastText: '#ffffff',
            lime: '#DAFE22',
          },
          specialization: {
            arrow: {
              down: '#ED0E0E',
              up: '#64FF2E',
              circle: '#252527',
            },
            levelChart: {
              grad1: '#4A1D8B',
              grad2: '#8233F1',
              grad3: '#A756B4',
              grad4: '#FCA728',
            },
            hardSkillsChart: {
              grad1: '#16FFB9',
              grad2: '#DAFE22'
            }
          }
        }
      : {
          specialization: {
            arrow: {
              down: '#A70000',
              up: '#3AB310',
              circle: '#ECECED',
            },
            levelChart: {
              grad1: '#5B08D3',
              grad2: '#7F23FF',
              grad3: '#B056BE',
              grad4: '#FCA728',
            },
            hardSkillsChart: {
              grad1: '#D31772',
              grad2: '#EE7538'
            }
          },
          //light theme to be adjusted
          themeSwitcher:{
            backgroundColor: "#ffffff",
            switcherColor: "#EE7538",
            borderColor:      "#C5C5C6"
          },
          sliderAssessment: {
            violet: 'green',
            lightGray: '#C5C5C6',
            gray: '#69696B',
            darkGray: '#3E3E40',
          },
          common: {
            black: '#000000',
            white: '#ffffff',
          },
          primary: {
            50: lime[50],
            100: lime[100],
            200: lime[200],
            300: lime[300],
            400: lime[400],
            500: lime[500],
            600: lime[600],
            700: lime[700],
            800: lime[800],
            900: lime[900],
          },
          neutral: {
            50: green[50],
            100: green[100],
            200: green[200],
            300: green[300],
            400: green[400],
            500: green[500],
            600: green[600],
            700: green[700],
            800: green[800],
            900: green[900],
          },
          success: {
            main: '#64FF2E',
            dark: '#3AB310',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#F3DD12',
            dark: '#D6C20F',
            contrastText: '#ffffff',
          },
          error: {
            main: '#B72F46',
            dark: '#A70000',
            contrastText: '#ffffff',
          },
          info: {
            main: '#25CBFF',
            azure: '#16FFB9',
            hover: '#CEB0FA',
            contrastText: '#ffffff',
          },
        }),
  },
  baseStyles: {
    body: {
      margin: 0,
      fontFamily: 'Roboto, sans-serif',
      fontOpticalSizing: 'auto',
      fontStyle: 'normal',
      fontVariationSettings: "'slnt' 0",
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      backgroundImage: 'linear-gradient(180deg, #1d1d1d 0%, #090909 100%)',
      backgroundColor: 'rgba(29, 29, 29, 0)',
    },
    code: {
      fontFamily: 'Roboto, sans-serif',
    },
    ' *': {
      boxSizing: 'border-box',
    },
  },
  components: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#8133F1',
      }
    },
    MuiButton: {
      variants: [
        {
          props: (props) => props.variant === 'contained' && props.color === 'primary',
          style: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '16px',
            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'uppercase',
            padding: '12px 20px',
            width: '100%',
            backgroundColor: '#8133F1',
            '&:hover': {
              backgroundColor: '#360083',
            },
            '&:disabled': {
              backgroundColor: '#1d1d1d',
              color: '#FFFFFF80',
            },
          },
        },
        {
          props: (props) => props.variant === 'outlined' && props.color === 'primary',
          style: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '24px',
            color: '#8133F1',
            textAlign: 'center',
            textTransform: 'uppercase',
            marginY: 0,
            padding: '12px 20px',
            width: '100%',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:disabled': {
              backgroundColor: 'transparent',
              color: '#ECECED',
            },
          },
        },
      ],
    },
  },
});

export default getDesignTokens;
