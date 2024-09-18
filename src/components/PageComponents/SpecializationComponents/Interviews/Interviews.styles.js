export const styles = {
  contentWrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  stats: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  }),
  interviewItemIncome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.info.azure,
  }),
  interviewItemOutcome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.info.main,
  }),
  interviewType: {
    display: 'flex',
    width: '100%',
  },
  interviewCounter: {},
  buttons: (theme) => ({
    display: 'flex',
    gap: theme.spacing(4),
  }),
  buttonPrimary: () => ({
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
  }),
  popoverWrapper: (theme) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing(2),
    backgroundColor: theme.palette.neutral[800],
  }),
  divider: (theme) => ({
    borderColor: theme.palette.neutral[600],
  }),
  menuButton: (theme) => ({
    color: theme.palette.primary[100],
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    paddingX: theme.spacing(5),
  }),
};
