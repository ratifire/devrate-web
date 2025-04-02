export const styles = {
  scrollContainer: (theme, height) => ({
    overflow: 'auto',
    minWidth: '100%',
    height: `calc(${height}px - 368px)`,
    marginLeft: theme.spacing(2),
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
