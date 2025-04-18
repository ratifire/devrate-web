export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(3),
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
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: theme.spacing(4),
    minHeight: 'calc(100vh - 200px)',
  }),
  box: (theme) => ({
    height: '100%',
    flex: ' 0 0 354px',
    '@media (min-width: 1272px)': {
      flex: '0 0 354px',
    },
    '@media (min-width: 1920px)': {
      flex: '0 0 354px',
    },
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
      height: '100%',
    },
  }),
};
