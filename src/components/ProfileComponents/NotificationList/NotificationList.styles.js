const styles = {
  scrollWrapper: (theme) => ({
    maxHeight: 432,
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: theme.spacing(2),

    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.neutral['600'],
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    })
  }),
  wrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    width: '100%',
    backgroundColor: theme.palette.background.level2,
    maxWidth: 606,
  })
};

export default styles;