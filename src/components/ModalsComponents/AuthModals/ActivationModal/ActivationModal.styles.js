export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
  }),
  codeErrorIcon: (theme) => ({
    width: '20px',
    height: '20px',
    color: theme.palette.error.mainConcentrated,
  }),
  error: (theme) => ({
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: theme.palette.error.mainConcentrated,
  }),
  codeBox: {
    position: 'relative',
  },
  btnResend: (theme) => ({
    textTransform: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    lineHeight: '0',
    padding: 0,
    verticalAlign: 'baseline',
    transition: 'opacity 0.3s ease-in-out',
    color: theme.palette.settings.link.active,

    '&:hover': {
      opacity: 0.8,
    },
  }),
  email: (theme) => ({
    color: theme.palette.settings.link.active,
  }),
  btnBox: (theme) => ({
    display: 'flex',
    gap: theme.spacing(3),

    '& > button': {
      maxWidth: '228px',
      width: '100%',
    },
  }),
};
