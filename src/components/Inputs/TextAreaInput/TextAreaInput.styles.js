export const styles = {
  textareaBox: (theme) => ({
    borderRadius: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      // '&.Mui-focused fieldset': {
      //   borderColor: theme.palette.action.active, // Set the border color when focused
      // },
      '& fieldset': {
        borderColor: theme.palette.neutral[500], // Set the border color when not focused
      },
      // '&:hover fieldset': {
      //   borderColor: theme.palette.neutral[300], // Set the border color on hover
      // },
    },
    // '& label': {
    //   color: 'secondary.main',
    //   // Set the label color to the secondary color
    // },
    // '& label.Mui-focused': {
    //   color: 'primary.main',
    //   // Set the label color to the primary color when focused
    // },
  })
};
