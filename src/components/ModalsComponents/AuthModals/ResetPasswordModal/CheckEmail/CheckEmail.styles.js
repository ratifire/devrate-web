const styles = {
  title: (theme) => ({
    fontFamily: 'Zen Dots',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
  subtitle: (theme) => ({
    fontFamily: 'Open Sans',
    fontSize: '18px',
    color: theme.palette.neutral[100],
    marginBottom: theme.spacing(4),
  }),
  bottom_subtitle: (theme) => ({
    fontFamily: 'Open Sans',
    fontSize: '18px',
    color: theme.palette.neutral[100],
  }),
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gridGap: theme.spacing(2),
    alignItems: 'center',
  }),
  link: (theme) => ({
    textDecoration: 'underline',
    color: theme.palette.action.active,
    fontWeight: 600,
    fontSize: '18px',
    fontLineHeight: 1.5,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
};
export default styles;
