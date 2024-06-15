export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: `${theme.spacing(0)} ${theme.spacing(3)}`,
    paddingBottom: theme.spacing(3),
  }),
  input50: (theme) => ({
    flex: `0 1 calc(50% - ${theme.spacing(2)})`,
  }),
  input100: {
    flex: `0 1 100%`,
  },
  wrapperBtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    maxWidth: '228px',
    width: '100%',
  },
  btn: {
    paddingY: '14px',
  },
};
