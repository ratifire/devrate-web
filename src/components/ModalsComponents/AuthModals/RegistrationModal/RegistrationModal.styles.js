const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots, sans-serif',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
    '@media (max-width: 1280px)': {
      marginBottom: '16px',
    },
  }),
  scrollBox: {
    '@media (max-width: 1440px)': {
      maxHeight: '287px',
      overflowY: 'auto',
      marginBottom: '24px',
    },
    '@media (max-width: 1280px)': {
      maxHeight: '192px',
      marginBottom: '16px',
    },
  },
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
  selectingAuth: (theme) => ({
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    gap: theme.spacing(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  subtitle: {
    maxWidth: '5%',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '0.15px',
    color: '#828283',
  },
  divider: {
    width: '45%',
  },
  wrapperBtn: {
    marginTop: '24px',
    marginBottom: '24px',
    '@media( max-width: 1280px )': {
      marginTop: '16px',
      marginBottom: '16px',
    },
  },
  tooltip: (theme) => ({
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
  iconStyle: (theme) => ({
    color: theme.palette.action.disabled,
  }),
  submitBtn: (theme) => ({
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 1.43,
    borderRadius: theme.spacing(2),
    padding: '12px',
  }),
  authLinks: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  authLink: {
    maxWidth: '241px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    fontSize: '18px',
    color: '#FFF',
    fontFamily: 'Open Sans, sans-serif',
    padding: '12px 24px',
    borderRadius: '86px',
    backgroundColor: 'rgba(68, 68, 70, 0.20)',
    border: '1px solid #444446',
  },
};

export default styles;
