export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(4),
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
      backgroundColor: theme.palette.background.level2,
    },
  }),
  specialisationTaxonomy: {
    gridColumn: '1/13',
    gridRow: '1/2',
    height: 170, //To be removed before merge
  },
  specialisationHardSkills: {
    gridColumn: '1/5',
    gridRow: '2/3',
  },
  specialisationLevel: {
    gridColumn: '5/9',
    gridRow: '2/3',
    height: 201, //To be removed before merge
  },
  specialisationInterviewParticipation: {
    gridColumn: '9/13',
    gridRow: '2/3',
    height: 201, //To be removed before merge
  },
  specialisationSoftSkills: {
    gridColumn: '1/5',
    gridRow: '3/3',
    height: 276, //To be removed before merge
  },
  specialisationStatistics: {
    gridColumn: '5/13',
    gridRow: '3/4',
  },
  statisticWrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto auto auto',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.neutral[600],
    },
  }),
  level: {
    gridColumn: '1/5',
    gridRow: '1/2',
    height: 250, //To be removed before merge
  },
  averageSkillsScore: {
    gridColumn: '5/13',
    gridRow: '1/2',
    height: 250, //To be removed before merge
  },
  hardSkillsByProductivity: {
    gridColumn: '1/4',
    gridRow: '2/3',
    height: 100, //To be removed before merge
  },
  interview: {
    gridColumn: '4/13',
    gridRow: '2/3',
  },
};
