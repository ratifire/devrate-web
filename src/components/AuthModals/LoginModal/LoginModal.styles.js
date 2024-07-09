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
    marginBottom: '50px',
  },
  policyText: (theme) => ({
    textAlign: 'center',
    width: '100%',
    color: theme.palette.text.primary,
  }),
  turnBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  turnBackText: (theme) => ({
    marginRight: theme.spacing(2),
    color: '#F1F1F14D',
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
    color: theme.palette.neutral[50]
  })
};

export default styles;
