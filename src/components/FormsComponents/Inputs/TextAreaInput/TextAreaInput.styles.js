export const styles = {
  input: (theme) => ({
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.default,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.hover,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.focused,
      borderWidth: '2px',
    },
    '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.error,
    },
    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.error,
    },
  }),
  label: (theme) => ({
    '&.Mui-focused': {
      color: theme.palette.modals.textAreaInput.labelColor.focused,
    },
    '&.Mui-error': {
      color: theme.palette.modals.textAreaInput.labelColor.error,
    },
    '&.Mui-required .MuiFormLabel-asterisk': {
      color: theme.palette.modals.textAreaInput.labelColor.required,
    },
  }),
  textHelper: {
    position: 'absolute',
    bottom: '-18px',
    left: '-12px',
  },
  textareaBox: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
  }),
};
