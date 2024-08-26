export const styles = {
  btnIcon: (theme) => ({
    color: theme.palette.neutral['100'],
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
    svg: {
      fontSize: '18px',
    },
  }),
  wrapper: (theme) => ({
    maxWidth: '480px',
    padding: theme.spacing(4),
  }),
  title: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  }),
  skillContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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