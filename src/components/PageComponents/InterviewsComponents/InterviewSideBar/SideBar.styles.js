export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  }),
  interviewTitle: (theme) => ({
    marginBottom: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    lineHeight: '41.99px',
    letterSpacing: '0.25px',
  }),
  scrollContainer: (theme, heightParent) => ({
    paddingRight: '9px',
    maxHeight: `calc(${heightParent}px - 80px)`,
    height: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      paddingRight: theme.spacing(3),
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    },
  }),
};
