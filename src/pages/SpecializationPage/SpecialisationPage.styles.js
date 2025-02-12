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
    gridTemplateRows: 'auto 50px minmax(0,auto)',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  specialisationCategories: {
    gridColumn: '1/13',
    gridRow: '1/2',
    minHeight: 202,
  },
  specialisationHardSkills: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    gridRow: '2/6',
    gridColumn: '1/5',
    height: '29.5rem',
  },
  specialisationSoftSkills: {
    gridRow: '6/8',
    gridColumn: '1/5',
    height: '17.25rem',
  },
  specialisationStatistics: {
    gridColumn: '5/13',
    gridRow: '2/8',
    maxHeight: '48.3125rem',
  },
  statisticWrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto',
    gridGap: theme.spacing(4),

    ' > div': {
      backgroundImage: 'none',
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
  },
  averageSkillsScore: {
    gridColumn: '5/13',
    gridRow: '1/2',
  },
  hardSkillsByProductivity: {
    gridColumn: '1/4',
    gridRow: '2/3',
    width: '300px',
    padding: '18px',
  },
  interview: {
    gridColumn: '4/13',
    gridRow: '2/3',
  },
};
