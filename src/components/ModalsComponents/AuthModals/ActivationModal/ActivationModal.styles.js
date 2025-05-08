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
  btnResend: (theme) => ({
    textTransform: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
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
