const styles = {
  drawer: (open) => ({
    width: open ? 240 : 96,
    flexShrink: 0,
    transition: (theme) =>
      theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
    '& .MuiDrawer-paper': {
      width: open ? 240 : 96,
      boxSizing: 'border-box',
      position: 'relative',
      height: '100%',
      overflowX: 'hidden',
      backgroundColor: (theme) => theme.palette.background.level2,
      backgroundImage: 'none',
      transition: (theme) =>
        theme.transitions.create('width', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard,
        }),
    },
  }),
  drawerContainer: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  drawerHeader: (open) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'space-between' : 'center',
    padding: (theme) => theme.spacing(2),
    minHeight: '64px',
  }),
  logoText: {
    margin: '0 0 0 23px',
    fontWeight: 'bold',
  },
  collapseButton: {
    marginRight: (theme) => theme.spacing(-1),
    borderRadius: 1,
  },
  list: {
    flexGrow: 1,
    padding: 0,
  },
  listItem: {
    display: 'block',
  },
  listItemButton: (open) => ({
    minHeight: 48,
    justifyContent: open ? 'center' : 'center',
    px: (theme) => theme.spacing(2),
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      '& .MuiListItemIcon-root': {
        color: (theme) => theme.palette.action.active,
      },
      '& .MuiListItemText-primary': {
        color: (theme) => theme.palette.action.active,
        fontWeight: 600,
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '& .MuiListItemIcon-root': {
      color: (theme) => theme.palette.text.secondary,
      margin: open ? '0 16px 0 24px' : 0,
      transition: 'color 0.2s ease-in-out',
    },
    '& .MuiListItemText-primary': {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: 2.3,
      letterSpacing: 0.15,
      textAlign: 'left',
      color: (theme) => theme.palette.text.secondary,
      transition: 'color 0.2s ease-in-out',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      '& .MuiListItemIcon-root': {
        color: (theme) => theme.palette.action.active,
      },
      '& .MuiListItemText-primary': {
        color: (theme) => theme.palette.action.active,
      },
    },
  }),
  listItemIcon: {
    minWidth: 0,
    mr: (theme) => theme.spacing(3),
    justifyContent: 'center',
  },
  avatar: (open) => ({
    width: open ? 24 : 32,
    height: open ? 24 : 32,
    fontSize: open ? '0.875rem' : '1rem',
  }),
  listItemText: {
    opacity: 1,
    whiteSpace: 'nowrap',
    color: (theme) => theme.palette.text.secondary,
    textAlign: 'center',
  },
  divider: (theme) => ({
    borderColor: theme.palette.border.menuColor,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }),
};

export default styles;
