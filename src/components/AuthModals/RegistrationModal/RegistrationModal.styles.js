const styles = {
  title: (theme) => ({
    marginTop: 50,
    marginBottom: 30,
    color: theme.palette.text.primary,
    fontSize: 16,
  }),

  newsAgreementText: (theme) => ({
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 1.28,
    color: theme.palette.text.primary,
  }),
  inputNameContainer: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    gridGap: 10,
  },
  wrapperBtn: {
    marginTop: 37,
    marginBottom: 50,
  },
  policyTermsContainer: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 1.43,
  },
  policyTermsLink: (theme) => ({
    marginRight: 10,
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  tooltip: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
};

export default styles;
