const styles = {
  userMenuBox : (theme) => ({
    height: '100%',
    width: 300,
    backgroundColor: theme.palette.neutral['800'],
  }),
  upperMenu: {
    marginTop: 32,
    display: "flex",
    direction: "row",
    justifyContent: "space-around",
    spacing: 2,
  },
  menuTitle: {
    fontWeight: '400',
    fontSize: 24,
  },

  menuLink: {
    textDecoration: 'none',
    color: '#C5C5C6',
    display: 'block',
  },

  listItemButton: {
    '& .MuiListItemIcon-root':{
      color: '#C5C5C6',
    },
    '& .MuiListItemText-primary': {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: 0.15,
    },
    '&:hover': {
      '& .MuiListItemIcon-root': {
        color: '#B78AF7',
      },
      '& .MuiListItemText-primary': {
        color: '#B78AF7',
      },
    },
  },
};
export default styles;
