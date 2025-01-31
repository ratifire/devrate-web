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
  userInfo: (theme) => ({
    gridColumn: '1/12',
    gridRow: '1/5',
    boxShadow: 'none',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    backgroundColor: '#303032',
  }),
  interviewersAssessment: {
    gridColumn: '1/12',
    gridRow: '5/26',
    padding: '16px',
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

  statistics: (theme) => ({
    gridColumn: '12/25',
    gridRow: '6/10',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
  }),
  interviewFeedback: () => ({
    gridColumn: '12/25',
    gridRow: '10/15',
  }),
};
