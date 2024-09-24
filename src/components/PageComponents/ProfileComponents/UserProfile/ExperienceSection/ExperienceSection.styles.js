const styles = {
  experienceContainer: (theme) => ({
    width: '100%',
    paddingX: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    background: theme.palette.background.level2,
    borderRadius: 'inherit',
    height: '100%',
    minHeight: '382px',

  }),
  tabsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperTab:(theme) => ({
    borderBottom: '1px solid',
    borderColor: theme.palette.neutral['400'],
  }),
  tabsHeader: {
    borderBottom: '1px solid #ccc',
  },
  tabItem: {
    textTransform: 'none',
    fontSize: 20,
    fontWeight: '500',


  },
  icon: (theme) => ({
    color: theme.palette.primary['200'],
  }),
  experienceItemContainer: (theme) => ({
    overflow: 'auto',
    maxHeight: 300, // to be adjusted with designers
    minWidth: '100%',
    background: theme.palette.background.level2,
    paddingRight: theme.spacing(3),
    height: '100%',

    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.neutral['600'],
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    }),
  }),
};
export default styles;
