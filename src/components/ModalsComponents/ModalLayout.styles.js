export const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 2,
    backgroundColor: theme.palette.modals.backgroundColor,
    position: 'relative',
    width: '100%',
    maxWidth: '732px',
  }),
  btnIcon: (theme) => ({
    position: 'absolute',
    top: '24px',
    right: '24px',
    color: theme.palette.iconBtn.btnClose.color,
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
