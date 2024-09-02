export const styles = {
  contentWrapper: (theme) => ({
    width: '480px',
    height: '201px',
    padding: theme.spacing(4),
  }),
  
  title: (theme) => ({
    marginBottom: theme.spacing(2),
  }),
  
  description: (theme) => ({
    marginBottom: theme.spacing(3),
  }),
  
  buttonGroup:(theme) => ({
    width: '100%',
    // height: '48px',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.btnGroup,
    padding: theme.spacing(1),
    ' .MuiButtonGroup-lastButton':{
      borderRadius: 1,
    },
    ' .MuiButtonGroup-firstButton': {
      borderRadius: 1,
      borderRight: 'none',
      ":hover": {
        border: 'none',
      }
    },
    ' .MuiButtonGroup-middleButton' : {
      borderRadius: 1,
      borderRight: 'none',
      ":hover": {
        border: 'none',
      }
    }
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
    }
  },
};