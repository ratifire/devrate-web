export const styles = {
  contentWrapper: (theme) => ({
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
  }),
  stats: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  }),
  title: (theme) => ({
    color: theme.palette.scheduleInterview.area.color,
  }),
  interviewItemIncome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.scheduleInterview.area.income,
  }),
  interviewItemOutcome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.scheduleInterview.area.outcome,
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
  buttonPrimary: (theme) => ({
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    width: '100%',
    letterSpacing: '0.1px',
    gridGap: theme.spacing(2),
    backgroundColor: theme.palette.scheduleInterview.area.btn.backgroundColor,
    paddingY: '10px',
    '&:disabled': {
      backgroundColor: theme.palette.background.btnGroup,
    },
    '&[data-active="true"]': {
      borderRadius: '4px 4px 0 0'
    },
  }),
  popoverWrapper: (theme) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.scheduleInterview.area.popover.backgroundColor,
  }),
  popover: (theme) => ({
    '>.MuiPaper-root': {
      borderRadius: '0 0 4px 4px',
      backgroundColor: theme.palette.scheduleInterview.area.popover.backgroundColor,
      boxShadow: 'none',
      maxWidth: 600,
      width: '100%',
    },
  }),
  divider: (theme) => ({
    borderColor: theme.palette.scheduleInterview.area.popover.borderColor,
  }),
  menuButton: (theme) => ({
    color: theme.palette.scheduleInterview.area.popover.btn.color,
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    display: 'flex',
    ':hover': {
      backgroundColor: theme.palette.scheduleInterview.area.popover.backgroundColor,
    }
  }),
};
