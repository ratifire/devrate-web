export const styles = {
  menu: (theme) => ({
    padding: '10px',
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.neutral[900],
      color: theme.palette.neutral[100],
    },
  }),
  itemIcon: {
    width: 14,
    height: 14,
    marginRight: '10px'
  },
  menuItem: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.neutral[900],
    color: theme.palette.neutral[100],
    '&:hover': {
      backgroundColor: theme.palette.neutral[800],
      color: theme.palette.primary[200],
    },
  }),
  divider: (theme) => ({
    backgroundColor: theme.palette.neutral[600],
  })
};
