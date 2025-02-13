export const styles = {
  hardSkillsChartContainer: {
    width: '264px',
    height: '340px',
    '@media(max-width: 991px)': {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '11px',
  },
  text: (theme) => ({
    color: theme.palette.specialization.subtitle.color,
    display: 'block',
    paddingBottom: '6px',
    '@media (max-width: 991px)': {
      fontSize: '12px',
    },
  }),
};
