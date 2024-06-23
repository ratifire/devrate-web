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
  interviewCounter: {

  },
  buttons: (theme) => ({
    display: 'flex',
    gap: theme.spacing(4),
  }),
  buttonPrimary: () => ({
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
  }),
};