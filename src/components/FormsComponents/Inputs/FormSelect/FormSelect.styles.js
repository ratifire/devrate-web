export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    minWidth: 150,
    marginBottom: theme.spacing(4),
  }),
  input: (theme) => ({
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.select.border.default,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.select.border.hover,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.select.border.focused,
      borderWidth: '2px',
    },
    '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.select.border.error,
    },
    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.select.border.error,
    },
    '& .MuiSelect-icon': {
      color: theme.palette.modals.inputs.textColor.default,
    },
  }),
  label: (theme) => ({
    '&.Mui-focused': {
      color: theme.palette.modals.select.labelColor.focused,
    },
    '&.Mui-error': {
      color: theme.palette.modals.select.labelColor.error,
    },
    '&.Mui-required .MuiFormLabel-asterisk': {
      color: theme.palette.modals.select.labelColor.required
    },
  }),
  textHelper: {
    position: 'absolute',
    bottom: '-23px',
    marginLeft: '0',
  },
  selectField: (theme) => ({
    ' .MuiMenu-paper': {
      backgroundColor: theme.palette.modals.select.selectedField.selected,
      '&::-webkit-scrollbar': {
        width: '1px',
        backgroundColor: theme.palette.modals.select.selectedField.backgroundColor,
      },
    },
    '.MuiList-root': {
      backgroundColor: theme.palette.modals.select.selectedField.backgroundColor,
      borderRadius: 0,
    },
    '.Mui-selected': {
      backgroundColor: `${theme.palette.modals.select.selectedField.selected.backgroundColor} !important`,
      color: `${theme.palette.modals.select.selectedField.selected.color} !important`,
    },
    '.MuiMenuItem-root.Mui-focusVisible': {
      backgroundColor: `${theme.palette.modals.select.selectedField.selected.backgroundColor}`,
    },
  }),
  dropdownPaper: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
  menuItem: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.modals.select.selectedField.hover
    },
  }),
};
