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
  }),
  interviewSideBar: (theme) => ({
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    backgroundImage: 'none',
    height: '100%',
    boxShadow: 'none',
    flex: ' 0 0 354px',
    borderRadius: theme.spacing(2),
    '@media (min-width: 1272px)': {
      flex: '0 0 354px',
    },
    '@media (min-width: 1920px)': {
      flex: '0 0 354px',
    },
  }),

  interview: (theme) => ({
    backgroundColor: theme.palette.interviewPage.bgColor,
    backgroundImage: 'none',
    width: '100%',
    minHeight: '100vh',
    gridColumn: '6/21',
    gridRow: '1/9',
    gridGap: theme.spacing(4),
    boxShadow: 'none',
  }),
};
