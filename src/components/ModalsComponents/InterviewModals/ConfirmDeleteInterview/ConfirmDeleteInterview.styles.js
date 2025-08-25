export const styles = {
  box: {
    display: 'flex',
  },
  title: (theme) => ({
    color: theme.palette.text.primary,
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  text: (theme) => ({
    display: 'block',
    color: theme.palette.modals.textColor,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  confirmBtn: {
    width: '100%',
    textTransform: 'capitalize',
    padding: '12px 16px',
  },
  refuseBtn: (theme) => ({
    width: '100%',
    color: theme.palette.modals.cancelBtnTextColor,
    padding: '12px 16px',
  }),
};
