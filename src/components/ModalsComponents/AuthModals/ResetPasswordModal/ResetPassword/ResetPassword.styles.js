const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots, sans-serif',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: 1.5,
  }),
  bottom_subtitle: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    color: theme.palette.neutral[100],
  }),
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gridGap: theme.spacing(2),
    alignItems: 'center',
  }),
  link: (theme) => ({
    textDecoration: 'underline',
    color: theme.palette.action.active,
    fontWeight: 600,
    fontSize: '18px',
    fontLineHeight: 1.5,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  input: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
  }),
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
      marginTop: '16px',
    },
  }),
  tooltip: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
  mainTextWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
    },
  }),
  mainText: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 18,
    lineHeight: 1.5,
    display: 'inline',
    color: theme.palette.neutral[100],
    '@media (max-width: 1440px)': {
      fontSize: 16,
    },
  }),
  userEmail: (theme) => ({
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 700,
    color: theme.palette.primary[200],
    '@media (max-width: 1440px)': {
      fontSize: 16,
    },
  }),
  resetPasswordForm: (theme) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
    },
    '&, & input': {
      backgroundColor: `${theme.palette.background.default} !important`,
    },
    '&:-webkit-autofill, & input:-webkit-autofill': {
      '-webkit-text-fill-color': `${theme.palette.text.primary} !important`,
      'box-shadow': `0 0 0 100px ${theme.palette.background.default} inset !important`,
      transition: 'background-color 5000s ease-in-out 0s',
    },
  }),
  codeErrorWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
    },
  }),
  codeErrorIcon: (theme) => ({
    width: '20px',
    height: '20px',
    color: theme.palette.error.mainConcentrated,
  }),
  codeErrorText: (theme) => ({
    marginLeft: theme.spacing(3),
    color: theme.palette.error.mainConcentrated,
  }),
  iconStyle: (theme) => ({
    color: theme.palette.neutral[50],
  }),
  submitBtn: (theme) => ({
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.43,
    borderRadius: theme.spacing(2),
    padding: '12px',
  }),
  codeFocusWrapper: (theme) => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.selected,
    },
  }),
};
export default styles;
