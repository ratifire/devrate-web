export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    paddingRight: '38px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  wrapper: (theme) => ({
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  }),
  inputWrapper: (theme) => ({
    width: '100%',
    display: 'flex',
    gridGap: `${theme.spacing(0)} ${theme.spacing(3)}`,
    flexWrap: 'wrap',
    '@media (max-height: 576px)': {
      overflowY: 'auto',
      maxHeight: '296px',
      paddingTop: '10px',
      paddingRight: theme.spacing(3),
      '&::-webkit-scrollbar': {
        width: 10,
      },
      '&::-webkit-scrollbar-track': (theme) => ({
        backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
        borderRadius: 8,
      }),
      '&::-webkit-scrollbar-thumb': (theme) => ({
        borderRadius: 6,
        backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
      }),
    },
  }),
  input50: (theme) => ({
    flex: `0 1 calc(50% - ${theme.spacing(2)})`,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.modals.select.border.focused,
      },
      fieldset: {
        borderColor: theme.palette.neutral[500],
      },
    },
    '& .MuiInputLabel-root.Mui-required .MuiFormLabel-asterisk': {
      color: theme.palette.modals.select.labelColor.required,
    },
  }),
  input100: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
  }),
  iconBtn: (theme) => ({
    marginTop: theme.spacing(1),
    padding: '12px',
    borderRadius: 1,
    color: theme.palette.primary[200],
  }),
  responsibility: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gridGap: theme.spacing(3),
  }),
  workExperienceBtn: {
    width: '228px',
  },
};
