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
      backgroundColor: theme.palette.background.level2,
    },
  }),
  scheduleWrapper: {
    gridColumn: '1/13',
    gridRow: '1/2',
  },
  scheduleTitle: (theme) => ({
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(4),
    }),
}