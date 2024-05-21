export const styles = {
  wrapper: (theme) => ({
    paddingBottom: theme.spacing(3),
  }),
  input100: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
  }),
  iconBtn: (theme) => ({
    marginTop: '4px',
    padding: '12px',
    borderRadius: 1,
    color: theme.palette.primary[200],
  }),
  list: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gridGap: theme.spacing(3),
  }),
};
