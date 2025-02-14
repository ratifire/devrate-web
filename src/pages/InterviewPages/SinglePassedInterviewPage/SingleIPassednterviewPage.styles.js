export const styles = {
  mainContent: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(24, 1fr)',
    gridTemplateRows: 'repeat(26, 25px)',
    gridGap: theme.spacing(4),
    height: '100%',
    ' > div': {
      borderRadius: 2,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  userInfo: () => ({
    gridColumn: '1/12',
    gridRow: '1/5',
    ' > div': {
      maxWidth: '100%',
    },
  }),
  interviewersAssessment: (theme) => ({
    marginTop: '2px',

    gridColumn: '1/12',
    gridRow: '5/26',
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
  }),
  sortSkills: (theme) => ({
    width: '100%',
    boxShadow: 'none',
    backgroundImage: 'none',
    ' > div': {
      borderRadius: theme.spacing(1),
    },
  }),
  interviewInfo: (theme) => ({
    gridColumn: '12/25',
    gridRow: '1/6  ',
    ' > div': {
      height: '100%',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),

  statistics: (theme) => ({
    marginTop: '-6px',
    gridColumn: '12/25',
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
    gridColumn: '12/25',
    gridRow: '11/12',
    minHeight: '216px',
    ' > div': {
      minHeight: '216px',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
};
