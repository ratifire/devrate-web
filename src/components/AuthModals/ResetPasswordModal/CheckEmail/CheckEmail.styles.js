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
  wrapperBtn: () => ({
    marginTop: 40,
    marginBottom: 50,
  }),
};
export default styles;
