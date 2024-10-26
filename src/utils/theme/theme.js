import { DARK_THEME } from '../constants/Theme/theme';

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
      fontWeight: 500,
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
    mode,
    ...(mode === DARK_THEME
      ? {
        notifications: {
          backgroundColor: '#252527',
          borderColor: 'transparent',
          badge: {
            backgroundColor: '#FF0000',
            boxShadow: '#FF0000CC',
            fill:'#C5C5C6',
          },
          icon:{
            close: '#C5C5C6',
            typeMessage: '#C5C5C6',
          },
          item: {
            color: '#FFFFFF',
            boxShadow: '#C5C5C640',
            colorTime: '#C5C5C6',
            btnFeedback: '#B78AF7',
            newMessages: {
              color: '#360083',
              backgroundColor: '#CEB0FA',
            }
          },
        },
        checkBox: {
          border: '#C5C5C6',
        },
        border: {
          color: '#252527',
        },
        steper: {
          completed: {
            circle: {
              backgroundColor: '#8133F1',
            },
            backgroundColor: '#8133F1',
          },
          active: {
            circle: {
              backgroundColor: '#8133F1',
            },
            backgroundColor: '#8133F1',
          },
          inactive: {
            circle: {
              backgroundColor: '#69696B',
            },
            backgroundColor: '#69696B',
          },
          color: '#FFFFFF',
        },
        modals: {
          inputs: {
            placeholder: '#69696B',
            border: {
              default: '#444446',
              hover: '#828283',
              focused: '#B78AF7',
              disable: '#3E3E40',
              error: '#ED0E0E',
            },
            textColor: {
              default: '#FFFFFF',
              placeholder: '#69696B',
              disabled: '#69696B',
            },
            labelColor: {
              default: '#C5C5C6',
              hover: '#C5C5C6',
              focused: '#B78AF7',
              disable: '#69696B',
              error: '#D32F2F',
              required: '#ED0E0E',
            },
          },
          select: {
            placeholder: '#69696B',
            border: {
              default: '#444446',
              hover: '#828283',
              focused: '#B78AF7',
              disable: '#3E3E40',
              error: '#ED0E0E',
            },
            textColor: {
              default: '#FFFFFF',
              placeholder: '#69696B',
              disabled: '#69696B',
            },
            labelColor: {
              default: '#C5C5C6',
              hover: '#C5C5C6',
              focused: '#B78AF7',
              disable: '#69696B',
              error: '#D32F2F',
              required: '#ED0E0E',
            },
            selectedField: {
              backgroundColor: '#1D1D1D',
              selected: {
                backgroundColor: '#252527',
                color: '#C5C5C6',
              },
              hover: '#252527',
            },
          },
          textAreaInput: {
            placeholder: '#69696B',
            border: {
              default: '#444446',
              default2: '#252527',
              hover: '#828283',
              focused: '#B78AF7',
              disable: '#3E3E40',
              error: '#ED0E0E',
            },
            textColor: {
              default: '#FFFFFF',
              placeholder: '#69696B',
              disabled: '#69696B',
            },
            labelColor: {
              default: '#C5C5C6',
              hover: '#C5C5C6',
              focused: '#B78AF7',
              disable: '#69696B',
              error: '#D32F2F',
              required: '#ED0E0E',
            },
          },
          titleColor: '#FFFFFF',
          backgroundColor: '#1D1D1D',
          color: '#69696B',
          progressBgColor: '#69696B',
        },
        baseUserInfo: {
          city: {
            color: '#25CBFF',
          },
        },
        rightSection: {
          languages: {
            border: {
              borderColor: 'transparent',
            },
            type: {
              color: '#FFFFFF',
              backgroundColor: '#5900D9',
            },
            level: {
              color: '#360083',
              backgroundColor: '#CEB0FA',
            },
            modalDeleteIcon: {
              color: '#5900D9',
            },
          },
          text: {
            color: '#C5C5C6',
          },
        },
        scroll: {
          scrollWrapp: {
            backgroundColor: '#3E3E40',
          },
          scrollEl: {
            backgroundColor: '#FFFFFF',
          },
        },
        iconBtn: {
          search:{
            color: '#CEB0FA',
            svgColor: '#B78AF7'
          },
          link: {
            color: '#CEB0FA',
            hover: {
              color: '#B78AF7',
              backgroundColor: '#CEB0FA29',
            },
          },
          writeMasssge: {
            color: '#FFFFFF',
            hover: '#5900D9',
          },
          bookInterview: {
            color: '#B78AF7',
            borderColor: '#B78AF7',
            hover: {
              color: '#B78AF7',
              backgroundColor: '#CEB0FA29',
              borderColor: '#B78AF7',
            },
          },
          stepRight: {
            active: {
              backgroundColor: '#B78AF7',
              hoverColor: '#252527',
            },
            disable: {
              color: '#444446',
            },
          },
          btnSave: {
            backgroundColor: {
              default: '#8133F1',
              hover: '#5900D9',
              disable: '#252527',
            },
            color: {
              default: '#FFFFFF',
              disabled: '#00000061',
            },
          },
          btnClose: {
            color: '#A9A9AA',
            hoverColor: '#303032',
          },
          editBtn: {
            color: '#CEB0FA',
            backgroundColor: 'transparent',
            hover: {
              color: '#B78AF7',
              backgroundColor: '#CEB0FA29',
            },
          },
          createBtn: {
            color: '#CEB0FA',
            backgroundColor: 'transparent',
            hover: {
              color: '#B78AF7',
              backgroundColor: '#CEB0FA29',
            },
          },
          burgerDot: {
            color: '#C5C5C6',
            backgroundColor: 'transparent',
            hover: {
              color: '#A9A9AA',
              backgroundColor: '#252527',
            },
          },
        },
        search: {
          color: 'rgba(197, 197, 198, 0.25)',
          inputActive: '#B78AF7',
          emptyTitle: '#fff',
          title: '#fff',
          subtitle: '#C5C5C6',
        },
        tabsEl: {
          borderColor: '#69696B',
          indicator: '#B78AF7',
          default: {
            color: '#C5C5C6',
            backgroundColor: 'transparent',
          },
          focused: {
            color: '#B78AF7',
            backgroundColor: 'transparent',
          },
        },
        skillsSection: {
          stars: {
            iconFilled: '#B78AF7',
            iconEmpty: '#828283',
          },
          doneInterviews: {
            color: '#16FFB9',
            backgroundColor: 'transparent',
            borderColor: '#16FFB9',
          },
          completedInterviews: {
            color: '#25CBFF',
            backgroundColor: 'transparent',
            borderColor: '#25CBFF',
          },
        },
        pagesSections: {
          backgroundColor: '#303032',
        },

        modalDropdown: {
          color: '#C5C5C6',
          backgroundColor: '#1D1D1D',
          hoverBgColor: '#252527',
          divider: '#69696B',
        },
        responcibility: {
          backgroundColor: '#CEB0FA',
          responsibilityText: '#360083',
          responsibilityIcon: '#5900D9',
          responsibilityBorder: 'transparent',
        },
        themeSwitcher: {
          backgroundColor: '#252527',
          switcherColor: '#25CBFF',
          borderColor: '#1D1D1D',
        },
        sliderAssessment: {
          violet: '#8133F1',
          lightGray: '#C5C5C6',
          gray: '#69696B',
          backgroundColor: '#3E3E40',
          backgroundColor2: '#252527' + 'BD',
          border: 'transparent',
          grade: '#C5C5C6',
          divider: '#69696B',
          tooltip: {
            color: '#C5C5C6',
            backgroundColor: '#3E3E40',
          },
        },
        experienceSkillSect: {
          wrapperUnSorted:{
            borderColor: '#69696B',
          },
          wrapperSorted: {
            color: '#CEB0FA',
            borderColor: '#CEB0FA',
          },
          text: {
            junior: '#25CBFF',
            middle: '#16FFB9',
            senior: '#DAFE22',
          },
          star: '#B78AF7',
          eye: {
            eyeHidden: '#C5C5C6',
            eyeVisible: '#B78AF7',
            backgroundColor: '#444446',
          },
          number: {
            color: '#B78AF7',
            backgroundColor: '#252527',
          },
          tooltip: {
            color: '#FFFFFF',
            backgroundColor: '#252527',
          },
          default: ''
        },
        common: {
          black: '#000000',
          white: '#ffffff',
          titleGradient: 'linear-gradient(90deg, rgb(117, 98, 228), rgb(251, 147, 166))',
        },
        text: {
          primary: '#ffffff',
          secondary: '#C5C5C6',
          disabled: '#F1F1F1',
          accent: '#007CA3',
          darkGray: '#F8F8F8',
        },
        action: {
          active: '#B78AF7',
          hover: '#CEB0FA',
          selected: '#CEB0FA',
          disabled: '#F1F1F1',
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
        arrow: {
          down: '#ED0E0E',
          up: '#64FF2E',
          circle: '#252527',
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
          blueDark: '#007CA3',
          azure: '#16FFB9',
          azureDark: '#00855D',
          orange: '#FCA728',
          orangeDark: '#EE7538',
          pink: '#D31772',
          hover: '#CEB0FA',
          contrastText: '#ffffff',
          lime: '#DAFE22',
        },
          schedule:{
          backgroundColor:  '#3E3E40',
          smallCalendar:{
            textColor:"#FFFFFF",
            backgroundColor: "#E0CCFF",
            switchViewButtonColor:"#A9A9AA",
            switchViewButtonBackgroundColor:"#CEB0FA",
            arrowSwitcherColor: "#A9A9AA",
            arrowSwitcherBackgroundColor: "#CEB0FA"
          },
            popup:{
              backgroundColor: '#252527',
              popupBorderColor: '#252527',
              closeIconColor:'#E0CCFF',
              userInfoBorderColor: "#A9A9AA",
              titleColor: '#A9A9AA',
              iconColor: '#E0CCFF'
            },
            sideBarEvent:{
              backgroundColor: "#444446",
              titleColor:  "#FFFFFF",
              dateAndTimeColor: "#EFE6FD",
              participant: '#ECECED',
              hostTitle:"#ECECED",
              hostLinkColor:"#CEB0FA",
              participantlinkColor:"#CEB0FA",
              cancelEventBtnColor: "#CEB0FA"
            }
},
      }
      : {
        notifications: {
          backgroundColor: '#FFFFFF',
          borderColor: '#C5C5C6',
          badge: {
            backgroundColor: '#A70000',
            boxShadow: '#FF0000CC',
            fill:'#69696B',
          },
          icon:{
            close: '#3E3E40',
            typeMessage: '#3E3E40',
          },
          item: {
            color: '#1D1D1D',
            boxShadow: '#C5C5C640',
            colorTime: '#3E3E40',
            btnFeedback: '#4600A9',
            newMessages: {
              color: '#360083',
              backgroundColor: '#CEB0FA',
            }
            
          },
        },
        checkBox: {
          border: '#828283',
        },
        border: {
          color: '#C5C5C6',
        },
        search: {
          color: 'rgba(197, 197, 198, 0.40)',
          inputActive: '#8133F1',
          title: '#1D1D1D',
          subtitle: '#303032',
        },
        steper: {
          completed: {
            circle: {
              backgroundColor: '#8133F1',
              color: '#ECECED',
            },
            backgroundColor: '#8133F1',
          },
          active: {
            circle: {
              backgroundColor: '#8133F1',
              color: '#ECECED',
            },
            backgroundColor: '#8133F1',
          },
          inactive: {
            circle: {
              backgroundColor: '#ECECED',
            },
            backgroundColor: '#ECECED',
          },
          color: '#1D1D1D',
        },
        modals: {
          inputs: {
            placeholder: '#69696B',
            border: {
              default: '#828283',
              hover: '#444446',
              focused: '#8133F1',
              disable: '#A9A9AA',
              error: '#A70000',
            },
            textColor: {
              default: '#444446',
              placeholder: '#444446',
              disabled: '#828283',
            },
            labelColor: {
              default: '#1D1D1D',
              hover: '#1D1D1D',
              focused: '#8133F1',
              disable: '#828283',
              error: '#A70000',
              required: '#ED0E0E',
            },
          },
          select: {
            placeholder: '#69696B',
            border: {
              default: '#828283',
              hover: '#444446',
              focused: '#8133F1',
              disable: '#A9A9AA',
              error: '#A70000',
            },
            textColor: {
              default: '#444446',
              placeholder: '#444446',
              disabled: '#828283',
            },
            labelColor: {
              default: '#1D1D1D',
              hover: '#1D1D1D',
              focused: '#8133F1',
              disable: '#828283',
              error: '#A70000',
              required: '#ED0E0E',
            },
            selectedField: {
              backgroundColor: '#FFFFFF',
              selected: {
                backgroundColor: '#ECECED',
                color: '#303032',
              },
              hover: '#ECECED',
            },
          },
          textAreaInput: {
            placeholder: '#69696B',
            border: {
              default: '#828283',
              default2: '#ECECED',
              hover: '#444446',
              focused: '#8133F1',
              disable: '#A9A9AA',
              error: '#A70000',
            },
            textColor: {
              default: '#444446',
              placeholder: '#444446',
              disabled: '#828283',
            },
            labelColor: {
              default: '#1D1D1D',
              hover: '#1D1D1D',
              focused: '#8133F1',
              disable: '#828283',
              error: '#A70000',
              required: '#ED0E0E',
            },
          },
          titleColor: '#1D1D1D',
          backgroundColor: '#FFFFFF',
          color: '#69696B',
          progressBgColor: '#ECECED',
        },
        baseUserInfo: {
          city: {
            color: '#007CA3',
          },
        },
        rightSection: {
          languages: {
            border: {
              borderColor: '#B78AF7',
            },
            type: {
              color: '#FFFFFF',
              backgroundColor: '#6200EE',
            },
            level: {
              color: '#4600A9',
              backgroundColor: '#EFE6FD',
            },
            modalDeleteIcon: {
              color: '#6200EE',
            },
          },
          text: {
            color: '#3E3E40',
          },
        },
        scroll: {
          scrollWrapp: {
            backgroundColor: '#ECECED',
          },
          scrollEl: {
            backgroundColor: '#C5C5C6',
          },
        },
        tabsEl: {
          borderColor: '#A9A9AA',
          indicator: '#6200EE',
          default: {
            color: '#1D1D1D',
            backgroundColor: 'transparent',
          },
          focused: {
            color: '#6200EE',
            backgroundColor: 'transparent',
          },
        },
        iconBtn: {
          search:{
            color: '#8133F1',
            svgColor: '#8133F1'
          },
          link: {
            color: '#8133F1',
            hover: {
              color: '#8133F1',
              backgroundColor: '#CEB0FA29',
            },
          },
          writeMasssge: {
            color: '#FFFFFF',
            hover: '#360083',
          },
          bookInterview: {
            color: '#6200EE',
            borderColor: '#6200EE',
            hover: {
              color: '#360083',
              backgroundColor: '#CEB0FA29',
              borderColor: '#360083',
            },
          },
          stepRight: {
            active: {
              backgroundColor: '#5900D9',
              hoverColor: '#EFE6FD',
            },
            disable: {
              color: '#444446',
            },
          },
          btnSave: {
            backgroundColor: {
              default: '#5900D9',
              hover: '#360083',
              disable: '#C5C5C6',
            },
            color: {
              default: '#FFFFFF',
              disabled: '#828283',
            },
          },
          btnClose: {
            color: '#1D1D1D',
            hoverColor: '#ECECED',
          },
          editBtn: {
            color: '#8133F1',
            backgroundColor: 'transparent',
            hover: {
              color: '#8133F1',
              backgroundColor: '#CEB0FA29',
            },
          },
          createBtn: {
            color: '#8133F1',
            backgroundColor: 'transparent',
            hover: {
              color: '#8133F1',
              backgroundColor: '#EFE6FD',
            },
          },
          burgerDot: {
            color: '#3E3E40',
            backgroundColor: 'transparent',
            hover: {
              color: '#3E3E40',
              backgroundColor: '#ECECED',
            },
          },
        },
        skillsSection: {
          stars: {
            iconFilled: '#8133F1',
            iconEmpty: '#828283',
          },
          doneInterviews: {
            color: '#00855D',
            backgroundColor: '#F8FFFD',
            borderColor: '#00855D',
          },
          completedInterviews: {
            color: '#007CA3',
            backgroundColor: '#F8FDFF',
            borderColor: '#007CA3',
          },
        },
        pagesSections: {
          backgroundColor: '#ffffff',
        },
        modalDropdown: {
          color: '#1D1D1D',
          backgroundColor: '#FFFFFF',
          hoverBgColor: '#ECECED',
          divider: '#C5C5C6',
        },
        responcibility: {
          backgroundColor: '#EFE6FD',
          responsibilityText: '#4600A9',
          responsibilityIcon: '#5900D9', //need to check
          responsibilityBorder: '#B78AF7',
        },
        themeSwitcher: {
          backgroundColor: '#ECECED',
          switcherColor: '#EE7538',
          borderColor: '#C5C5C6',
        },
        sliderAssessment: {
          violet: '#6200EE',
          lightGray: '#A9A9AA',
          gray: '#ECECED',
          backgroundColor: '#F8F8F8',
          backgroundColor2: '#C5C5C6' + 'BD',
          border: '1px solid ' + '#ECECED',
          grade: '#1D1D1D',
          divider: '#C5C5C6',
          tooltip: {
            color: '#1D1D1D',
            backgroundColor: '#A9A9AA',
          },
        },
          schedule:{
            backgroundColor:  '#F8F8F8',
            smallCalendar:{
              textColor:"#F8F8F8",
              backgroundColor:"#A066FF",
              switchViewButtonColor:"#000000",
              switchViewButtonBackgroundColor:"#CEB0FA",
              arrowSwitcherColor: "#000000",
              arrowSwitcherBackgroundColor: "#CEB0FA"
            },
            popup:{
              backgroundColor: "#ECECED",
              popupBorderColor:"#ECECED",
              closeIconColor: "#5900D9",
              userInfoBorderColor:  "#C5C5C6",
              titleColor: '#1D1D1D',
              iconColor: '#5900D9'
            },
            sideBarEvent:{
              backgroundColor: "#F8F8F8",
              titleColor:  "#1D1D1D",
              dateAndTimeColor:"#303032",
              participant: "#444446",
              hostTitle:"#444446",
              hostLinkColor:"#6200EE",
              participantlinkColor:"#6200EE",
              cancelEventBtnColor: "#6200EE"

            },
          },
        experienceSkillSect: {
          wrapperUnSorted:{
            borderColor: '#C5C5C6',
          },
          wrapperSorted: {
            color: '#8133F1',
            borderColor: '#8133F1',
          },
          text: {
            junior: '#007CA3',
            middle: '#00855D',
            senior: '#D31772',
          },
          star: '#8133F1',
          eye: {
            eyeHidden: '#3E3E40',
            eyeVisible: '#4600A9',
            backgroundColor: '#ECECED',
          },
          number: {
            color: '#4600A9',
            backgroundColor: '#C5C5C6',
          },
          tooltip: {
            color: '#1D1D1D',
            backgroundColor: '#C5C5C6',
          },
        },
        common: {
          black: '#000000',
          white: '#ffffff',
          titleGradient: 'linear-gradient(90deg, rgb(117, 98, 228), rgb(251, 147, 166))',
        },
        text: {
          primary: '#1D1D1D',
          secondary: '#1D1D1D',
          disabled: '#A0A0A0',
          accent: '#25CBFF',
          darkGray: '#F8F8F8',
        },
        action: {
          active: '#6200EE',
          hover: '#8133F1',
          selected: '#B78AF7',
          disabled: '#C5C5C6',
          focus: '#8133F1',
        },
        background: {
          default: '#ECECED',
          backdrop: '#FFFFFF',
          body: '#F0F0F0',
          level1: '#FFFFFF',
          level2: '#F9F9F9',
          level3: '#E0E0E0',
          gradient: 'radial-gradient(62.0% 54% at 63% 50%, rgba(117, 98, 228, 0.2) 0%, rgba(117, 98, 228, 0) 100%)',
          scrollbarTrack: '#F0F0F0',
          scrollbarThumb: '#A0A0A0',
          btnGroup: '#E0E0E0',
        },
        primary: {
          50: '#F0E6FF',
          100: '#E0CCFF',
          200: '#C499FF',
          300: '#A066FF',
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
          main: '#4CAF50',
          dark: '#388E3C',
          contrastText: '#FFFFFF',
        },
        arrow: {
          down: '#ED0E0E',
          up: '#64FF2E',
          circle: '#E0E0E0',
        },
        warning: {
          main: '#FF9800',
          dark: '#F57C00',
          contrastText: '#FFFFFF',
        },
        error: {
          main: '#F44336',
          dark: '#D32F2F',
          contrastText: '#FFFFFF',
        },
        info: {
          main: '#2196F3',
          blueDark: '#007CA3',
          azure: '#16FFB9',
          azureDark: '#00855D',
          orange: '#FCA728',
          orangeDark: '#EE7538',
          pink: '#D31772',
          hover: '#E3F2FD',
          contrastText: '#000000',
          lime: '#DAFE22',
        },
      }),
  },
  baseStyles: {
    body: {
      margin: 0,
      fontFamily: 'Roboto, sans-serif',
      fontOpticalSizing: 'auto',
      fontStyle: 'normal',
      fontVariationSettings: '\'slnt\' 0',
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
      },
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
