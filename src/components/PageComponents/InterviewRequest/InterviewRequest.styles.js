export const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '18px',
  },
  select: (theme) => ({
    width: '224px',
    ' .MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input': {
      paddingRight: '34px',
      paddingY: theme.spacing(0),
      fontSize: '20px',
      lineHeight: '32px',
      fontWeight: 500,
      letterSpacing: 0.15,
      backgroundColor: 'transparent',
    },
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
  }),
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
  label: (theme) => ({
    '&.Mui-focused': {
      color: theme.palette.modals.select.labelColor.focused,
    },
  }),
  dropdownPaper: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
  selectItem: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 500,
    letterSpacing: 0.1,
    color: theme.palette.modals.select.selectedField.selected.color,
    borderBottom: `1px solid ${theme.palette.neutral['600']}`,
    paddingY: '12px',
    paddingX: theme.spacing(2),
    ':last-of-type': {
      borderBottom: `1px solid transparent`,
    },
    ':hover': {
      backgroundColor: theme.palette.modals.select.selectedField.hover,
    },
  }),
};
