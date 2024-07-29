const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: '48px',
    marginBottom: '36px',
  }),
  textLink: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#f1f1f180',
    textAlign: 'center',
    lineHeight: 1.5,
    marginBottom: '36px',
  },
  errorWrapper: (theme) => ({
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    color: theme.palette.error.main,
    
    
  }),
  errorIcon: (theme) => ({
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(4),
  }),
  error: {
    textAlign: 'center',
  },
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
    marginTop: '36px',
    marginBottom: '36px',
  },
  policyText: (theme) => ({
    display: 'block',
    textAlign: 'center',
    width: '100%',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    
  }),
  turnBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  turnBackText: (theme) => ({
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
    
  }),
  turnBackLink: (theme) => ({
    textDecoration: 'underline',
    color: theme.palette.text.primary,
    paddingY: 0,
    paddingX: 0,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  iconStyle: (theme) => ({
    color: theme.palette.neutral[50],
  }),
};

export default styles;
