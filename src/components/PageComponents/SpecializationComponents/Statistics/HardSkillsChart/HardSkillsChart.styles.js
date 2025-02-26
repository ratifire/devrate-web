export const styles = {
  hardSkillsChartContainer: {
    width: '264px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    '@media(min-width: 1536px)': {
      width: '349px',
    },
    '@media(max-width: 991px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
    },
    '@media(max-width: 790px)': {
      gap: '2px',
    },
  },
  contentWrapper: {
    alignSelf: 'flex-start',
    '@media(max-width: 991px)': {
      maxWidth: '195px',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  text: (theme) => ({
    color: theme.palette.specialization.subtitle.color,
    display: 'block',
    fontSize: '12px',
  }),
};
