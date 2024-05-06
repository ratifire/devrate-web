export const styles = {
  container: (theme) => ({
    '@media (min-width: 600px)': { paddingX: theme.spacing(2) },
  }),
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '148px',
    paddingBottom: '204px',
  },
  title: (theme) => ({
    maxWidth: 1100,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
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
    marginBottom: '60px',
    textAlign: 'center',
    color: theme.palette.neutral[200],
  }),
};
