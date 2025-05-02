export const styles = {
  inputWrapper: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(5),
    '& .Mui-error': {
      marginLeft: 0,
    },
  }),
  selectField: (theme) => ({
    height: '300px',
    width: '360px',
    top: '-196px',
    left: '114px',
    fieldset: { display: 'none' },
    '&.Mui-focused:has(div[aria-expanded="false"])': {
      fieldset: { display: 'block' },
    },
    '.MuiSelect-select': {
      padding: '8px',
      paddingRight: '24px !important',
    },
    svg: { right: 0 },
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
  textField: (theme) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.modals.inputs.border.hover,
      },
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.modals.inputs.placeholder,
    },
    '&> .MuiFormLabel-root': {
      '&.Mui-focused': {
        color: theme.palette.modals.inputs.labelColor.focused,
      },
      '&.Mui-error': {
        color: theme.palette.modals.inputs.labelColor.error,
      },
      '&.Mui-required .MuiFormLabel-asterisk': {
        color: theme.palette.modals.inputs.labelColor.required,
      },
    },
    '& .MuiInputBase-input': {
      padding: '16px 8px',
    },
    ' .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.default,
    },
    '& .MuiInputBase-root.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.modals.inputs.border.focused,
        borderWidth: '2px',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.modals.inputs.border.focused,
      },
    },
    '& .MuiInputBase-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.error,
    },
    '& .MuiInputBase-root.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
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
    '& input.MuiInputBase-inputAdornedStart': {
      paddingLeft: '0px',
    },
  }),
  flagImage: {
    display: 'flex',
    marginRight: '20px',
  },
  menuItem: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.modals.select.selectedField.hover,
    },
  }),
  countryName: {
    marginRight: '8px',
  },
  dialCode: (theme) => ({
    color: theme.palette.modals.select.textColor.default,
  }),
  select: {
    '& > .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input': {
      padding: '11px 35px 6px 0',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
};
