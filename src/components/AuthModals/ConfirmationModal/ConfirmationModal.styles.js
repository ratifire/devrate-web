

const styles = {
  title: (theme) => ({
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    lineHeight: theme.typography.subtitle2.lineHeight,
    color: theme.palette.text.primary,
    textAlign: 'center',
    letterSpacing: theme.typography.subtitle2.letterSpacing,
    // marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
  codeErrorWrapper: (theme) => ({
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  }),
  codeErrorIcon: {
    width: '20px',
    height: '20px',
    color: '#B72F46CC',
  },
  codeErrorText:(theme) => ({
    marginLeft: theme.spacing(3),
    color: '#B72F46CC',
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: '1.1%',
  }),
  mainTextWrapper:(theme) => ({
     display: 'flex', 
     flexDirection: 'column', 
     marginBottom: theme.spacing(4), 
    }),
  mainText: (theme) =>({
    display: 'inline',
    fontSize: theme.typography.subtitle3.fontSize,
    fontWeight: theme.typography.subtitle3.fontWeight,
    lineHeight: theme.typography.subtitle3.lineHeight,
    color: theme.palette.text.secondary,
    letterSpacing: theme.typography.subtitle3.letterSpacing,
    textAlign: 'center',
  }),
  userEmail: (theme) => ({
    fontSize: theme.typography.subtitle3.fontSize,
    fontWeight: theme.typography.subtitle3.fontWeight,
    lineHeight: theme.typography.subtitle3.lineHeight,
    color: theme.palette.text.primary,
    letterSpacing: theme.typography.subtitle3.letterSpacing,
  }),
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
  spamCheckContainer:(theme) => ({
    marginBottom: theme.spacing(4),
    fontSize: theme.typography.subtitle3.fontSize,
    fontWeight: theme.typography.subtitle3.fontWeight,
    lineHeight: theme.typography.subtitle3.lineHeight,
    color: theme.palette.text.secondary,
    textAlign: 'center',
    letterSpacing: theme.typography.subtitle3.letterSpacing,
  }),
  turnBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnBackText: (theme) => ({
    marginRight: theme.spacing(2),
    fontSize: theme.typography.subtitle3.fontSize,
    fontWeight: theme.typography.subtitle3.fontWeight,
    lineHeight: theme.typography.subtitle3.lineHeight,
    color: theme.palette.text.secondary,
  }),
  link: (theme) => ({
    fontSize: theme.typography.subtitle3.fontSize,
    lineHeight: theme.typography.subtitle3.lineHeight,
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }),
  // New styles for input fields
  input: {
    minWidth: 48,
    width: 48,
    textAlign: 'center',
    '& input': {
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
      '&:focus': {
        outline: 'none',
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      },
    },
  },
};

export default styles;
