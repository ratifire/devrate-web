export const styles = {
  title: () => ({
    marginBottom: '49px',
  }),
  input: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
    minHeight: '40px',
  }),
  btn: (theme) => ({
    paddingY: '14px',
    maxWidth: '228px',
    marginTop: theme.spacing(4),
    alignSelf: 'flex-end',
  }),
  form: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  snackBar: {
    vertical: 'top',
    horizontal: 'center',
  },
  snackbarTransition: {
    '& .MuiSnackbar-root': {
      transition: 'transform 0.4s ease-in-out',
    },
  },
  alertContent: {
    width: '100%'
  },
};
