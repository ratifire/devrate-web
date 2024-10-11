export const styles = {
  iconButton: (theme) => ({
    color: theme.palette.text.primary,
  }),
  badge: (theme) => ({
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.error.main,
      color: 'white',
    },
  }),
  menuPaper: () => ({
    maxHeight: 300,
    width: 350,
  }),
  menuItem: () => ({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  notificationText: (theme) => ({
    color: theme.palette.text.primary,
  }),
  newLabel: (theme) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  }),
};
