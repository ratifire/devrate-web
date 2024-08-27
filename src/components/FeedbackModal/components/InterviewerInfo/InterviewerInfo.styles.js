export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  data: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
  }),
  icon: {
    width: '14px',
    height: '14px',
  },
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
  }),
};
