export const styles = {
  interviewChartContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
  }),
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '11px',
  },
  chartWrapper: {
    fontSize: '12px',
    maxWidth: '587px',
    width: '100%',
    height: '340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .recharts-default-legend': {
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '10px !important',
    },
    '& .legend-item-0': {
      paddingLeft: '30px',
    },
    '& .legend-item-1': {
      marginRight: '0 !important',
    },
  },
};
