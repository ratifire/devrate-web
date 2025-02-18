export const styles = {
  wrapper: {
    padding: '8px 16px',
    marginBottom: '16px',
  },
  receiver: (theme) => ({
    backgroundColor: theme.palette.chatMessage.receiver.backgroundColor,
    borderRadius: '0 16px 16px 16px',
    maxWidth: 'calc(100% - 28px)',
    marginRight: 'auto',
    ' >.MuiTypography-body': {
      color: theme.palette.chatMessage.receiver.text.color,
      wordWrap: 'break-word',
    },
    ' svg': {
      fontSize: '24px',
      color: theme.palette.chatMessage.receiver.icon.color,
    },
    ' span': {
      color: theme.palette.chatMessage.receiver.time.color,
    },
    '@media (min-width: 1272px)': {
      maxWidth: 'calc(100% - 100px)',
    },
  }),
  sender: (theme) => ({
    backgroundColor: theme.palette.chatMessage.sender.backgroundColor,
    borderRadius: '16px 0 16px 16px',
    maxWidth: 'calc(100% - 28px)',
    marginLeft: 'auto',
    ' >.MuiTypography-body': {
      color: theme.palette.chatMessage.sender.text.color,
      wordWrap: 'break-word',
    },
    ' svg': {
      fontSize: '24px',
      color: theme.palette.chatMessage.sender.icon.color,
      marginLeft: '8px',
    },
    ' span': {
      color: theme.palette.chatMessage.sender.time.color,
    },
    '@media (min-width: 1272px)': {
      maxWidth: 'calc(100% - 100px)',
    },
  }),
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};
