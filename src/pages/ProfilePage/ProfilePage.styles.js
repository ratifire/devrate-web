export const styles = {
  container: {
    paddingX: '8px',
    '@media (min-width: 1272px)': {
      maxWidth: '1536px',
    },
    '@media (min-width: 600px)': {
      paddingX: '24px',
    },
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto',
    gridGap: '24px',
    ' > div': {
      borderRadius: '8px',
      backgroundColor: '#303032',
    },
  },
  baseUserInfo: {
    gridColumn: '1/5',
    gridRow: '1/2',
  },
  skills: {
    gridColumn: '5/10',
    gridRow: '1/2',
  },
  right: {
    gridColumn: '10/13',
    gridRow: '1/3',
  },
  experience: {
    gridColumn: '1/10',
    gridRow: '2/5',
  },
};
