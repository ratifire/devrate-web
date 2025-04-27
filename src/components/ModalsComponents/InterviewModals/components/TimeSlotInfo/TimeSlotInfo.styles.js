export const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input100: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    // gridGap: theme.spacing(3),
    color: theme.palette.specialization.inputSelectSpec.color,
    '& .base-Popper-root .MuiBox-root': {
      padding: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
    },
    '& .MuiAutocomplete-listbox ': {
      backgroundColor: theme.palette.specialization.inputList.backgroundColor,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '4px',
      maxHeight: '200px',

      '&::-webkit-scrollbar': {
        width: 0,
      },
      '& .MuiAutocomplete-option.Mui-focused': {
        color: theme.palette.specialization.inputSelectSpec.color,
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: theme.palette.specialization.inputSelectSpec.backgroundColor,
        },
      },
      '& .MuiAutocomplete-option': {
        backgroundColor: theme.palette.specialization.inputList.backgroundColor,
      },
      '& .MuiAutocomplete-option[aria-selected="true"]': {
        backgroundColor: `${theme.palette.specialization.inputSelectSpec.backgroundColor} !important`,
      },
    },
    '& .base-Popper-root .MuiBox-root .MuiAutocomplete-option.Mui-focused': {
      backgroundColor: 'transparent',
      marginRight: theme.spacing(2),
    },
  }),
  checkbox: (theme) => ({
    maxWidth: '100%',
    width: '100%',
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(1),
  }),
  iconPosition: (theme) => ({
    marginTop: theme.spacing(1),
    padding: '12px',
    borderRadius: 1,
  }),
};
