export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: theme.palette.schedule.sideBarEvent.backgroundColor,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
  }),
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 2,
  },
};
