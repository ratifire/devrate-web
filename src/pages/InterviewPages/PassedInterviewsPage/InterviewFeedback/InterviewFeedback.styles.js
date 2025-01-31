export const styles = {
  interviewFeedbackWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    ' > div': {
      padding: theme.spacing(3),
      borderRadius: 2,
      backgroundColor: '#3E3E40',
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),

  interviewFeedbackTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),
  interviewFeedbackText: (theme) => ({
    width: '100%',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
  }),
};
