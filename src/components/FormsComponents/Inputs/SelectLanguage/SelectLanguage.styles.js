export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    minWidth: 150,
    marginBottom: theme.spacing(4),
  }),
  input: (theme) => ({
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
      '&.Mui-error fieldset': {
        borderColor: theme.palette.error.main,
      },
    },
    '& .MuiSelect-select': {
      borderColor: theme.palette.neutral[400],
    },
    '& .MuiSelect-select:empty': {
      '&:focus': {
        borderColor: theme.palette.neutral[400],
      },
    },
  }),

  label: (theme) => ({
    '&.MuiFormLabel-root': {
      color: theme.palette.neutral[400],
      '&.Mui-focused': {
        color: theme.palette.modals.select.labelColor.focused,
      },
      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    },
    '& .MuiFormLabel-asterisk': {
      color: theme.palette.modals.select.labelColor.required,
    },
  }),

  textHelper: {
    position: 'absolute',
    bottom: '-20px',
    left: '-15px',
  },
  selectField: (theme) => ({
    '.MuiMenu-paper': {
      backgroundColor: theme.palette.background.level2,
    },
    '.MuiList-root': {
      backgroundColor: theme.palette.modals.select.selectedField.backgroundColor,
      borderRadius: 0,
    },
  }),
  menuItem: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.modals.select.selectedField.hover,
    },
    '&.Mui-selected': {
      backgroundColor: `${theme.palette.modals.select.selectedField.selected.backgroundColor} !important`,
      color: theme.palette.modals.select.selectedField.selected.color,
    },
    '&.MuiMenuItem-root.Mui-focusVisible': {
      backgroundColor: theme.palette.modals.select.selectedField.selected.backgroundColor,
    },
  }),
  iconBtn: (theme) => ({
    marginTop: theme.spacing(1),
    padding: '12px',
    borderRadius: 1,
    color: theme.palette.iconBtn.createBtn.color,
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: theme.palette.iconBtn.createBtn.hover.backgroundColor,
      color: theme.palette.iconBtn.createBtn.hover.color,
    },
  }),
};
