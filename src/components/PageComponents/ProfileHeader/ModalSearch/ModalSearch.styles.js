export const styles = {
  box: (theme) => ({
    marginTop: theme.spacing(2),
    position: 'absolute',
    backgroundColor: theme.palette.neutral[900],
    maxWidth: '276px',
    width: '100%',
    height: '316px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
  }),
  list: (theme) => ({
    overflowY: 'auto',
    height: '300px',
    width: '100%',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.neutral['600'],
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    },
  }),
  item: (theme) => ({
    '&:hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  }),
};
