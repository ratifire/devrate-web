export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    position: 'relative',
    gridGap: theme.spacing(3),
    flexWrap: 'wrap',
    '@media (min-width: 1272px)': {
      flexWrap: 'nowrap',
    },
  }),
};
