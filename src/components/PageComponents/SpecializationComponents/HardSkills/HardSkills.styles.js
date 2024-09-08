export const styles = {
  btnIcon: (theme) => ({
    color: theme.palette.primary['100'],
    borderRadius: 1,
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  wrapper: (theme) => ({
    maxWidth: '480px',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.level2,
    borderRadius: 2,
    
  }),
  title: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  }),
  skillsContainer: {
    height: 'auto',
  },
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
  markWrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  }),
  mark: (theme) => ({
    color: theme.palette.action.active,
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
