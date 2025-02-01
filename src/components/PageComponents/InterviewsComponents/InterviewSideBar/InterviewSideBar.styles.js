export const styles = {
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }),
  interviewTitle: (theme) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    lineHeight: '41.99px',
    letterSpacing: '0.25px',
  }),
  scrollContainer: (theme) => ({
    overflow: 'auto',
    minWidth: '100%',
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
