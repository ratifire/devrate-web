export const styles = {
  position: (theme) => ({
    position: 'fixed',
    top: 'calc(100% - 684px)',
    left: 'calc(100% - 580px)',
    zIndex: 1500,
    boxShadow: `0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)`,
    border: `1px solid ${theme.palette.chatForm.borderColor}`,
    height: '100%',
    maxHeight: '683px',
    backgroundColor: theme.palette.chatForm.backgroundColor,
    borderRadius: 1,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'stretch',
    padding: '13px 16px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: theme.palette.chatForm.wrapper.backgroundColor,
  }),
  wrapperName: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'grab',
  },
  linkName: {
    textDecoration: 'none',
  },
  name: (theme) => ({
    color: theme.palette.chatForm.name.color,
    fontSize: '14px',
    marginRight: 'auto',
    marginLeft: '8px',
  }),
  btnIcon: (theme) => ({
    width: '44px',
    height: '44px',
    marginTop: '4px',
    color: theme.palette.chatForm.icon.color,
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.chatForm.icon.hover.backgroundColor,
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
  chatWrapper: (theme) => ({
    flex: '1 1 100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.chatForm.chatWrapper.backgroundColor,
    padding: '16px 16px 0 16px',
    maxHeight: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    },
  }),
  chatForm: (theme) => ({
    borderTop: `1px solid ${theme.palette.chatForm.chatTextarea.borderColor}`,
    backgroundColor: theme.palette.chatForm.chatTextarea.backgroundColor,
    padding: '16px',
    position: 'relative',
  }),
  textArea: (theme) => ({
    backgroundColor: theme.palette.chatForm.textarea.backgroundColor,
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
  }),
  btnSend: (theme) => ({
    position: 'absolute',
    top: '24px',
    right: '28px',
    height: '24px',
    width: '24px',
    padding: 0,
    borderRadius: 1,
    '&:disabled': {
      '> svg': {
        ' path': {
          fill: theme.palette.chatForm.btnSend.disabled.fill,
        },
      },
    },
    '> svg': {
      fontSize: '24px',
      ' path': {
        fill: theme.palette.chatForm.btnSend.fill,
      },
    },
  }),
};
