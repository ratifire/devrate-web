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
    '&:last-of-type': {
      order: 2,
    },
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
    borderRadius: 1,
    justifyContent: 'flex-start',
    paddingX: theme.spacing(3),
    paddingY: theme.spacing(2),
    order: 1,
    '>span.MuiButton-startIcon': {
      marginLeft: 0,
      '&:hover': {
        color: theme.palette.action.active,
      },
    },
    '>span.MuiButton-startIcon>*:nth-of-type(1)': {
      fontSize: '24px',
      color: theme.palette.text.secondary,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.action.active,
      '> .MuiTypography-root': {
        color: theme.palette.action.active,
      },
    },
    '&:hover>span.MuiButton-startIcon>*:nth-of-type(1)': {
      color: theme.palette.action.active,
    },
    '& .MuiTouchRipple-root>*': {
      color: theme.palette.text.secondary,
      backgroundColor: 'transparent',
    },
  }),
  btnText: (theme) => ({
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: '20px',
    letterSpacing: 0.15,
    lineHeight: 2.3,
  }),
};
export default styles;
