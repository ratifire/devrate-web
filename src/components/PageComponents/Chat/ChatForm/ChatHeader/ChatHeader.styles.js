export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'stretch',
    padding: '13px 16px',
    borderRadius: '4px 4px 0 0',
    backgroundColor: theme.palette.chatForm.wrapper.backgroundColor,
  }),
  wrapperName: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'grab',
  },
  linkName: {
    textDecoration: 'none',
  },
  name: (theme) => ({
    color: theme.palette.chatForm.name.color,
    fontSize: '14px',
    marginRight: 'auto',
    marginLeft: '8px',
  }),
  btnIcon: (theme) => ({
    width: '44px',
    height: '44px',
    marginTop: '4px',
    color: theme.palette.chatForm.icon.color,
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.chatForm.icon.hover.backgroundColor,
    },
    svg: {
      fontSize: '20px',
    },
  }),
  linkAvatar: {
    textDecoration: 'none',
    display: 'block',
    borderRadius: '50%',
  },
};
