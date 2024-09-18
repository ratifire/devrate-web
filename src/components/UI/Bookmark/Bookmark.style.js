export const styles = (theme) => ({
  iconButton: {
    color: theme.palette.action.hover,
    position: 'absolute',
    top: '0px',
    right: '10px',
    borderRadius: 1,transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      transform: 'scale(1.1)',
      borderRadius: '4px',
      color: theme.palette.action.active,
    },
  },
  bookmarkIcon: {
    fontSize: '24px',
  },

});
