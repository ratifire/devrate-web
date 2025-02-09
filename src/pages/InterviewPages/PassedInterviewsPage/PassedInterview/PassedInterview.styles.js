export const styles = {
  mainContent: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(24, 1fr)',
    gridTemplateRows: 'repeat(26, 24px)',
    gridGap: theme.spacing(4),
    height: '100%',
    ' > div': {
      borderRadius: 2,
      backgroundColor: '#303032',
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  userInfo: () => ({
    gridColumn: '1/12',
    gridRow: '1/4',
    boxShadow: 'none',
    height: '100%',
    ' > div': {
      maxWidth: '1000px',
    },
  }),
  interviewersAssessment: {
    gridColumn: '1/12',
    gridRow: '5/26',
    padding: '16px',
    marginTop: '10px',
  },
  interviewersAssessmentTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),
  skillsWrapper: {
    gap: '18px',
  },

  hardSkills: {
    width: '100%',
    marginBottom: '20px',
    borderRadius: 2,
    ' > div': {
      borderRadius: 2,
      backgroundColor: '#3E3E40',
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  },
  sortSkills: {
    width: '100%',
    marginBottom: '20px',
    borderRadius: 2,
    ' > div': {
      borderRadius: 2,
      backgroundColor: '#3E3E40',
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  },
  interviewInfo: () => ({
    gridColumn: '12/25',
    gridRow: '1/6  ',
  }),

  statistics: () => ({
    gridColumn: '12/25',
    gridRow: '6/11',
    minHeight: '225px',
  }),
  interviewFeedback: () => ({
    marginTop: '10px',
    gridColumn: '12/25',
    gridRow: '11/12',
    minHeight: '300px',
  }),
};
