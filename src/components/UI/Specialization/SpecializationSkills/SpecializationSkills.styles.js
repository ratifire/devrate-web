export const styles = {
  btnIcon: (theme) => ({
    color: theme.palette.primary['100'],
    borderRadius: 1,
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  wrapper: (theme) => ({
    maxWidth: '480px',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.level2,
    borderRadius: 2,
  }),
  title: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  }),
  skillsContainer: {
    maxHeight: '312px',
    overflowY: 'auto',
    paddingRight: '10px',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.neutral['600'],
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    }),
  },
  markWrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  }),
  mark: (theme) => ({
    color: theme.palette.action.active,
  }),
};
