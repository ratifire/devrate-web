export const styles = {
  formInput: (theme) => ({
    display: 'flex',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral[100],
      },
    },
    '& > div': {
      width: '60px',
      height: '60px',
    },
  }),
  wrapper: {
    position: 'relative',
  },
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
};
