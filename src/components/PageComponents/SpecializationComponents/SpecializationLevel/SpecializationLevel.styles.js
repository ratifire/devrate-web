export const styles = {
  contentWrapper: (theme) => ({
    padding: theme.spacing(4),
  }),

  title: (theme) => ({
    marginBottom: theme.spacing(3),
  }),

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
