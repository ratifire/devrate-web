export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(4),
    paddingX: theme.spacing(2),
    '@media (min-width: 1272px)': {
      maxWidth: '1536px',
    },
    '@media (min-width: 600px)': {
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    display: 'flex',
    gridGap: theme.spacing(4),
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
    },
  }),
  faq: {
    maxWidth: '1110px',
    width: '100%',
    '@media (max-width: 1024px)': {
      maxWidth: '100%',
    },
  },
  blog: {
    maxWidth: '354px',
    width: '100%',
    '@media (max-width: 1024px)': {
      maxWidth: '100%',
    },
  },
};