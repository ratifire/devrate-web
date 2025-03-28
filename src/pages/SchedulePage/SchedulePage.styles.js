export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingX: theme.spacing(2),
    '@media (min-width: 1272px)': {
      maxWidth: '1536px',
    },
    '@media (min-width: 600px)': {
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.schedule.contentWrapper.backgroundColor,
      backgroundImage: 'none',
    },
  }),
  scheduleWrapper: {
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
    maxWidth: '100%',
    width: '100%',
    backgroundColor: theme.palette.schedule.backgroundColor,
    boxShadow: 'none',
    borderRadius: 2,
    backgroundImage: 'none',
    display: 'flex',
    gap: theme.spacing(3),
  }),
  sidebar: {
    padding: '0 8px',
    maxWidth: '290px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
};
