export const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: (theme) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: '24px',
    backgroundColor: theme.palette.modals.backgroundColor,
    borderRadius: 2,
    '@media (min-width: 580px)': {
      maxWidth: 451,
    },
  }),
  btnIcon: (theme) => ({
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(4),
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
