const styles = {
  container: (theme) => ({
    '@media (min-width: 600px)': { paddingX: theme.spacing(2) },
  }),
  header: {
    fontFamily: 'Open Sans',
    background: 'none',
    borderBottom: '0.3px solid rgba(161, 161, 170, 0.3)',
    boxShadow: 0,
  },
  toolbar: (theme) => ({
    justifyContent: 'space between',
    paddingY: theme.spacing(4),
  }),
  logoBox: {
    flexGrow: 1,
    lineHeight: 0,
  },
  logoMobileBox: (theme) => ({
    lineHeight: 0,
    marginY: theme.spacing(3),
  }),
  headerNav: {
    display: { xs: 'none', md: 'flex' },
    gap: '30px',
  },
  headerNavMobile: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginTop: theme.spacing(3),
  }),
  link: (theme) => ({
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    color: theme.palette.neutral[200],
    textDecoration: 'none',
  }),
  drawer: (theme) => ({
    paddingTop: theme.spacing(3),
    textAlign: 'center',
  }),
};
export default styles;
