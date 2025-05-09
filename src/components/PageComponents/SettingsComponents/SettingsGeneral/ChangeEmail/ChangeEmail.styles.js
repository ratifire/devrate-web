export const styles = {
  inputBox: (theme) => ({
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.settings.general.input.border} !important`,
    },
  }),
  btnBox: (theme) => ({
    display: 'flex',
    gap: theme.spacing(3),

    '& > button': {
      maxWidth: '228px',
      width: '100%',
    },
  }),
};
