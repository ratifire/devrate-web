const styles = {
  experienceContainer: (theme) => ({
    width: '100%',
    paddingX: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    borderRadius: 'inherit',
    height: '100%',
    minHeight: '382px',
    '@media (min-width: 1272px)': {
      paddingTop: theme.spacing(4),
      paddingX: theme.spacing(4),
    },
  }),
  tabsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperTab: (theme) => ({
    borderBottom: '1px solid',
    borderColor: theme.palette.tabsEl.borderColor,
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.tabsEl.indicator,
    },
  }),
  tabItem: (theme) => ({
    textTransform: 'none',
    fontSize: 20,
    fontWeight: '500',
    '&.Mui-selected': {
      color: theme.palette.tabsEl.focused.color,
    },
  }),
  iconBtn: (theme) => ({
    color: theme.palette.action.hover,
    borderRadius: 1,
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      color: theme.palette.action.active,
    },
  }),
  experienceItemContainer: (theme) => ({
    overflow: 'auto',
    minWidth: '100%',
    paddingTop: '20px',
    paddingRight: theme.spacing(3),
    minHeight: '300px',
    height: 'calc(100vh - 506px)',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    }),
  }),
};
export default styles;
