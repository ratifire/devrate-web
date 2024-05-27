export const styles = {
  input: (theme) => ({
    width: '100%',
    minWidth: 150,
    marginBottom: theme.spacing(4),
  }),
  textHelper: {
    position: 'absolute',
    bottom: '-23px',
  },
  selectField: (theme) =>  ({
    '.MuiList-root': {
      backgroundColor: theme.palette.background.level2,
    }
  }),
  menuItem: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.background.level3,
    }
  }),
  };
