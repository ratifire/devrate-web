export const styles = {
  interviewChartContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(3),
    height: '100%',
    gap: '16px',
  }),
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  chartWrapper: {
    fontSize: '12px',
    width: '100%',
    height: '19.1875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(max-width: 991px)': {
      height: '18.125rem',
    },
    '& .recharts-default-legend': {
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px !important',
    },
    '& .legend-item-0': {
      paddingLeft: '30px',
    },
    '& .legend-item-1': {
      marginRight: '0 !important',
    },
  },
};
