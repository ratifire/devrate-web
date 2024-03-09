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
    marginBottom: 24,
  },
  btn: (theme) => ({
    marginTop: 20,
    marginBottom: 50,
    paddingX: 32,
    paddingY: 16,
    fontsize: 16,
    width: '100%',
    lineHeight: '16px',
    fontWeight: 500,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  policyTermsContainer: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 1.43,
  },
  policyTermsLink: (theme) => ({
    marginRight: 10,
    color: theme.palette.text.primary,
  }),
  tooltip: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
};

export default styles;
