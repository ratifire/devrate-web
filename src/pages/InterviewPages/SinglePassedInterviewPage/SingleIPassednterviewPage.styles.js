export const styles = {
  mainContent: (theme) => ({
    minHeight: 'calc(100vh - 200px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '180px 12px 225px auto',
    width: '100%',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: theme.spacing(2),
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  userInfo: (theme) => ({
    gridColumn: '1/6',
    gridRow: '1/2',
    ' > div': {
      maxWidth: '100%',
      boxShadow: 'none',
      backgroundImage: 'none',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  interviewersAssessment: (theme) => ({
    marginTop: '2px',
    gridColumn: '1/6',
    gridRow: '2/5',
    maxHeight: '1000px',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    ' > div div': {
      borderRadius: theme.spacing(1),
      maxWidth: '100%',
      backgroundColor: theme.palette.interviewPage.innerBackground,
    },
  }),

  interviewersAssessmentTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),

  skillsWrapper: (theme, role) =>
    role === 'INTERVIEWER'
      ? {
          height: 'calc(100% - 48px)',
          '& > div': {
            height: '100%',
          },
        }
      : {},

  hardSkills: (theme) => ({
    height: '100%',
    width: '100%',
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    backgroundImage: 'none',
    ' > div div ': {
      borderRadius: theme.spacing(1),
    },
    '> div': {
      ...(theme.palette.mode === 'light' && {
        borderColor: theme.palette.interviewPage.innerBorderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
      }),
    },
  }),
  sortSkills: (theme) => ({
    width: '100%',
    boxShadow: 'none',
    backgroundImage: 'none',
    ' > div': {
      borderRadius: theme.spacing(1),
    },
    '> div': {
      ...(theme.palette.mode === 'light' && {
        borderColor: theme.palette.interviewPage.innerBorderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
      }),
    },
  }),
  interviewInfo: (theme) => ({
    gridColumn: '6/13',
    gridRow: '1/3',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
  }),

  statistics: (theme) => ({
    marginTop: '-6px',
    gridColumn: '6/13',
    gridRow: '3/4',
    maxHeight: '225px',
    ' > div': {
      height: '225px',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  interviewFeedback: (theme) => ({
    marginTop: '-8px',
    gridColumn: '6/13',
    gridRow: '4/5',
    minHeight: '216px',
    '> div': {
      height: '100%',
      minHeight: '216px',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      '> div': {
        ...(theme.palette.mode === 'light' && {
          borderColor: theme.palette.interviewPage.innerBorderColor,
          borderWidth: '1px',
          borderStyle: 'solid',
        }),
      },
    },
  }),
  emptyStatistics: (theme) => ({
    position: 'relative',
    gridColumn: '1/13',
    gridRow: '3/5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6),
    textAlign: 'center',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    '& .emptyTitle': {
      position: 'absolute',
      left: '24px',
      top: '-44px',
      marginBottom: 0,
    },
  }),

  mascotStatsBox: {
    maxWidth: '610px',
    width: '100%',
    height: '352px',
    marginBottom: (theme) => theme.spacing(3),
  },

  emptyStatsText: (theme) => ({
    marginTop: (theme) => theme.spacing(3),
    color: theme.palette.titleColor,
  }),
};
