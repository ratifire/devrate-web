const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  title: (theme) => ({
    fontFamily: 'Tektur, sans-serif',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: 1.5,
  }),
  message: (theme) => ({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    color: theme.palette.neutral[100],
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '16px',
      fontSize: '16px',
    },
  }),
  wrapperBtn: (theme) => ({
    marginBottom: theme.spacing(4),
    width: '100%',
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
