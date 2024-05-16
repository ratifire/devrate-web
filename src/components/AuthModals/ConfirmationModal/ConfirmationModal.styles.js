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
  codeErrorText:(theme) => ({
    marginLeft: theme.spacing(3),
    color: theme.palette.text.error,
  }),
  mainTextWrapper:(theme) => ({
     display: 'flex', 
     flexDirection: 'column', 
     marginBottom: theme.spacing(4), 
    }),
  mainText: (theme) =>({
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
  spamCheckContainer:(theme) => ({
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
  // link: (theme) => ({
  //   paddingBottom: '60px',
  //   fontSize: theme.typography.subtitle3.fontSize,
  //   lineHeight: theme.typography.subtitle3.lineHeight,
  //   textDecoration: 'none',
  //   color: theme.palette.text.primary,
  // }),

  // New styles for input fields
  // input: {
  //   minWidth: 48,
  //   width: 48,
  //   textAlign: 'center',
  //   '& input': {
  //     padding: '10px',
  //     fontSize: '1rem',
  //     border: '1px solid #ced4da',
  //     borderRadius: '4px',
  //     backgroundColor: 'transparent',
  //     transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  //     '&:focus': {
  //       outline: 'none',
  //       borderColor: '#80bdff',
  //       boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
  //     },
  //   },
  // },
};

export default styles;
