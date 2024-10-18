export const styles = {
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  }),
  boxContent: (theme) => ({
    paddingTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
};
