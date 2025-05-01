export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(4),
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingY: theme.spacing(3),
      paddingX: theme.spacing(3),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '1920px',
      paddingTop: theme.spacing(4),
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    width: '100%',
    ' > div': {
      padding: '24px',
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
    },
  }),
  interviewRequest: {},
};
