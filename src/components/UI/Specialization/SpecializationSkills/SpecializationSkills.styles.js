export const styles = {
  btnIcon: (theme) => ({
    color: theme.palette.iconBtn.createBtn.color,
    transition: 'background-color 0.3s, transform 0.3s',
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.createBtn.hover.backgroundColor,
      color: theme.palette.iconBtn.createBtn.hover.color,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  wrapper: (theme) => ({
    height: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.level2,
    borderRadius: 2,
  }),
  title: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
  }),
  skillsContainer: (theme) => ({
    maxHeight: '312px',
    overflowY: 'auto',
    paddingRight: '10px',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl,
    },
  }),
  markWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingRight: '10px',
  },
  mark: (theme) => ({
    color: theme.palette.specialization.mark.color,
  }),
};
