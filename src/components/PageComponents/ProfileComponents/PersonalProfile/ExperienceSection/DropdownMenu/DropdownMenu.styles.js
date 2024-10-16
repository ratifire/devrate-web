export const styles = {
  menu: (theme) => ({
    padding: '10px',
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.modalDropdown.backgroundColor,
      color: theme.palette.modalDropdown.color,
    },
  }),
  itemIcon: {
    width: 14,
    height: 14,
    marginRight: '10px'
  },
  menuItem: (theme) => ({
    maxWidth: '125px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.modalDropdown.color,
    '&:hover': {
      backgroundColor: theme.palette.modalDropdown.hoverBgColor,
      color: theme.palette.modalDropdown.color,
    },
    '&:active': {
      backgroundColor: theme.palette.modalDropdown.hoverBgColor,
      color: theme.palette.action.active
    }
  }),
  divider: (theme) => ({
    backgroundColor: theme.palette.modalDropdown.divider,
    marginLeft: '8px',
    marginRight: '8px',
  })
};