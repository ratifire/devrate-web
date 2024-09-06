export const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: theme.palette.background.level3,
    color: 'white',
    width: 30,
    height: 30,
    cursor: 'default',

  },
  completed: {
    backgroundColor: (theme) => theme.palette.primary['400'],
  },
  active: {
    backgroundColor: (theme) => theme.palette.primary['400'],
  },
});
