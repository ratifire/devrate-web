export const styles = {
    progress: (theme) => ({
      height: 6,
      backgroundColor: theme.palette.background.level3,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.primary['400'],
      '>span': {
        borderRadius: theme.shape.borderRadius,
      },
    }),
    text: (theme) => ({
      color: theme.palette.text.secondary,
    }),
    wrapper: {
      display: 'flex', 
      alignItems: 'center'
    },
  };