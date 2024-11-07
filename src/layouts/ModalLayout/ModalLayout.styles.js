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
    padding: '22px 16px',
    backgroundColor: theme.palette.neutral[900],
    borderRadius: 4,
    width: '95%',
    '@media (min-width: 580px)': {
      width: 570,
      padding: '26px 36px',
    },
  }),
  iconContainer: {
    width: 147,
    height: 18,
    marginBottom: '48px',
  },
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
