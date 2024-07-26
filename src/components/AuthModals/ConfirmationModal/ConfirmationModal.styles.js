const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  }),
  codeErrorWrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  }),
  codeErrorIcon: (theme) => ({
    width: '20px',
    height: '20px',
    color: theme.palette.text.error,
  }),
  codeErrorText: (theme) => ({
    marginLeft: theme.spacing(3),
    color: theme.palette.text.error,
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
  wrapperBtn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
  spamCheckContainer: (theme) => ({
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
    textAlign: 'center',
  }),
  turnBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnBackText: (theme) => ({
    marginRight: theme.spacing(2),
    color: theme.palette.text.secondary,
  }),
  formInput: (theme) => ({
    display: 'flex', 
    gap: 2, 
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral[100]
      },
    },
    
  }),
  btnWrapper: (theme) => ({
    display: 'flex', 
    justifyContent: 'center', 
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
  btn: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }),
};

export default styles;
