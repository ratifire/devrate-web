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
    gridGap: `${theme.spacing(4)} ${theme.spacing(3)}`,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  }),
  input50: (theme) => ({
    flex: `0 1 calc(50% - ${theme.spacing(2)})`,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary[600],
      },
      'fieldset': {
        borderColor: theme.palette.neutral[500],
      },
    },
    '& .MuiInputLabel-root.Mui-required .MuiFormLabel-asterisk': {
      color: 'red',
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
  error: {
    transform: 'translate(-13px, -5px)'
  },
  checkBoxContainer: (theme) =>({
    display: 'flex',
    alignItems: 'center',
    flex: ` calc(90% - ${theme.spacing(2)})`
  })
};
