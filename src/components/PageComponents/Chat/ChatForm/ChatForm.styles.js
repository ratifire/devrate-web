export const styles = {
  position: () => ({
    position: 'fixed',
    top: 'calc(100% - 684px)',
    left: 'calc(100% - 580px)',
    zIndex: 1500,
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    height: '100%',
    maxHeight: '683px',
  }),
  resizeHandle: {
    position: 'absolute',
    width: '5px',
    height: '100%',
    backgroundColor: 'transparent',
    top: 0,
    right: -5,
    cursor: 'ew-resize',
    zIndex: 10,
  },
  container: {
    maxHeight: '683px',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'stretch',
    padding: '13px 16px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#252527',
  },
  wrapperName: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'grab',
  },
  name: {
    color: '#FFFFFF',
    fontSize: '14px',
    marginRight: 'auto',
    marginLeft: '8px',
  },
  btnIcon: (theme) => ({
    width: '44px',
    height: '44px',
    marginTop: '4px',
    color: '#CEB0FA',
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    },
    svg: {
      fontSize: '20px',
    },
  }),
  linkAvatar: {
    textDecoration: 'none',
    display: 'block',
    borderRadius: '50%',
  },
  btnIconScroll: {
    position: 'sticky',
    width: '44px',
    height: '44px',
    bottom: '4px',
    left: 'auto',
    marginLeft: 'auto',
    zIndex: 10,
    color: '#FFFFFF',
    borderRadius: 1,
    backgroundColor: '#8133F1',
    transition: 'all .2s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#444446',
    },
    svg: {
      fontSize: '18px',
    },
  },
  chatWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#303032',
    padding: '16px 16px 0 16px',
    maxHeight: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 0,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    }),
  },
  chatForm: {
    backgroundColor: '#252527',
    padding: '16px',
    position: 'relative',
  },
  textArea: {
    backgroundColor: '#252527',
    border: 'none',
    minHeight: '40px',
    ' >.MuiOutlinedInput-root': {
      padding: '8px 36px 8px 12px',
      height: '100%',
    },
    ' textarea.MuiOutlinedInput-input': {
      '&::-webkit-scrollbar': {
        width: 0,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent',
      },
    },
  },
  btnSend: {
    position: 'absolute',
    top: '24px',
    right: '28px',
    height: '24px',
    width: '24px',
    padding: 0,
    borderRadius: 1,
    '> svg': {
      fontSize: '24px',
    },
  },
};
