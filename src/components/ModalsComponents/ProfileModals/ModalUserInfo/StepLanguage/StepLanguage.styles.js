export const styles = {
  wrapper: (theme) => ({
    paddingBottom: theme.spacing(3),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral[400],
      },
    },
  }),
  input100: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral[400],
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '& legend': {
        width: 'auto',
      },
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.text.primary,
    },
  }),
  list: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gridGap: theme.spacing(3),
  }),
  btn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingY: '14px',
    maxWidth: '228px',
  },
  wrapperLanguages: (theme) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gridGap: theme.spacing(3),
  }),
};
