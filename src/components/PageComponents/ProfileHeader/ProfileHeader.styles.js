const styles = {
  header: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingY: '12px',
    paddingX: theme.spacing(3),
    width: '100%',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    backgroundImage: 'none',
    boxShadow: 'none',
    flexShrink: 0,
    paddingLeft: '21px',
    '@media (min-width: 1272px)': {
      paddingY: theme.spacing(3),
      paddingRight: theme.spacing(4),
    },
  }),
  logoBox: {
    marginRight: 'auto',
    lineHeight: 0,
  },
  headerNav: (theme) => ({
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: theme.spacing(4),
  }),
};

export default styles;
