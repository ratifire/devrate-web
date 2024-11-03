const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: 1.5,
  }),
  message: (theme) => ({
    fontFamily: 'Open Sans',
    fontSize: '18px',
    color: theme.palette.neutral[100],
    marginBottom: theme.spacing(4),
  }),
  wrapperBtn: (theme) => ({
    marginBottom: theme.spacing(4),
    width: '100%',
  }),
};

export default styles;
