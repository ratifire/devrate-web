export const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column-reverse',
  },
  wrapperProgress: {
    width: '100%',
    mr: 1,
  },
  progress: (theme) => ({
    backgroundColor: theme.palette.neutral['400'],
    height: 20,
    borderRadius: 2.5,
    '>span': (theme) => ({
      backgroundColor: theme.palette.primary['400'],
      borderRadius: 2.5,
    }),
  }),
  wrapperText: {
    minWidth: 35,
  },
  text: (theme) => ({
    color: theme.palette.text.secondary,
  }),
};
