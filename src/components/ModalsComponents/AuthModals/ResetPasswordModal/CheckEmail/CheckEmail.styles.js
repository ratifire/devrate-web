const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  }),
  textLink: (theme) => ({
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  }),
  box: (theme) => ({
    display: 'flex',
    gridGap: theme.spacing(3),
    justifyContent: 'center',
  }),
  link: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'underline',
  }),
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
};
export default styles;
