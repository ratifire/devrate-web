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
    gridTemplateRows: 'repeat(4, auto)',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
    '@media (max-width: 991px)': {
      gridTemplateRows: 'repeat(5, auto)',
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
    gridRow: '2/4',
    gridColumn: '1/5',
    height: '31rem',
    '@media (max-width: 991px)': {
      gridColumn: '1/6',
    },
  },
  specialisationSoftSkills: {
    gridRow: '4/5',
    gridColumn: '1/5',
    height: '17.25rem',
    '@media (max-width: 991px)': {
      gridColumn: '1/6',
    },
  },
  specialisationStatistics: {
    gridColumn: '5/13',
    gridRow: '2/5',
    maxHeight: '50.6875rem',
    '@media (max-width: 991px)': {
      gridColumn: '6/13',
      gridRow: '2/6',
      maxHeight: '100%',
    },
  },
  statisticWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto',
    gridGap: theme.spacing(3),
    padding: '16px 24px 24px',

    ' > div': {
      backgroundImage: 'none',
      borderRadius: 2,
      backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    },
    '@media(max-width: 991px)': {
      gridTemplateRows: '1/4',
      padding: theme.spacing(3),
    },
  }),
  statisticTitle: (theme) => ({
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),
  }),
  trackerWrapper: {
    '@media (min-width: 992px)': {
      display: 'none',
    },
    '@media (max-width: 991px)': {
      display: 'flex',
      flexWrap: 'wrap',
      transform: 'translateX(24px)',
    },
  },
  level: {
    gridColumn: '1/5',
    gridRow: '1/2',
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
    },
  },
  averageSkillsScore: {
    gridColumn: '5/13',
    gridRow: '1/2',
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
      gridRow: '2/3',
    },
  },
  hardSkillsByProductivity: {
    gridColumn: '1/4',
    gridRow: '2/3',
    width: '300px',
    padding: '18px',
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
      gridRow: '3/4',
      width: '100%',
    },
  },
  interview: {
    gridColumn: '4/13',
    gridRow: '2/3',
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
      gridRow: '4/5',
    },
  },
};
