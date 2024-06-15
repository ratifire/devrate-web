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
    marginTop: theme.spacing(1),
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
  btn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingY: '14px',
    maxWidth: '228px',
  },
  wrapperLanguages: (theme) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gridGap: theme.spacing(3),
  }),
};
