const styles = {
  title: (theme) => ({
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  }),
  textLink: (theme) => ({
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  }),
  link: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'underline',
    marginTop: theme.spacing(4),
  }),
  input: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
  }),
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
  tooltip: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
  mainTextWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
  }),
  mainText: (theme) => ({
    display: 'inline',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  }),
  userEmail: (theme) => ({
    color: theme.palette.text.primary,
  }),
  resetPasswordForm: (theme) => ({
    display: 'flex',
    gap: theme.spacing(2), 
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  }),
};
export default styles;