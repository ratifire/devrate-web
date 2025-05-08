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
};
