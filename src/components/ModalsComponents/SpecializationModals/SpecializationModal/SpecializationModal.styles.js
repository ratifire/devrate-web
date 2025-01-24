export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    paddingRight: '38px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  }),
  input50: (theme) => ({
    flex: `0 1 calc(50% - ${theme.spacing(2)})`,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary[600],
      },
      fieldset: {
        borderColor: theme.palette.neutral[500],
      },
    },
  }),
  input100: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
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

  mastery_input: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    flexDirection: 'column', // Ensure the helper text is below the input
    alignItems: 'flex-start',
    gridGap: theme.spacing(1),
  }),

  specializationBtn: {
    width: '228px',
  },
  skills: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gridGap: theme.spacing(3),
    marginBottom: theme.spacing(4),
  }),
  iconBtn: (theme) => ({
    marginTop: theme.spacing(1),
    padding: '12px',
    borderRadius: 1,
    color: theme.palette.iconBtn.createBtn.hover.color,
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: theme.palette.iconBtn.createBtn.hover.backgroundColor,
      color: theme.palette.iconBtn.createBtn.hover.color,
    },
  }),
};
