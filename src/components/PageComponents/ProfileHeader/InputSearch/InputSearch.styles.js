/* eslint-disable */
export const styles = {
  input: (theme) => ({
    width: '300px',
    transition: 'width 0.3s ease',
    '& .MuiOutlinedInput-input': {
      paddingY: '8px!important',
      paddingX: '12px!important',
    },
    '&.Mui-focused': {
      width: '376px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.search.inputActive,
    },
    '&.Mui-focused .MuiOutlinedInput-input + .MuiInputAdornment-root svg path ': {
      fill: theme.palette.search.inputActive,
    },
  }),
};
