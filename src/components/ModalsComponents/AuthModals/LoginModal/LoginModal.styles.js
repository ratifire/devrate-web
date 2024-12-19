const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots, sans-serif',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
  subtitle: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    color: theme.palette.neutral[100],
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: theme.spacing(2),
    },
  }),
  textLink: (theme) => ({
    fontSize: '14px',
    fontWeight: 400,
    color: '#f1f1f180',
    textAlign: 'center',
    lineHeight: 1.5,
    marginBottom: '24px',
    [theme.breakpoints.down('xl')]: {
      marginBottom: theme.spacing(3),
    },
  }),
  codeErrorWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  }),
  codeErrorIcon: (theme) => ({
    width: '20px',
    height: '20px',
    color: theme.palette.error.mainConcentrated,
  }),
  codeErrorText: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    marginLeft: theme.spacing(3),
    color: theme.palette.error.mainConcentrated,
  }),
  link: (theme) => ({
    marginRight: theme.spacing(2),
    textDecoration: 'underline',
    color: theme.palette.text.primary,
  }),
  input: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
  }),
  wrapperBtn: {
    marginBottom: '16px',
  },
  policyText: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    fontLineHeight: 1.5,
    display: 'block',
    textAlign: 'center',
    width: '100%',
    color: theme.palette.neutral[100],
  }),
  policyLinkBox: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(0),
  }),
  turnBackText: (theme) => ({
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  }),
  turnBackLink: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    textDecoration: 'underline',
    color: theme.palette.action.active,
    fontWeight: 600,
    fontSize: '18px',
    fontLineHeight: 1.5,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),

  policyLink: (theme) => ({
    pointerEvents: 'none', //Remove it to enable links
    fontFamily: 'Open Sans, sans-serif',
    textDecoration: 'underline',
    color: theme.palette.action.active,
    fontSize: '18px',
    fontLineHeight: 1.5,
    '&:hover': {
      textDecoration: 'underline',
    },
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
};

export default styles;
