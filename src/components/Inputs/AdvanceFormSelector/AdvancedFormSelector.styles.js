export const styles = {
  wrapper: (theme) => ({
    width: '100%',
    minWidth: 150,
    marginBottom: theme.spacing(4),
    '& + .Mui-expanded': {
      backgroundColor: '#1d1d1d',
    },
  }),
  // selectField: (theme) => ({
  //   ' .MuiMenu-paper': {
  //     backgroundColor: theme.palette.background.level2,
  //   },
  //   '.MuiList-root': {
  //     backgroundColor: theme.palette.background.level2,
  //     borderRadius: 0,
  //   },
  // }),
  dropdownPaper: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
};