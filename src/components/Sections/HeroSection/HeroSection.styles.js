export const styles = {
  container: {
    '@media (min-width: 600px)': { paddingX: '12px' },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 149,
    paddingBottom: 204,
  },
  title: (theme) => ({
    maxWidth: 1100,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 60,
    fontWeight: 700,
    lineHeight: '80px',
    background: theme.palette.common.titleGradient,
    backgroundClip: 'text',
    color: 'transparent',
    '&-webkit-background-clip': 'text',
    '&-webkit-text-fill-color': 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)',
  }),
  text: (theme) => ({
    marginBottom: 60,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 22,
    rowHeight: '150%',
    color: theme.palette.neutral[200],
  }),
  button: {
    paddingX: 0,
    paddingY: 16,
    width: 190,
  },
};
