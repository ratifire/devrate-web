export const styles = {
  wrapper: (theme) => ({
    height: '40px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderColor: theme.palette.scheduleInterview.modal.checkbox.borderColor,
    borderRadius: '4px',
    position: 'relative',
    margin: 0,
    transition: 'border-color .2s easy-in-out',

    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: '22.88px',
      color: theme.palette.scheduleInterview.modal.checkbox.color,
    },

    '&.active': {
      borderColor: theme.palette.scheduleInterview.modal.checkbox.checked.borderColor,
      '>p': {
        color: theme.palette.scheduleInterview.modal.checkbox.checked.color,
      },
    },
  }),
  checkbox: {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
  wrapperDisabled: (theme) => ({
    height: '40px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderColor: theme.palette.scheduleInterview.modal.checkbox.disabled.borderColor,
    borderRadius: 1,
    position: 'relative',
    margin: 0,
    transition: 'border-color .2s easy-in-out',

    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: '23px',
      color: theme.palette.scheduleInterview.modal.checkbox.disabled.color,
    },
  }),
};
