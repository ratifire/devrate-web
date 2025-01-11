export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    marginBottom: '24px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  text: (theme) => ({
    color: theme.palette.modals.textColor,
    marginBottom: '24px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  buttonWrapper: {
    display: 'flex',
    gap: '16px',
  },
  refuseBtn: (theme) => ({
    width: '100%',
    color: theme.palette.modals.cancelBtnTextColor,
    padding: '12px 16px',
  }),
  confirmBtn: {
    width: '100%',
    textTransform: 'capitalize',
    padding: '12px 16px',
  },
};
