export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    minWidth: 150,
    marginBottom: theme.spacing(5),
  }),
  selectField: (theme) => ({
    '& .MuiInputBase-root': {
      backgroundColor: 'transparent', // Background color of the input
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.neutral['500'], // Border color when not focused
      },
      '&:hover fieldset': {
        borderColor: theme.palette.neutral['200'], // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.action.active, // Border color when focused
      },
      '&.Mui-error fieldset': {
        borderColor: theme.palette.error.main, // Border color when error occurs
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary, // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.action.active, // Label color when focused
    },
    '& .MuiInputLabel-root.Mui-error': {
      color: theme.palette.modals.select.labelColor.error,
    },
    '& .MuiFormLabel-asterisk': { color: 'red' },
  }),
  dropdownPaper: (theme) => ({
    backgroundColor: theme.palette.selectField.color,
    borderRadius: '3px',
    '& .MuiAutocompleteListbox': {
      maxHeight: '287px',
      overflowY: 'auto',
      backgroundColor: theme.palette.neutral['900'],
    },
    '& .MuiAutocomplete-option': {
      '&:hover': {
        backgroundColor: theme.palette.neutral['500'],
      },
    },
  }),
  helperText: (theme) => ({
    position: 'absolute',
    bottom: '-21px',
    left: '0px',
    '&.MuiFormHelperText-root': {
      color: theme.palette.error.main,
    },
    '&.Mui-error': {
      fontSize: '0.75rem',
      marginLeft: 0,
      marginTop: 0,
    },
    '&.MuiFormHelperText-sizeMedium': {
      fontSize: '0.75rem',
    },
  }),
  autoComplete: {
    width: '100%',
  },
  icon: (theme) => ({
    color: theme.palette.specialization.inputAddSpec.icon,
  }),
};
