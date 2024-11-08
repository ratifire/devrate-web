export const styles = {
  title: (theme) => ({
    marginBottom: theme.spacing(4),
  }),
  box: (theme) => ({
    padding: theme.spacing(4),
    paddingBottom: 0,
  }),
  card: {
    marginBottom: '20px',
  },
  list: (theme) => ({
    maxHeight: '586px',
    height: '100%',
    overflowY: 'auto',
    paddingRight: theme.spacing(3),
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 8,
      marginLeft: '10px',
      paddingLeft: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    },
  })
};
