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
  input: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#444446 !important',
      },
    },
  },
  actions: (theme) => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: theme.spacing(3),
    '> button': {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
    '& button:last-child': {
      visibility: 'hidden',
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
