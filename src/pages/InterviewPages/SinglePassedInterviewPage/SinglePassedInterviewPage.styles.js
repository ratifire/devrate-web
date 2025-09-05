export const styles = {
  mainContent: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(10, auto)',
    alignSelf: 'start',
    width: '100%',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: theme.spacing(2),
    },
  }),
  userInfo: (theme) => ({
    gridColumn: '1/6',
    gridRow: '1/4',
    ' > div': {
      maxWidth: '100%',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  interviewersAssessment: (theme) => ({
    gridColumn: '1/6',
    gridRow: '4/10',
    padding: theme.spacing(4),
    alignSelf: 'baseline',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    ' > div div': {
      borderRadius: theme.spacing(1),
      maxWidth: '100%',
      backgroundColor: theme.palette.interviewPage.innerBackground,
    },
  }),
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
    gridRow: '1/6',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
  }),

  statistics: (theme) => ({
    gridColumn: '6/13',
    gridRow: '6/7',
    ' > div': {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  interviewFeedback: (theme) => ({
    gridColumn: '6/13',
    gridRow: '7/8',
    // minHeight: '216px',
    '> div': {
      height: '100%',
      // minHeight: '216px',
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
    gridRow: '8/10',
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
  title: {
    marginBottom: '16px',
  },
};
