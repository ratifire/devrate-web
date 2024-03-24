const styles = {
  container: {
    '@media (min-width: 600px)': { paddingX: '12px' },
  },
  header: {
    background: 'none',
    borderBottom: '0.3px solid rgba(161, 161, 170, 0.3)',
    boxShadow: 0,
  },
  toolbar: {
    justifyContent: 'space between',
    paddingY: 28.5,
  },
  logoBox: {
    flexGrow: 1,
    lineHeight: 0,
  },
  logoMobileBox: {
    lineHeight: 0,
    marginY: 15,
  },
  headerNav: {
    display: { xs: 'none', md: 'flex' },
    gap: 30,
  },
  headerNavMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    marginTop: 15,
  },
  link: (theme) => ({
    marginLeft: 0,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    color: theme.palette.text.secondary,
    textDecoration: 'none',
  }),
  drawer: {
    paddingTop: 20,
    textAlign: 'center',
  },
};
export default styles;
