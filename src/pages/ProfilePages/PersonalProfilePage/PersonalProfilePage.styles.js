export const styles = {
  container: (theme) => ({
    paddingTop: theme.spacing(4),
    paddingX: theme.spacing(2),
    '@media (min-width: 1272px)': {
      maxWidth: '1536px',
    },
    '@media (min-width: 600px)': {
      paddingX: theme.spacing(4),
    },
  }),
  contentWrapper: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
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
    gridRow: '1/3',
  },
  experience: {
    gridColumn: '1/10',
    gridRow: '2/3',
  },
};
