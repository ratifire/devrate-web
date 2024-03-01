const styles = {
  container: () => ({
    '@media (min-width: 600px)': { paddingX: '12px' },
  }),
  link: (theme) => ({
    marginLeft: 0,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    flexBasis: '100%',
    textAlign: 'center',
    marginBottom: 20,
    '@media (min-width: 520px)': {
      marginLeft: 16,
      marginBottom: 0,
      textAlign: 'left',
    },
  }),
  copyright: (theme) => ({
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  }),
  trademarks: (theme) => ({
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    color: theme.palette.text.grey,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  }),
  wrapperNav: () => ({
    marginTop: 20,
    marginLeft: 0,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media (min-width: 768px)': {
      marginLeft: 'auto',
    },
    '@media (min-width: 520px)': {
      display: 'block',
    },
  }),
  wrapper: () => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    '@media (min-width: 768px)': {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
  }),
  footer: () => ({
    paddingTop: 170,
    paddingBottom: 60,
  }),
  logoBoy: () => ({
    width: 30,
    height: 47,
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'inline-block',
    },
  }),
  socialGroup: () => ({
    margin: '0 auto',
    maxWidth: 200,
    display: 'flex',
    gridGap: 20,
    '@media (min-width: 520px)': {
      display: 'inline-block',
    },
  }),
};
export default styles;
