export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(3),
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingY: theme.spacing(4),
      paddingX: theme.spacing(4),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '1920px',
    },
  }),
  contentWrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
    },
    height: 'calc(100vh - 116px)',
  }),
  faq: {
    flex: '65.783 0 0',
    '@media (min-width: 1272px)': {
      flex: '74.596 0 0',
    },
    '@media (min-width: 1920px)': {
      flex: '74.679 0 0',
    },
  },
  blog: {
    flex: '31.673 0 0',
    '@media (min-width: 1272px)': {
      flex: '23.790 0 0',
    },
    '@media (min-width: 1920px)': {
      flex: '24.038 0 0',
    },
  },
};
