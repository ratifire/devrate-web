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
  select: (theme) => ({
    width: '103px',
    height: '23px',
    fontSize: '12px',
    color: theme.palette.primary[200],
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[200],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[200],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary[200],
      borderWidth: '2px',
    },
  }),
  dropdownPaper: (theme) => ({
    backgroundColor: theme.palette.neutral[900]
  }),

  menuItem: (theme) => ({
    backgroundColor: theme.palette.neutral[900],
    '&:hover': {
      backgroundColor: theme.palette.neutral[800],
      color: theme.palette.primary[200],
    },
  }),
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
    }
  },
};
