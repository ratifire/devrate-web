const styles = {
  userMenuBox : (theme) => ({
    height: '100%',
    width: 300,
    backgroundColor: theme.palette.neutral['800'],
  }),
  upperMenu: (theme) => ({
    marginTop: '32px',
    display: "flex",
    direction: "row",
    justifyContent: "space-around",
    spacing: theme.spacing(2),
  }),
  menuTitle: (theme) => ({
      fontWeight: theme.typography.h5.fontWeight,
      fontSize: theme.typography.h5.fontSize,
    }),

  menuLink: (theme) =>({
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      display: 'block',
    }),

  listItemButton: (theme) => (
    {
      '& .MuiListItemIcon-root':{
        color: theme.palette.text.secondary,
      },
      '& .MuiListItemText-primary': {
        fontWeight: theme.typography.h6.fontWeight,
        fontSize: theme.typography.h6.fontSize,
        lineHeight: theme.typography.h6.lineHeight,
        letterSpacing: theme.typography.h6.letterSpacing,
      },
      '&:hover': {
        '& .MuiListItemIcon-root': {
          color: theme.palette.action.active,
        },
        '& .MuiListItemText-primary': {
          color: theme.palette.action.active,
        },
      },
    })
};
export default styles;
