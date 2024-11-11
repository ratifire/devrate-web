export const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '20px',
  },
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '32px',
  },
  box: (theme) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: '984px',
    width: '100%',
    overflowX: 'auto',
    gap: theme.spacing(4),
    paddingBottom: '15px',
    '& > span': {
      borderRadius: 4,
      flexShrink: 0,
    },
    '&::-webkit-scrollbar': {
      height: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl,
    },
  }),
};
