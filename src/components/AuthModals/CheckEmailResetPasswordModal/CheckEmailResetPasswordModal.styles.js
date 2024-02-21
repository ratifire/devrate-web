const styles = {
  title: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: 48,
    marginBottom: 30,
  }),
  textLink: () => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    color: '#f1f1f180',
    textAlign: 'center',
    marginTop: 36,
  }),
  box: () => ({
    marginTop: 50,
    display: 'flex',
    gridGap: 14,
    justifyContent: 'center',
    fontSize: 14,
    lineHeight: 1.43,
  }),
  link: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'underline',
  }),
  input: () => ({
    width: '100%',
    marginBottom: 24,
  }),
  textHelper: () => ({
    position: 'absolute',
    bottom: '-23px',
  }),
  btn: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '16px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    paddingY: 20,
    paddingX: 12,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:disabled': {
      backgroundColor: '#7D66F566',
      color: '#FFFFFF80',
    },
  }),
};
export default styles;
