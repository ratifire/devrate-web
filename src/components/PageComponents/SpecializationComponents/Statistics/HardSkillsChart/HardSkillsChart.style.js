export const styles = {
  hardSkillsChartContainer:{
    width: '264px',
    height: '340px'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '11px',
  },
  text: (theme) => ({
    color: theme.palette.neutral[50],
    display: 'block',
    paddingBottom: '6px'
  }),
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
