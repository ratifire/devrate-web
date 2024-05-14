const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(4),
    width: '100%',
    boxShadow: '0px -1px 0px 0px #C5C5C640 inset',

    '&:last-child': {
      boxShadow: 'none',
    }
  }),
  iconWrapper: (theme) => ({

    '& svg': {
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
  }),
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  badge: (theme) => ({
    color: theme.palette.primary['800'],
  }),
  closeBtn: (theme) => ({
    color: theme.palette.common.white,
  }),
  textWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing(1),
  }),
  actionWrapper: (theme) => ({
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