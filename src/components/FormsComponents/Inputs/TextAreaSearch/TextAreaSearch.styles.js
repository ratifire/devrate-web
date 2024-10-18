export const styles = {
  input: (theme) => ({
    height: '100%',
    alignItems: 'stretch',
    padding: '8px 12px 38px',
    'textarea': {
      maxHeight: '254px',
    },
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.default2,
      borderRadius: 2,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.textAreaInput.border.default2,
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
  textHelper: {
    position: 'absolute',
    bottom: '-18px',
    left: '-12px'
  },
  textareaBox: (theme) => ({
    width: '100%',
    height: '100%',
    display: 'block',
    backgroundColor: theme.palette.modals.select.selectedField.selected.backgroundColor,
    borderColor: theme.palette.modals.select.selectedField.selected.backgroundColor,
    borderRadius: 2,
    marginBottom: theme.spacing(0),
  }),
};
