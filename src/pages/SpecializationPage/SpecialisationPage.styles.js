export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(4),
    paddingX: theme.spacing(2),
    '@media (min-width: 1272px)': {
      maxWidth: '1536px',
    },
    '@media (min-width: 600px)': {
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto auto auto',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  specialisationCategories: {
    backgroundImage: 'none',
    gridColumn: '1/13',
    gridRow: '1/2',
    minHeight: 202,
  },
  specialisationHardSkills: {
    backgroundImage: 'none',
    gridColumn: '1/5',
    gridRow: '2/4',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
  },
  specialisationLevel: {
    backgroundImage: 'none',
    gridColumn: '5/9',
    gridRow: '2/3',
  },
  specialisationInterviewParticipation: {
    backgroundImage: 'none',
    gridColumn: '9/13',
    gridRow: '2/3',
  },
  specialisationSoftSkills: {
    gridColumn: '1/5',
    gridRow: '4/5',
  },
  specialisationStatistics: {
    backgroundImage: 'none',
    gridColumn: '5/13',
    gridRow: '3/6',
  },
  statisticWrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto',
    gridGap: theme.spacing(4),

    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    },
  }),
  statisticTitle: (theme) => ({
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  }),
  level: {
    gridColumn: '1/5',
    gridRow: '1/2',
    height: 250, //To be removed before merge
    backgroundImage: 'none',
  },
  averageSkillsScore: {
    gridColumn: '5/13',
    gridRow: '1/2',
    height: 250, //To be removed before merge
    backgroundImage: 'none',
  },
  hardSkillsByProductivity: {
    gridColumn: '1/4',
    gridRow: '2/3',
    width: '300px',
    padding: '18px',
    backgroundImage: 'none',
  },
  interview: {
    gridColumn: '4/13',
    gridRow: '2/3',
    backgroundImage: 'none',
  },
};