const styles = {
  title: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    letterSpacing: '-1.1%',
    marginTop: '48px',
    marginBottom: '30px',
  }),
  textLink: {
    fontSize: 14,
    fontWeight: 400,
    color: '#f1f1f180',
    textAlign: 'center',
    lineHeight: 1.5,
    marginBottom: '32px',
  },
  link: (theme) => ({
    marginRight: '10px',
    textDecoration: 'underline',
    color: theme.palette.text.primary,
  }),
  input: {
    width: '100%',
    marginBottom: '24px',
  },
  wrapperBtn: {
    marginTop: '32px',
    marginBottom: '50px',
  },
  policyText: (theme) => ({
    width: '100%',
    fontSize: 14,
    lineHeight: 1.43,
    fontWeight: 300,
    textAlign: 'center',
    // marginBottom: 36,
    color: theme.palette.text.primary,
  }),
  turnBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  turnBackText: {
    marginRight: '10px',
    fontSize: 14,
    lineHeight: 1.43,
    color: '#F1F1F14D',
  },
  turnBackLink: (theme) => ({
    fontSize: 14,
    lineHeight: 1.43,
    textDecoration: 'underline',
    color: theme.palette.text.primary,
    paddingY: 0,
    paddingX: 0,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
};
export default styles;
