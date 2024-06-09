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
  specialisationLevel: {
    gridColumn: '1/5',
    gridRow: '2/3',
    height: 190, //To be removed before merge
  },
  specialisationInterviewParticipation: {
    gridColumn: '5/9',
    gridRow: '2/3',
  },
  specialisationVideoInterview: {
    gridColumn: '9/13',
    gridRow: '2/2',
  },
  specialisationSkills: {
    gridColumn: '1/5',
    gridRow: '3/3',
    height: 284, //To be removed before merge
  },
  specialisationStatistics: {
    gridColumn: '5/13',
    gridRow: '3/3',
  },
};
