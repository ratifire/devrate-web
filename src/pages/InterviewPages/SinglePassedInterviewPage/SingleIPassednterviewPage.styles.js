export const styles = {
  mainContent: (theme) => ({
    maxHeight: 'calc(100vh - 80px)',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '180px 12px 216px auto auto',
    width: '100%',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: theme.spacing(2),
    },
  }),
  userInfo: (theme) => ({
    gridColumn: '1/6',
    gridRow: '1/2',
    ' > div': {
      maxWidth: '100%',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  interviewersAssessment: (theme) => ({
    gridColumn: '1/6',
    gridRow: '2/7',
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
    gridColumn: '6/13',
    gridRow: '3/4',
    ' > div': {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  interviewFeedback: (theme) => ({
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
  interviewPreviewVideo: (theme) => ({
    gridColumn: '6/13',
    gridRow: '5/6',
    minHeight: '372px',
    ' > div': {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
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
    padding: theme.spacing(5),
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
