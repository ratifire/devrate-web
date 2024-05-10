export const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 2,
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    width: '100%',
    maxWidth: '732px',
  }),
  btnIcon: (theme) => ({
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(4),
    color: theme.palette.neutral['200'],
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
