export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(3),
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingTop: theme.spacing(3),
      paddingX: theme.spacing(3),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '1920px',
      paddingTop: theme.spacing(4),
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
  specialisationLevel: {
    maxHeight: '144px',
    gridColumn: '1/5',
    gridRow: '2/3',
    '@media (max-width: 991px)': {
      gridColumn: '1/6',
    },
  },
  specialisationHardSkills: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    gridRow: '3/4',
    gridColumn: '1/5',
    height: '31.9375rem',
    '@media (min-width: 1536px)': {
      height: '29.5625rem',
    },
    '@media (max-width: 991px)': {
      gridColumn: '1/6',
    },
  },
  specialisationSoftSkills: {
    gridRow: '4/5',
    gridColumn: '1/5',
    height: '18.25rem',
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
    '@media(min-width: 1536px)': {
      maxHeight: '48.3125rem',
    },
  },
  statisticWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '317px 390px',
    gridGap: theme.spacing(3),
    padding: '16px 24px 24px',

    ' > div': {
      backgroundImage: 'none',
      borderRadius: 2,
      backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    },
    '@media(min-width: 1536px)': {
      gridTemplateRows: '302px 375px',
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
      paddingLeft: '22px',
      marginTop: '16px',
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
