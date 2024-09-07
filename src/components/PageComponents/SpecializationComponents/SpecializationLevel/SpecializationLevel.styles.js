export const styles = {
  contentWrapper: (theme) => ({
    padding: theme.spacing(4),
  }),
  
  title: (theme) => ({
    marginBottom: theme.spacing(2),
  }),
  
  description: (theme) => ({
    marginBottom: theme.spacing(3),
  }),
  
  buttonGroup: (theme) => ({
    width: '100%',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.btnGroup,
    padding: theme.spacing(1),
    gridGap: theme.spacing(1),
    ' .MuiButtonGroup-lastButton': {
      borderRadius: 1,
      border: 'none',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.background.level2,
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.neutral['800'],
      },
    },
    ' .MuiButtonGroup-firstButton': {
      borderRadius: 1,
      border: 'none',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.background.level2,
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.neutral['800'],
      },
    },
    ' .MuiButtonGroup-middleButton': {
      borderRadius: 1,
      border: 'none',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.background.level2,
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.neutral['800'],
      },
    },
    ' .MuiButton-contained': {
      backgroundColor: theme.palette.primary['400'],
      cursor: 'auto',
      ':hover': {
        border: 'none',
        backgroundColor: theme.palette.primary['400'],
      },
      ':active': {
        border: 'none',
        backgroundColor: theme.palette.primary['400'],
      },
      ':disabled': {
        border: 'none',
        backgroundColor: theme.palette.primary['400'],
        color: theme.palette.text.primary,
      },
    },
  }),
  button: {
    padding: '9px 0px 8px',
    textTransform: 'lowercase',
    display: 'inline-block',
    lineHeight: '23px',
    '::first-letter': {
      textTransform: 'uppercase',
    },
    ':hover': {
      border: 'none',
    },
  },
};