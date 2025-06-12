const styles = {
  title: (theme) => ({
    fontFamily: 'Tektur',
    fontSize: '24px',
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
  codeErrorWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
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
    fontSize: '18px',
    color: theme.palette.neutral[100],
    '@media (max-width: 1480px)': {
      fontSize: '16px',
    },
  }),
  userEmail: (theme) => ({
    color: theme.palette.action.active,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.5,
  }),
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
    },
  }),
  spamCheckContainer: (theme) => ({
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
    },
  }),
  turnBackText: (theme) => ({
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
  }),
  formInput: (theme) => ({
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral[100],
      },
    },
  }),
  btnWrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginTop: '16px',
    },
  }),
  btn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginTop: '16px',
    },
  }),
  confirmationLink: (theme) => ({
    cursor: 'pointer',
    display: 'inline',
    textDecoration: 'underline',
    color: theme.palette.action.active,
    fontWeight: 600,
    fontSize: '18px',
    fontLineHeight: 1.5,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  submitBtn: (theme) => ({
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.43,
    borderRadius: theme.spacing(2),
    padding: '12px',
  }),
};

export default styles;
