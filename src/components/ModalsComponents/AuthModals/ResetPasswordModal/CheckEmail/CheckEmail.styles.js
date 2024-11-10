const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots, sans-serif',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
  subtitle: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    color: theme.palette.neutral[100],
    marginBottom: theme.spacing(4),
  }),
  policyText: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    fontLineHeight: 1.5,
    display: 'block',
    textAlign: 'center',
    width: '100%',
    color: theme.palette.neutral[100],
  }),
  policyLinkBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0,
  },
  policyLink: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    textDecoration: 'underline',
    color: theme.palette.action.active,
    fontSize: '18px',
    fontLineHeight: 1.5,
    '&:hover': {
      textDecoration: 'underline',
    },
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
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  }),
  textLink: (theme) => ({
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing(4),
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
