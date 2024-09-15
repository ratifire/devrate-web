export const styles = {
  skillContainer: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '>div:first-of-type': {
      flex: '1 2 calc(100% - 130px)',
      '>h6': {
        flex: '1 2 max(266px)',
        maxWidth: '266px',
        width:'10vw',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
    '>div:last-of-type': {
      flex: '1 2 122px',
      marginLeft: theme.spacing(2),
      gridGap: theme.spacing(2),
      '>h6': {
        minWidth: '50px',
        textAlign: 'right',
      },
    },
  }),
  iconWrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  }),
  divider: (theme) => ({
    marginY: theme.spacing(2),
    backgroundColor: theme.palette.background.level3,
  }),
  iconCircle: {
    fill: '#252527',
  },
  arrowDownIcon: {
    fill: '#ED0E0E',
  },
  arrowUpIcon: {
    fill: '#64FF2E',
  },
};
