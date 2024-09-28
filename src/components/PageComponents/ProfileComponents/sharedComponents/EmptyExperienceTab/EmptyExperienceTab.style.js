export const styles = {
  emptyContainer:  {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
  },

  title: {
    marginTop: '24px',
    marginBottom: '8px',
    textAlign: 'center',
  },

  description: (theme) => ({
    color: theme.palette.info.contrastText,
    marginBottom: '24px',
    textAlign: 'center',
  }),

  button: (theme) => ({
    display: 'block',
    backgroundColor: theme.palette.primary['400'],
    color: theme.palette.info.contrastText,
    textTransform: 'lowercase',
    marginBottom: '12px',
    maxWidth: '271px',
    width: '100%',
    '&::first-letter': {
      textTransform: 'uppercase',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary['600'],
    },
  }),
};