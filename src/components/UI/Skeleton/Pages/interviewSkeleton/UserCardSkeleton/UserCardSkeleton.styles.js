export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 2,
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    boxShadow: 'none',
    backgroundImage: 'none',
    width: '100%',
    height: '100%',
  }),
  box: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  boxInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: '1',
  },
};
