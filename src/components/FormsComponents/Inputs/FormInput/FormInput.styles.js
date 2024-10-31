export const styles = {
  inputWrapper: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
  }),
  input: (theme) => ({
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.default,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.hover,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.focused,
      borderWidth: '2px',
    },
    '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.error,
    },
    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.error,
    },
    '&, & input': {
      backgroundColor: theme.palette.modals.background,
      color: theme.palette.modals.inputs.textColor.default,
    },
    '&:-webkit-autofill, & input:-webkit-autofill': {
      WebkitTextFillColor: `${theme.palette.modals.inputs.textColor.default} !important`,
      boxShadow: `0 0 0 100px ${theme.palette.modals.backgroundColor} inset !important`,
      transition: 'background-color 5000s ease-in-out 0s',
    },
  }),
  label: (theme) => ({
    '&.Mui-focused': {
      color: theme.palette.modals.inputs.labelColor.focused,
    },
    '&.Mui-error': {
      color: theme.palette.modals.inputs.labelColor.error,
    },
    '&.Mui-required .MuiFormLabel-asterisk': {
      color: theme.palette.modals.inputs.labelColor.required,
    },
  }),
  textHelper: (theme) => ({
    color: theme.palette.neutral[300],
    position: 'absolute',
    bottom: '-21px',
    left: '0px',
  }),
};
