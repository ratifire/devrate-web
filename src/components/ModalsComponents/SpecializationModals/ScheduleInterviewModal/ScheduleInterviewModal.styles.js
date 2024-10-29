export const styles = {
  title: (theme) => ({
    color: theme.palette.scheduleInterview.modal.color,
    fontWeight: 500,
    paddingRight: '38px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: `${theme.spacing(4)} ${theme.spacing(3)}`,
    paddingTop: theme.spacing(4),
  }),
  btn: {
    width: '228px',
    textTransform: 'capitalize',
    padding: '12px 14px',
  },
};
