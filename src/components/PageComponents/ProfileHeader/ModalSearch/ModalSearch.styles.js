/* eslint-disable */
export const styles = {
  box: (theme) => ({
    marginTop: theme.spacing(2),
    position: 'absolute',
    backgroundColor: theme.palette.neutral[900],
    maxWidth: '376px',
    width: '100%',
    height: '368px',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
  }),
  list: (theme) => ({
    overflowY: 'auto',
    height: '350px',
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
    '&:hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '33px',
    },
  }),
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  linkBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  divider: (theme) => ({

  })
};
