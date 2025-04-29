export const styles = {
  btnIconScroll: (theme) => ({
    position: 'sticky',
    width: '44px',
    height: '44px',
    bottom: '4px',
    left: 'auto',
    marginLeft: 'auto',
    zIndex: 10,
    color: theme.palette.chatForm.btnIconScroll.color,
    borderRadius: 1,
    backgroundColor: theme.palette.chatForm.btnIconScroll.backgroundColor,
    transition: 'all .2s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
      backgroundColor: theme.palette.chatForm.btnIconScroll.hover.backgroundColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
