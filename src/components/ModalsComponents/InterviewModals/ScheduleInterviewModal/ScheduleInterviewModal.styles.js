export const styles = {
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  sendBox: (theme) => ({
    display: 'flex',
    gap: theme.spacing(3),
    alignSelf: 'start',
    maxWidth: '472px',
    width: '100%',
  }),
  btn: {
    maxWidth: '228px',
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  errorMessage: (theme) => ({
    color: theme.palette.error.main,
    marginTop: '-18px',
    marginBottom: '15px',
  }),
};
