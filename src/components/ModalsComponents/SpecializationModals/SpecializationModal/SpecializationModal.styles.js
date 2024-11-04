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
    '& .base-Popper-root .MuiBox-root': {
      padding: `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`
    },
    '& .base-Popper-root .MuiAutocomplete-listbox ': {
      maxHeight: '250px',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      '&::-webkit-scrollbar': {
        paddingRight: theme.spacing(2),
        width: 10,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
        borderRadius: 8,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 6,
        backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
      },
    },
    '& .base-Popper-root .MuiBox-root .MuiAutocomplete-option.Mui-focused': {
      backgroundColor: 'transparent',
      marginRight: theme.spacing(2),
      '&:hover': {
        backgroundColor: theme.palette.specialization.inputAddSpec.backgroundColor,
        color: theme.palette.specialization.inputAddSpec.color,
      },
    }
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
    }
  }),
};
