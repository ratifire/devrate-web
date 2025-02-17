export const styles = {
  interviewFeedbackWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    ' > div': {
      padding: theme.spacing(3),
      borderRadius: 1,
      backgroundColor: theme.palette.interviewPage.innerBackground,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),

  interviewFeedbackTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),
  interviewFeedbackText: (theme) => ({
    minHeight: '128px',
    width: '100%',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
  }),
  readMoreText: (theme) => ({
    display: 'inline',
    cursor: 'pointer',
    color: theme.palette.primary[200],
  }),
};
