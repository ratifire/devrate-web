export const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '500px',
  },
  btnIcon: (theme) => ({
    borderRadius: 1,
    color: theme.palette.notifications.badge.fill,
  }),
  badge: (theme) => ({
    position: 'relative',
    '>.MuiBadge-badge': {
      transform: 'none',
      top: 0,
      right: 0,
      backgroundColor: theme.palette.notifications.badge.backgroundColor,
      boxShadow: `0 0 2px 0 ${theme.palette.notifications.badge.boxShadow}`,
    },
    '>svg path': {
      fill: theme.palette.notifications.badge.fill,
    },
  }),
  position: () => ({
    position: 'fixed',
    bottom: 0,
    right: '100px',
    zIndex: 100,
  }),
};
