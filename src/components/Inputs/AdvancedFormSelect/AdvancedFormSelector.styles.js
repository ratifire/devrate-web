export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    minWidth: 150,
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
  }),
  label: (theme) => ({
    '&.Mui-focused': {
      color: theme.palette.primary['200'],
    },
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  }),
  textHelper: {
    position: 'absolute',
    bottom: '-23px',
  },
  selectField: (theme) => ({
    ' .MuiMenu-paper': {
      backgroundColor: theme.palette.background.level2,
    },
    '.base-Popper-root .MuiAutocomplete-popper .MuiAutocomplete-popperDisablePortal .css-1gsu57t-MuiPopper-root-MuiAutocomplete-popper': {
      backgroundColor: theme.palette.background.level2,
      borderRadius: 0,
    },
  }),
  dropdownPaper: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
  menuItem: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.background.level3,
    },
  }),
};
