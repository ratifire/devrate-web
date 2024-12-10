export const styles = {
  container: {
    maxHeight: '100%',
    width: '480px',
    height: '684px',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '13px 16px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: '#252527',
  },
  name: {
    color: '#FFFFFF',
    fontSize: '14px',
    marginRight: 'auto',
    marginLeft: '8px',
  },
  btnIcon: (theme) => ({
    color: '#CEB0FA',
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  btnIconScroll: (theme) => ({
    position: 'sticky',
    width: '44px',
    height: '44px',
    bottom: '4px',
    left: 'auto',
    marginLeft: 'auto',
    zIndex: 10,
    color: '#CEB0FA',
    borderRadius: 1,
    backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  chatWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#303032',
    padding: '16px 16px 0 16px',
    maxHeight: '532px',
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
        width: 10,
      },
      '&::-webkit-scrollbar-track': (theme) => ({
        backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
        borderRadius: 8,
      }),
      '&::-webkit-scrollbar-thumb': (theme) => ({
        borderRadius: 6,
        backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
      }),
    },
  },
  btnSend: {
    position: 'absolute',
    top: 'calc(50% - 12px)',
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
