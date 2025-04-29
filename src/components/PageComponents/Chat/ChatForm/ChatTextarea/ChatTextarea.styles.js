export const styles = {
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
