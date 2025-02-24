export const styles = {
  interviewItemOutcome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.scheduleInterview.area.outcome,
    marginBottom: theme.spacing(2),
  }),
  interviewItemIncome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.scheduleInterview.area.income,
  }),
  interviewType: {
    display: 'flex',
    marginRight: '16px',
    whiteSpace: 'nowrap',
  },
};
