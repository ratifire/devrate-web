const styles = {
  scrollWrapper: (theme) => ({
    maxHeight: 432,
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: theme.spacing(2),

    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 6,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    }),
  }),
  wrapperPopover: {
    '>.MuiPaper-root': {
      maxWidth: 606,
      width: '100%',
      boxShadow: 'none',
      borderRadius: 1,
    },
  },
  wrapper: (theme) => ({
    paddingY: theme.spacing(2),
    paddingX: theme.spacing(3),
    backgroundColor: theme.palette.notifications.backgroundColor,
    border: `1px solid ${theme.palette.notifications.borderColor}`,
    borderRadius: 1,
  }),
  btnIcon: {
    borderRadius: 1,
  },
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
  boxWrapper: (theme) => ({
    backgroundColor: theme.palette.notifications.backgroundColor,
    border: `1px solid ${theme.palette.notifications.borderColor}`,
    borderRadius: 1,
    padding: '39px 39px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  boxTitle: {
    marginBottom: '24px',
    maxWidth: '402px',
    textAlign: 'center',
  },
  boxImg: {
    width: '100%',
    height: '260px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
};

export default styles;
