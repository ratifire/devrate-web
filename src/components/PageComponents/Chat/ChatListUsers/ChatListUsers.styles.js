export const styles = {
  container: (theme) => ({
    maxHeight: '100%',
    width: '354px',
    height: '523px',
    backgroundColor: theme.palette.chatListUsers.container.backgroundColor,
    boxShadow: theme.palette.chatListUsers.container.boxShadow,
    borderRadius: 2,
  }),
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '8px 8px 0 0',
  },
  name: (theme) => ({
    color: theme.palette.chatListUsers.name.color,
    fontSize: '14px',
    marginRight: 'auto',
    marginLeft: '8px',
  }),
  btnIcon: (theme) => ({
    color: theme.palette.chatListUsers.icon.color,
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.chatListUsers.icon.hover.backgroundColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  search: (theme) => ({
    padding: theme.spacing(3),
  }),
  input: {
    width: '100%',
    transition: 'width 0.3s ease',
    '& .MuiOutlinedInput-input': {
      paddingY: '8px',
      paddingX: '12px',
    },
  },
  wrapperList: (theme) => ({
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }),
  list: (theme) => ({
    padding: `${theme.spacing(0)} ${theme.spacing(0)}`,
    maxHeight: '364px',
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
