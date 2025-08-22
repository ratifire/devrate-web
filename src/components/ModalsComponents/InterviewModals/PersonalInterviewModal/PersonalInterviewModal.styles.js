export const styles = {
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(4),
  }),
  content: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(4),
  }),
  text: {
    fontSize: '0.75rem',
  },
  actions: (theme) => ({
    display: 'flex',
    gap: theme.spacing(3),
    '> *': {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
  }),
  copyButton: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    width: '100%',
  }),
  copyIcon: {
    width: '20px',
    height: '20px',
  },
};
