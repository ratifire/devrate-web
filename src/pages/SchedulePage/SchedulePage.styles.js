export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(4),
    paddingX: theme.spacing(2),
    '@media (min-width: 1272px)': {
      maxWidth: '1536px',
    },
    '@media (min-width: 600px)': {
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto auto auto',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.schedule.contentWrapper.backgroundColor,
      backgroundImage: 'none',
    },
  }),
  scheduleWrapper: {
    gridColumn: '1/13',
    gridRow: '1/2',
    padding: '24px',
    backgroundImage: 'none',
    boxShadow: 'none',
  },
  scheduleTitle: (theme) => ({
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    lineHeight: '41.99px',
    letterSpacing: '0.25px',
  }),
  calendarWrapper: (theme) => ({
    backgroundColor: theme.palette.schedule.backgroundColor,
    boxShadow: 'none',
    borderRadius: 2,
    backgroundImage: 'none',
  }),
};
