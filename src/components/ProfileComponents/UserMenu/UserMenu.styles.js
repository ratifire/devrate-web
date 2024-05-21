const styles = {
  userMenuBox: (theme) => ({
    height: '100%',
    width: 300,
    background: theme.palette.background.level2,
  }),
  upperMenu: (theme) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-around',
    spacing: theme.spacing(2),
  }),
  menuLinkBtn: (theme) => ({
    borderRadius: theme.spacing(1),
  }),
  menuLink: (theme) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    display: 'block',
    borderRadius: theme.spacing(1),
  }),
  listItemButton: (theme) => ({
    '& .MuiListItemIcon-root': {
      color: theme.palette.text.secondary,
      margin: 0,
    },
    '& .MuiListItemText-primary': {
      fontWeight: theme.typography.h6.fontWeight,
      fontSize: theme.typography.h6.fontSize,
      lineHeight: 2.3,
      letterSpacing: theme.typography.h6.letterSpacing,
    },
    '&:hover': {
      '& .MuiListItemIcon-root': {
        color: theme.palette.action.active,
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.action.active,
      },
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
  }),
  iconItem: (theme) => ({
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
  }),
  divider: (theme) => ({
    borderColor: 'white',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  }),
};
export default styles;
