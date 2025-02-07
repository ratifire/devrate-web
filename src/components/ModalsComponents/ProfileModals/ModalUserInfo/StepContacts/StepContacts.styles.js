export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: `${theme.spacing(0)} ${theme.spacing(3)}`,
    '@media (max-height: 708px)': {
      overflowY: 'auto',
      maxHeight: '272px',
      paddingTop: '10px',
      paddingRight: theme.spacing(3),
      '&::-webkit-scrollbar': {
        width: 10,
      },
      '&::-webkit-scrollbar-track': (theme) => ({
        backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
        borderRadius: 8,
      }),
      '&::-webkit-scrollbar-thumb': (theme) => ({
        borderRadius: 6,
        backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
      }),
    },
  }),
  input100: {
    flex: `0 1 100%`,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingY: '14px',
    maxWidth: '228px',
  },
};
