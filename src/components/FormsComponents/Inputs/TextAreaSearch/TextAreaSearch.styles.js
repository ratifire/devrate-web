export const styles = {
  input: (theme) => ({
    height: '100%',
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.neutral['500'],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.neutral['300'],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary['200'],
      borderWidth: '2px',
    },
    '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },
    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },
  }),
  textHelper: {
    position: 'absolute',
    bottom: '-18px',
    left: '-12px'
  },
  textareaBox: (theme) => ({
    width: '100%',
    height: '100%',
    display: 'block',
    marginBottom: theme.spacing(4),
  }),
};
