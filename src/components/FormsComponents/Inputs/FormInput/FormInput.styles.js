export const styles = {
  inputWrapper: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
  }),
  input: (theme) => ({
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
    '&, & input': {
      backgroundColor: `${theme.palette.background.default} !important`,
      color: `${theme.palette.text.primary} !important`,
    },
    '&:-webkit-autofill, & input:-webkit-autofill': {
      'WebkitTextFillColor': `${theme.palette.text.primary} !important`,
      'boxShadow': `0 0 0 100px ${theme.palette.background.default} inset !important`,
      'transition': 'background-color 5000s ease-in-out 0s',
    },
  }),
  label: (theme) => ({
    '&.Mui-focused': {
      color: theme.palette.primary['200'],
    },
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
    '&.Mui-required .MuiFormLabel-asterisk': {
      color: '#ED0E0E'
    },
  }),
  textHelper: {
    position: 'absolute',
    bottom: '-18px',
    left: '-12px'
  },
};
