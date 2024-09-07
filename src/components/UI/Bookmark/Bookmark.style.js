export const styles = (theme) => ({
  iconButton: {
    color: theme.palette.action.hover,
    position: 'absolute',
    top: '0px',
    right: '10px',
    '&:hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      borderRadius: '4px',
      color: theme.palette.action.active,
    },
  },
  bookmarkIcon: {
    fontSize: '24px',
  },

});
