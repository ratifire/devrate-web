export const styles = {
  skillsAssessmentChartContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    padding: theme.spacing(3),
    height: '100%',
  }),
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  chartWrapper: {
    fontSize: '12px',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(min-width: 1536px)': {
      height: '11.5rem',
      marginTop: 'auto',
    },
  },
};
