export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  boxBtn: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
  }),
  description: {
    lineHeight: '166%',
  },
  cancel: {
    maxWidth: '100%',
    width: '100%',
  },
  form: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  deactivate: (theme) => ({
    color: theme.palette.settings.deactivateModal.deactivate.color,
    backgroundColor: theme.palette.settings.deactivateModal.deactivate.backgroundColor,
    transition: 'opacity 0.3s ease-in-out',

    '&:disabled': {
      backgroundColor: theme.palette.iconBtn.btnSave.backgroundColor.disable,
      color: theme.palette.iconBtn.btnSave.color.disable,
    },

    '&:hover': {
      backgroundColor: theme.palette.settings.deactivateModal.deactivate.backgroundColor,
      opacity: 0.8,
    },
  }),
};
