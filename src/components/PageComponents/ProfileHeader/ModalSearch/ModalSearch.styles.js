export const styles = {
  box: (theme) => ({
    marginTop: theme.spacing(2),
    position: 'absolute',
    backgroundColor: theme.palette.background.backdrop,
    maxWidth: '376px',
    width: '100%',
    maxHeight: '428px',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.border.color}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
    color: theme.palette.text.primary,
  }),
  list: (theme) => ({
    overflowY: 'auto',
    padding: 0,
    paddingRight: '8px',
    maxHeight: '412px',
    width: '100%',
    '&::-webkit-scrollbar': {
      width: 6,
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
    display: 'block',
    padding: '0',
    paddingRight: theme.spacing(2),
    '& a': {
      color: theme.palette.text.primary,
      minHeight: '64px',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '33px',
      '&: hover': {
        backgroundColor: theme.palette.neutral['800'],
      }
    },
  }),
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  divider: (theme) => ({
    backgroundColor: theme.palette.search.color,
  }),
  subtitle: (theme) => ({
    color: theme.palette.neutral['100'],
  }),
};
