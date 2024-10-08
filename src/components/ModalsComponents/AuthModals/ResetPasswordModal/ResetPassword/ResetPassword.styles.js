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
    marginBottom: theme.spacing(4),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral[100]
      },
    },
    '&, & input': {
      backgroundColor: `${theme.palette.background.default} !important`,
      color: `${theme.palette.text.primary} !important`,
    },
    '&:-webkit-autofill, & input:-webkit-autofill': {
      '-webkit-text-fill-color': `${theme.palette.text.primary} !important`,
      'box-shadow': `0 0 0 100px ${theme.palette.background.default} inset !important`,
      'transition': 'background-color 5000s ease-in-out 0s',
    },
  }),
  iconStyle: (theme) => ({
    color: theme.palette.neutral[50]
  }),
};
export default styles;
