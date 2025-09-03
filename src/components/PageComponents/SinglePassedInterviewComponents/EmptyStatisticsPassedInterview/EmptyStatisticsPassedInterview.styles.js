export const styles = {
  emptyStatistics: (theme) => ({
    position: 'relative',
    gridColumn: '1/13',
    gridRow: '3/5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    '& .emptyTitle': {
      position: 'absolute',
      left: '24px',
      top: '-44px',
      marginBottom: 0,
    },
  }),
  mascotStatsBox: {
    maxWidth: '610px',
    width: '100%',
    height: '352px',
    marginBottom: (theme) => theme.spacing(3),
  },
  emptyStatsText: (theme) => ({
    marginTop: (theme) => theme.spacing(3),
    color: theme.palette.titleColor,
  }),
};
