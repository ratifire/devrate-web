export const styles = {
  wrapper: (theme) => ({
    background: theme.palette.background.gradient,
  }),
  container: (theme) => ({
    paddingY: '58px',
    '@media (min-width: 600px)': { paddingX: theme.spacing(3) },
  }),
  gridContainer: {
    maxWidth: '1248px',
    margin: '0 auto',
  },
  textBox: {
    maxWidth: '406px',
    margin: '0 auto',
  },

  title: (theme) => ({
    marginBottom: theme.spacing(4),
    fontSize: '46px',
    fontWeight: 500,
    lineHeight: '46px',
    background: theme.palette.common.titleGradient,
    backgroundClip: 'text',
    color: 'transparent',
    '&-webkit-background-clip': 'text',
    '&-webkit-text-fill-color': 'linear-gradient(90.00deg, rgb(117, 98, 228),rgb(251, 147, 166)',
  }),
  list: (theme) => ({
    listStyle: 'decimal',
    paddingY: 0,
    paddingX: theme.spacing(3),
  }),
  listItem: (theme) => ({
    display: 'list-item',
    color: theme.palette.neutral[50],
  }),
  text: (theme) => ({
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '30px',
    letterSpacing: '1.62%',
    color: theme.palette.neutral[50],
  }),
  card: (theme) => ({
    height: '480px',
    width: '610px',
    borderRadius: theme.spacing(3),
    '@media (min-width: 520px)': {
      height: 483,
      width: 611,
    },
  }),
};
