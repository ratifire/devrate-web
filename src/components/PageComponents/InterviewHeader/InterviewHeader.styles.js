const styles = {
  header: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingY: '12px',
    paddingX: theme.spacing(3),
    width: '100%',
    backgroundImage: 'none',
    boxShadow: 'none',
    '@media (min-width: 1272px)': {
      paddingY: theme.spacing(3),
      paddingX: theme.spacing(4),
    },
  }),
};

export default styles;
