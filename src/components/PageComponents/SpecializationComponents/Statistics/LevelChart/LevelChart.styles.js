export const styles = {
  levelChartContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing(3),
  }),
  contentContainer: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '9px',
  },
  text: {
    '@media (max-width: 991px)': {
      fontSize: '12px',
    },
  },
  levelBtn: {
    width: 44,
    height: 44,
    margin: 0,
    backgroundColor: ' #8133f1',
    borderRadius: '4px',
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
    right: 'calc(50% - 170px)',
    transform: 'translateX(-50%)',
    textTransform: 'lowercase',

    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
  rightCaption: {
    position: 'absolute',
    bottom: '-20%',
    left: 'calc(50% - 135px)',
    transform: 'translateX(-50%)',
    textTransform: 'lowercase',

    '&:first-letter': {
      textTransform: 'uppercase',
    },
  },
  chartWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '180px',
  },
};
