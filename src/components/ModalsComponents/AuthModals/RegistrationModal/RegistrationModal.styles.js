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
  link: {
    pointerEvents: 'none',
    color: '#B78AF7',
    textDecoration: 'none',
  },
};

export default styles;
