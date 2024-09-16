export const styles = {
  skillsAssessmentChartContainer: (theme) => ({
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
    backgroundColor: theme.palette.background.level3,
  }),

  menuItem: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.background.level3,
      color: theme.palette.primary[200],
    },
  }),
  chartWrapper: {
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipContent:{
    color: '#FFFFFFF',
    backgroundColor: '#303032',
    border: 'none',
    borderRadius: '4px',
  },
  tooltipLabel:{
    color: '#FFFFFFF',
    backgroundColor: '#303032',
    fontSize: '14px',
  }
};
