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
        color: theme.palette.neutral[400],
      },
      '&.MuiInputLabel-shrink': {
        color: theme.palette.neutral[400],
      },
      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    },
    '& .required-asterisk': {
      color: theme.palette.error.main,
      marginRight: '5px',
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
      backgroundColor: theme.palette.background.level2,
      borderRadius: 0,
    },
  }),
  menuItem: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.background.level3,
    },

  }),
};
