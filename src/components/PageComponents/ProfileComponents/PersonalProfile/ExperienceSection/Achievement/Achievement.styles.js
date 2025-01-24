export const styles = {
  list: (theme) => ({
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    width: '100%',
    gridGap: theme.spacing(3),
    '>div': {
      width: '100%',
      '@media (min-width: 1272px)': {
        width: 'calc(50% - 8px)',
      },
    },
  }),
};
