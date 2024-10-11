export const styles = {
  box: (theme) => ({
    marginTop: theme.spacing(2),
    position: 'absolute',
    backgroundColor: theme.palette.background.backdrop,
    maxWidth: '376px',
    width: '100%',
    maxHeight: '400px',
    padding: theme.spacing(2, 3),
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.border.color}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
    color: theme.palette.text.primary,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  boxImg: {
    width: '100%',
    height: '248px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginBottom: '40px',
  },
  emptyTitle: {
    paddingTop: '40px',
    paddingBottom: '24px',
  },
  list: (theme) => ({
    overflowY: 'auto',
    padding: 0,
    paddingRight: '8px',
    height: '384px',
    width: '100%',
    '&::-webkit-scrollbar': {
      width: 6,
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
  link: {
    padding: '8px',
  },
  item: (theme) => ({
    padding: '0',
    display: 'block',
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '33px',
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
