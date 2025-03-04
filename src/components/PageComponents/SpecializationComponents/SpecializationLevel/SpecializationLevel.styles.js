export const styles = {
  contentWrapper: (theme) => ({
    padding: theme.spacing(4),
  }),

  descriptionBox: (theme) => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  }),
  popupContainer: {
    position: 'relative',
  },

  popupContent: (theme) => ({
    padding: '12px 16px',
    width: '16.75rem',
    height: 'auto',
    backgroundColor: theme.palette.specialization.level.btnGroup,
    position: 'absolute',
    bottom: '40px',
    right: '7px',
    opacity: 0,
    transition: 'opacity .5s ease-out',

    '* > svg': {
      fill: '#FFFFFF !important',
    },
  }),

  popupText: {
    fontWeight: 400,
    lineHeight: '166%',
    letterSpacing: '0.03em',
    fontSize: '16px',
  },

  visiblePopup: {
    opacity: 1,
  },

  buttonGroup: (theme) => ({
    width: '100%',
    boxShadow: 'none',
    backgroundColor: theme.palette.specialization.level.btnGroup,
    padding: theme.spacing(1),
    gridGap: theme.spacing(1),
    '.MuiButtonGroup-firstButton.Mui-disabled, .MuiButtonGroup-middleButton.Mui-disabled': {
      borderRight: 'none',
    },
    ' .MuiButtonGroup-lastButton': {
      borderRadius: 1,
      border: 'none',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.neutral['400'],
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.neutral['400'],
      },
    },
    ' .MuiButtonGroup-firstButton': {
      borderRadius: 1,
      border: 'none',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.neutral['400'],
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.neutral['400'],
      },
    },
    ' .MuiButtonGroup-middleButton': {
      borderRadius: 1,
      border: 'none',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.neutral['400'],
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.neutral['400'],
      },
    },
    ' .MuiButton-contained': {
      backgroundColor: theme.palette.specialization.level.btn,
      color: `${theme.palette.specialization.level.colorActive} !important`,
      cursor: 'auto',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.specialization.level.btn,
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.specialization.level.btn,
      },
      ':disabled': {
        border: 'none',
        backgroundColor: theme.palette.specialization.level.btn,
        color: theme.palette.text.primary,
      },
    },
  }),
  button: (theme) => ({
    padding: '9px 0px 8px',
    color: theme.palette.specialization.level.color,
    textTransform: 'lowercase',
    display: 'inline-block',
    lineHeight: '23px',
    '::first-letter': {
      textTransform: 'uppercase',
    },
    ':hover': {
      border: 'none',
    },
  }),
};
