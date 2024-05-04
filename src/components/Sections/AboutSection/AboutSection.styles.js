export const styles = {
  wrapper: (theme) => ({
    background: theme.palette.background.gradient,
  }),
  container: {
    paddingY: 58,
    '@media (min-width: 600px)': { paddingX: '12px' },
  },
  gridContainer: {
    maxWidth: 1248,
    margin: '0 auto',
  },
  textBox: {
    maxWidth: 405,
    margin: '0 auto',
  },

  title: (theme) => ({
    marginBottom: 20,
    fontSize: 46,
    fontWeight: 500,
    lineHeight: '46px',
    background: theme.palette.common.titleGradient,
    backgroundClip: 'text',
    color: 'transparent',
    '&-webkit-background-clip': 'text',
    '&-webkit-text-fill-color': 'linear-gradient(90.00deg, rgb(117, 98, 228),rgb(251, 147, 166)',
  }),
  list: {
    listStyle: 'decimal',
    paddingY: 0,
    paddingX: 20,
  },
  listItem: () => ({
    display: 'list-item',
    fontSize: 18,
    color: '#F1F1F1',
  }),
  text: () => ({
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '30px',
    letterSpacing: '1.62%',
    color: '#F1F1F1',
  }),
  card: {
    height: 483,
    width: 611,
    borderRadius: '20px',
    '@media (min-width: 520px)': {
      height: 483,
      width: 611,
    },
  },
};
