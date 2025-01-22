export const styles = {
  input: (theme) => ({
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.search.inputActive,
    },
    '&.Mui-focused .MuiOutlinedInput-input + .MuiInputAdornment-root svg path ': {
      fill: theme.palette.search.inputActive,
    },
  }),
};
