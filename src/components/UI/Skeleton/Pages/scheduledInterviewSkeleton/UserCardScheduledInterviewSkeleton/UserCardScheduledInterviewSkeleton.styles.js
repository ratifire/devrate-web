export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: theme.spacing(4),
  }),
  container: {
    display: 'flex',
    gap: '16px',
    width: '100%',
  },
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    width: '100%',
  }),
  img: {
    width: '100%',
    maxWidth: '132px',
  },
};
