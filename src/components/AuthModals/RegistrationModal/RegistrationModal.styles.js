const styles = {
  title: (theme) => ({
    marginBottom: '30px',
    color: theme.palette.text.primary,
  }),
  newsAgreementText: (theme) => ({
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.28,
    color: theme.palette.text.primary,
  }),
  inputNameContainer: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    gridGap: '10px',
  },
  wrapperBtn: {
    marginTop: '37px',
    marginBottom: '50px',
  },
  policyTermsContainer: {
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: 1.43,
  },
  policyTermsLink: (theme) => ({
    marginRight: '10px',
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  tooltip: (theme) => ({
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
};

export default styles;
