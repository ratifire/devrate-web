const styles = {
  title: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    letterSpacing: '-1.1%',
    marginTop: 48,
    marginBottom: 30,
  }),
  text: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginTop: 50,
  }),
  textLink: () => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    color: '#f1f1f180',
    textAlign: 'center',
    marginTop: 36,
  }),
  link: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '20px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'underline',
    marginTop: 36,
  }),
  input: () => ({
    width: '100%',
    marginBottom: 24,
  }),
  wrapperBtn: () => ({
    marginTop: 44,
    marginBottom: 50,
  }),
  tooltip: (theme) => ({
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '18px',
    color: theme.palette.text.primary,
  }),
};
export default styles;
