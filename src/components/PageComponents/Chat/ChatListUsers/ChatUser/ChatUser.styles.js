export const styles = {
  bg: (theme) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(0)}`,
    transition: 'all .1s linear',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: theme.palette.chatUser.bg.hover.backgroundColor,
    },
  }),
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(3),
    borderBottom: `1px solid #69696B`,
  }),
  text: (theme) => ({
    marginLeft: theme.spacing(2),
    flex: '1 1 calc(100% - 76px)',
    overflow: 'hidden',
    '>span': {
      display: 'block',
      color: theme.palette.chatUser.text.color,
      lineHeight: '20px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  }),
  info: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    ' > h6': {
      lineHeight: '24px',
      color: theme.palette.chatUser.info.color,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      paddingRight: theme.spacing(1),
    },
  }),
  time: (theme) => ({
    color: theme.palette.chatUser.time.color,
  }),
  badge: (theme) => ({
    marginLeft: theme.spacing(2),
    letterSpacing: '0.4px',
    lineHeight: '20px',
    padding: '0 3px',
    backgroundColor: theme.palette.chatUser.badge.backgroundColor,
    color: theme.palette.chatUser.badge.color,
    borderRadius: '20px',
    display: 'block',
  }),
};
