export const styles = {
  levelChartContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
  }),
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '11px',
  },
  chartContainer: {
    width: '100%',
    height: '150px',
    maxWidth: '500px',
    margin: '0 auto',
    position: 'relative',
  },
  leftCaption: {
    position: 'absolute',
    bottom: '-20%',
    right: '1%',
    transform: 'translateX(-50%)',
    textTransform: 'lowercase',

    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
  rightCaption: {
    position: 'absolute',
    bottom: '-20%',
    left: '8%',
    transform: 'translateX(-50%)',
    textTransform: 'lowercase',

    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
  chartWrapper:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '180px',
  }
};
