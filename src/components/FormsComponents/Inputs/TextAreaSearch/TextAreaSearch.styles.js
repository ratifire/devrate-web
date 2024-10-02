export const styles = {
  input: (theme) => ({
    height: '100%',
    alignItems: 'stretch',
    padding: '8px 12px 38px',
    'textarea': {
      maxHeight: '254px',
    },
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.neutral['800'],
      borderRadius: 2,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.neutral['300'],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary['300'],
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
    backgroundColor: theme.palette.neutral['800'],
    borderColor: theme.palette.neutral['800'],
    borderRadius: 2,
    marginBottom: theme.spacing(0),
  }),
};
