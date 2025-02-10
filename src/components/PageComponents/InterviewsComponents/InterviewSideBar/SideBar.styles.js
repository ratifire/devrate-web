export const styles = {
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
  }),
  interviewTitle: (theme) => ({
    marginBottom: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    lineHeight: '41.99px',
    letterSpacing: '0.25px',
  }),
  scrollContainer: (theme) => ({
    overflowY: 'auto',
    minWidth: '100%',
    height: 'calc(100vh - 100px)',
    paddingRight: theme.spacing(3),
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.background.level2,
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    }),
  }),
};
