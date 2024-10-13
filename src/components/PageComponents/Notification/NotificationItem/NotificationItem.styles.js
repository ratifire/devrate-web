const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(3),
    display: 'flex',
    gap: theme.spacing(3),
    width: '100%',
    minWidth: 300,
    boxShadow: `0 -1px 0 0 ${theme.palette.notifications.item.boxShadow} inset`,
    
    '&:last-child': {
      boxShadow: 'none',
    }
  }),
  iconWrapper: (theme) => ({
    flex: '0 1 32px',
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    '& svg': {
      color: theme.palette.notifications.icon.typeMessage,
      height: '24px',
      width: '24px',
    },
  }),
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  badge: (theme) => ({
    color: theme.palette.notifications.item.newMessages.color,
    backgroundColor: theme.palette.notifications.item.newMessages.backgroundColor,
    '>span': {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0.17px',
    }
  }),
  closeBtn: (theme) => ({
    padding: theme.spacing(0),
    '>svg': {
      color: theme.palette.notifications.icon.close,
      fontSize: '20px',
    }
  }),
  textWrapper: (theme) => ({
    flex: '0 1 calc(100% - 118px)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing(1),
    '>span': {
      color: theme.palette.notifications.item.color,
    },
    '>p': {
      color: theme.palette.notifications.item.colorTime,
    },
  }),
  actionWrapper: (theme) => ({
    flex: '0 1 54px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }),
  date: (theme) => ({
    color: theme.palette.neutral['100'],
  }),
};

export default styles;