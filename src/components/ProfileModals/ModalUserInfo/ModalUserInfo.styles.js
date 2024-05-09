export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    paddingRight: '38px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  wrapper: (theme) => ({
    paddingTop: theme.spacing(4),
  }),
};
