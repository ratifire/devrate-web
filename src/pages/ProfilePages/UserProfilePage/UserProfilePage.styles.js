export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(3),
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
    gridTemplateRows: 'auto 0 auto auto auto',
    gridGap: `${theme.spacing(0)} ${theme.spacing(3)}`,
    '@media (min-width: 1272px)': {
      gridGap: theme.spacing(4),
    },
    ' > div': {
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
    },
  }),
  baseUserInfo: () => ({
    gridColumn: '1/10',
    gridRow: '1/2',
    borderRadius: 2,
    '@media (min-width: 1272px)': {
      gridColumn: '1/6',
    },
  }),
  skills: {
    gridColumn: '10/13',
    gridRow: '1/3',
    borderRadius: '8px 8px 0 0',
    '@media (min-width: 1272px)': {
      gridRow: '1/2',
      gridColumn: '6/10',
      borderRadius: 2,
    },
  },
  right: {
    gridColumn: '10/13',
    gridRow: '3/5',
    minWidth: '299px',
    borderRadius: '0 0 8px 8px',
    '@media (min-width: 1272px)': {
      gridRow: '1/5',
      borderRadius: 2,
    },
  },
  experience: (theme) => ({
    borderRadius: 2,
    gridColumn: '1/10',
    gridRow: '2/5',
    minHeight: '382px',
    height: 'calc(100vh - 414px)',
    marginTop: theme.spacing(3),
    '@media (min-width: 1272px)': {
      marginTop: theme.spacing(0),
    },
  }),
};
