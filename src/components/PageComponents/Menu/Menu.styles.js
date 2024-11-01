const styles = {
  userMenuBox: (theme) => ({
    height: '100%',
    width: 300,
    background: theme.palette.background.level2,
    display: 'flex',
    flexDirection: 'column',
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
    borderRadius: 1,
  }),
  listItemButton: (theme) => ({
    '& .MuiListItemIcon-root': {
      color: theme.palette.text.secondary,
      margin: theme.spacing(0),
    },
    '& .MuiListItemText-primary': {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: 2.3,
      letterSpacing: 0.15,
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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
  }),
  divider: (theme) => ({
    borderColor: theme.palette.border.menuColor,
    marginTop: theme.spacing(3),
    marginBottom: '32px',
  }),
  btnFeedback: (theme) => ({
    color: theme.palette.text.secondary,
    borderRadius: 1,
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: 2.3,
    letterSpacing: 0.15,
    justifyContent: 'flex-start',
    paddingX: theme.spacing(3),
    paddingY: theme.spacing(2),
    order: 1,
    '>span.MuiButton-startIcon': {
      marginLeft: 0,
    },
    '>span.MuiButton-startIcon>*:nth-of-type(1)': {
      fontSize: '24px',
    },
    '&:hover': {
      color: theme.palette.action.active,
    },
  }),
};
export default styles;
