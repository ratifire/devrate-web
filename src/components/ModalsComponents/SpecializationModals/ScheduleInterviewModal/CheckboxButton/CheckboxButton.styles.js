export const styles = {
  wrapper: (theme) => ({
    height: '40px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid ' + theme.palette.neutral[600],
    borderRadius: '4px',
    position: 'relative',
    margin: 0,
    transition: 'border-color .2s easy-in-out',

    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: '22.88px',
      color: theme.palette.neutral[100],
    },

    '&.active': {
      borderColor: theme.palette.primary[200],
    }
  }),
  checkbox: {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },

  label:{

  },

  wrapperDisabled: (theme) => ({
    height: '40px',
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid ' + theme.palette.neutral[700],
    borderRadius: '4px',
    position: 'relative',
    margin: 0,
    transition: 'border-color .2s easy-in-out',

    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: '22.88px',
      color: theme.palette.neutral[500],
    },
  }),

};
