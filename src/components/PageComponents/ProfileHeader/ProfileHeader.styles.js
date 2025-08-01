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
    '@media (min-width: 1272px)': {
      paddingY: theme.spacing(3),
      paddingX: theme.spacing(4),
    },
  }),
  toolbar: {
    justifyContent: 'space between',
  },
  logoBox: {
    marginRight: 'auto',
    lineHeight: 0,
  },
  headerNav: (theme) => ({
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: theme.spacing(4),
  }),
  userPhoto: (theme) => ({
    minWidth: 44,
    width: 44,
    height: 44,
    padding: 0,
    '&:hover': {
      backgroundColor: theme.palette.iconBtn.dehazeIcon.backgroundColor,
    },
  }),
  dehazeIcon: (theme) => ({
    color: theme.palette.iconBtn.dehazeIcon.color,
  }),
};
export default styles;
