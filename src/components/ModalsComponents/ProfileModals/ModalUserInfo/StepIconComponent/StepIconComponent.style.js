export const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: theme.palette.background.level3,
    color: theme.palette.steper.color,
    width: 30,
    height: 30,
    cursor: 'default',

  },
  completed: {
    backgroundColor: (theme) => theme.palette.steper.completed.circle.backgroundColor,
    color: theme.palette.steper.completed.circle.color

  },
  active: {
    backgroundColor: (theme) => theme.palette.steper.active.circle.backgroundColor,
    color: theme.palette.steper.active.circle.color
  },
});
