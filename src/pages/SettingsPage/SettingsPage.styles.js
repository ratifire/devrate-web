export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
  }),
  sideBar: (theme) => ({
    maxWidth: '354px',
    width: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    borderRadius: theme.spacing(2),
    flexDirection: 'column',
    gap: theme.spacing(4),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    minHeight: 'calc(100vh - 124px)',

    '@media (min-width: 1920px)': {
      maxWidth: '450px',
    },

    '@media (max-width: 992px)': {
      maxWidth: '300px',
    },
  }),
};
