export const styles = {
  container: {
    maxHeight: '100%',
    width: '354px',
    height: '684px',
    backgroundColor: '#303032',
    borderRadius: 2,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '8px 8px 0 0',
  },
  name: {
    color: '#FFFFFF',
    fontSize: '14px',
    marginRight: 'auto',
    marginLeft: '8px',
  },
  btnIcon: (theme) => ({
    color: '#CEB0FA',
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  search: (theme) => ({
    padding: theme.spacing(3),
  }),
  input: (theme) => ({
    width: '300px',
    transition: 'width 0.3s ease',
    '& .MuiOutlinedInput-input': {
      paddingY: '8px!important',
      paddingX: '12px!important',
    },
    '&.Mui-focused': {
      width: '400px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.search.inputActive,
    },
    '&.Mui-focused .MuiOutlinedInput-input + .MuiInputAdornment-root svg path ': {
      fill: theme.palette.search.inputActive,
    },
  }),
  wrapperList: (theme) => ({
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }),
  list: (theme) => ({
    padding: `${theme.spacing(0)} ${theme.spacing(0)}`,
    maxHeight: '525px',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 10,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 10,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    }),
  }),
};
