export const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '500px',
  },
  btnIcon: (theme) => ({
    borderRadius: 1,
    color: theme.palette.chat.badge.fill,
  }),
  badge: (theme) => ({
    position: 'relative',
    '>.MuiBadge-badge': {
      transform: 'none',
      top: 0,
      right: 0,
      backgroundColor: theme.palette.chat.badge.backgroundColor,
      boxShadow: `0 0 2px 0 ${theme.palette.chat.badge.boxShadow}`,
    },
    '>svg path': {
      fill: theme.palette.chat.badge.fill,
    },
  }),
  position: () => ({
    position: 'fixed',
    bottom: 0,
    right: '100px',
    zIndex: 100,
  }),
};
