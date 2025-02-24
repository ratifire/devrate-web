export const styles = {
  mainContent: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 25px)',
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
    gridRow: '1/5',
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
    gridRow: '5/26',
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

  hardSkills: (theme) => ({
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
  interviewInfo: () => ({
    gridColumn: '6/13',
    gridRow: '1/6  ',
  }),

  statistics: (theme) => ({
    marginTop: '-6px',
    gridColumn: '6/13',
    gridRow: '6/11',
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
    gridRow: '11/12',
    minHeight: '216px',
    '> div': {
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
};
