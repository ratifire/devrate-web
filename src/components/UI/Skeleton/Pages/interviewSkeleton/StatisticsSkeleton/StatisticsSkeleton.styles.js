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
    width: '150px',
    height: '24px',
  }),

  statisticsCharts: (theme) => ({
    padding: 0,
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    width: '100%',
    paddingY: theme.spacing(3),
  }),

  skillContainer: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }),

  skillTitle: (theme) => ({
    marginLeft: theme.spacing(5),
    alignSelf: 'start',
    marginBottom: theme.spacing(2),
  }),
};
