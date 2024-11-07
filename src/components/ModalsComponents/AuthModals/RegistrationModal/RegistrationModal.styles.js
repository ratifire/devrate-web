const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots, sans-serif',
    marginBottom: theme.spacing(4),
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
    marginTop: '24px',
    marginBottom: '24px',
  },
  policyTermsContainer: {
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: 1.43,
  },
  policyTermsLink: (theme) => ({
    pointerEvents: 'none', //Remove it to enable links
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    lineHeight: 1.5,
    marginRight: '24px',
    color: theme.palette.action.active,
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
  iconStyle: (theme) => ({
    color: theme.palette.action.disabled,
  }),
};

export default styles;
