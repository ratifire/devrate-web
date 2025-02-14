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
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
    },
    height: 'calc(100vh - 100px)',
  }),
  interviewSideBar: {
    flex: ' 0 0 354px',
    '@media (min-width: 1272px)': {
      flex: '0 0 354px',
    },
    '@media (min-width: 1920px)': {
      flex: '0 0 354px',
    },
  },
};
