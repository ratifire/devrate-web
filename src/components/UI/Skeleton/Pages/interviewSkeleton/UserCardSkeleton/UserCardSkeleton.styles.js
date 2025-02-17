export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 2,
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    boxShadow: 'none',
    backgroundImage: 'none',
    maxWidth: '480px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  box: {
    display: 'flex',
    gap: '16px',
  },
  boxInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
};
