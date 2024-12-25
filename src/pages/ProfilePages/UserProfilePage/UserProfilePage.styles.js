export const styles = {
  container: (theme) => ({
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingTop: theme.spacing(3),
      paddingX: theme.spacing(3),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '1920px',
      paddingTop: theme.spacing(4),
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto auto',
    gridGap: theme.spacing(3),
    '@media (min-width: 1272px)': {
      gridGap: theme.spacing(4),
    },
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
    },
  }),
  baseUserInfo: {
    gridColumn: '1/6',
    gridRow: '1/2',
  },
  skills: {
    gridColumn: '6/10',
    gridRow: '1/2',
  },
  right: {
    gridColumn: '10/13',
    gridRow: '1/5',
    minWidth: '354px',
  },
  experience: {
    gridColumn: '1/10',
    gridRow: '2/5',
    minHeight: '382px',
    height: 'calc(100vh - 412px)',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
