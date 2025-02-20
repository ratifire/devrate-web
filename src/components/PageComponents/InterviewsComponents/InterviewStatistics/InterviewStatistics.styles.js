export const styles = {
  statisticsWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.statistics.innerBackground,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),

  statisticsTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),

  statisticsCharts: (theme) => ({
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    paddingY: theme.spacing(3),
  }),

  skillContainer: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    ' > div': {
      padding: 0,
      height: '82px',
    },
  }),

  skillTitle: {
    padding: 0,
  },
};
