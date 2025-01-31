export const styles = {
  container: (theme) => ({
    margin: '0 auto',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(20, 1fr)',
    gridTemplateRows: 'repeat(8, 1fr)',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: 2,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  interviews: {
    gridColumn: '1/6',
    gridRow: '1/9',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    height: '700px',
    width: '100%',
    backgroundColor: '#303032',
  },
  interview: (theme) => ({
    gridColumn: '6/21',
    gridRow: '1/9',
    gridGap: theme.spacing(4),
    boxShadow: 'none',
    backgroundImage: 'none',
  }),
};
