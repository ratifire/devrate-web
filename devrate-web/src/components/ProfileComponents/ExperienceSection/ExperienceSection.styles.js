const styles = {
  experienceContainer: (theme) => ({
    width: '100%',
    padding: theme.spacing(4),
    background: theme.palette.background.level2,
    borderRadius: 'inherit',
  }),
  tabsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabsHeader: {
    borderBottom: '1px solid #ccc',
  },
  tabItem: {
    textTransform: 'none',
    fontSize: 20,
    fontWeight: '500',
  },
  icon: (theme) => ({
    color: theme.palette.primary[200],
  }),
  experienceItemContainer: (theme) => ({
    overflow: 'auto',
    maxHeight: 600, // to be adjusted with designers
    minWidth: '100%',
    background: theme.palette.background.level2,
  }),
};
export default styles;
