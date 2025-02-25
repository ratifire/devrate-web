export const styles = {
  container: (theme) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.requestInterview.participant.backgroundColor,
    borderRadius: theme.spacing(2),
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px ${theme.palette.requestInterview.participant.borderShadow}`,
    marginBottom: theme.spacing(3),
  }),
  header: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  }),
  text: (theme) => ({
    color: theme.palette.modals.textColor,
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  dialogWrapper: (theme) => ({
    ' > div > div ': {
      padding: theme.spacing(4),
      borderRadius: 2,
      backgroundColor: theme.palette.modals.backgroundColor,
      position: 'relative',
      boxShadow: 'none',
      backgroundImage: 'none',
      maxWidth: '451px',
      margin: 0,
    },
  }),
  title: (theme) => ({
    padding: 0,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  dialogContent: (theme) => ({
    borderRadius: 2,
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: 0,
    marginBottom: theme.spacing(4),
  }),
  dialogActions: { padding: 0 },
  buttonWrapper: (theme) => ({
    marginTop: theme.spacing(4),
    display: 'flex',
    gap: theme.spacing(3),
    width: '100%',
  }),
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
  statsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
  btnIcon: (theme) => ({
    position: 'absolute',
    top: '24px',
    right: '24px',
    color: theme.palette.iconBtn.btnClose.color,
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnClose.hoverColor,
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
