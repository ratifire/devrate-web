export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingTop: theme.spacing(3),
      paddingX: theme.spacing(3),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '120rem',
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
    gridTemplateRows: '19.8125rem 24.375rem',
    gridGap: theme.spacing(3),
    padding: '16px 24px 24px',

    ' > div': {
      backgroundImage: 'none',
      borderRadius: 2,
      backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    },
    '@media(min-width: 1536px)': {
      gridTemplateRows: '18.875rem 23.4375rem',
    },
    '@media(max-width: 991px)': {
      gridTemplateRows: '18.625rem 15.625rem 23.4375rem auto',
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
    '@media(min-width: 1536px)': {
      gridColumn: '1/4',
    },
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
    },
  },
  averageSkillsScore: {
    gridColumn: '5/13',
    gridRow: '1/2',
    '@media(min-width: 1536px)': {
      gridColumn: '4/13',
    },
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
      gridRow: '2/3',
    },
  },
  hardSkillsByProductivity: {
    gridColumn: '1/4',
    gridRow: '2/3',
    width: '18.75rem',
    padding: '18px',
    '@media(min-width: 1536px)': {
      width: '22.5rem',
    },
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
      gridRow: '4/5',
      width: '100%',
    },
  },
  interview: {
    gridColumn: '4/13',
    gridRow: '2/3',
    '@media(max-width: 991px)': {
      gridColumn: '1/13',
      gridRow: '3/4',
    },
  },
};
