export const styles = {
  contentWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    alignSelf: 'start',
    gridGap: theme.spacing(4),
    width: '100%',
    gridTemplateRows: 'repeat(12, auto)',
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  userCardScheduledInterview: {
    gridRow: '1/4',
    gridColumn: '1/6',
  },
  scheduledMeeting: {
    gridRow: '1/7',
    gridColumn: '6/13',
  },
  statistic: {
    gridRow: '4/8',
    gridColumn: '1/6',
  },
  participantEvaluations: {
    gridRow: '8/13',
    gridColumn: '1/6',
  },
  interviewSkills: {
    gridRow: '7/14',
    gridColumn: '6/13',
  },
};
