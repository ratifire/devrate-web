export const styles = {
  emptyContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 100px',
    backgroundSize: '567px 192px',
    '@media (min-width: 1272px)': {
      backgroundPosition: 'center calc(50% - -100px)',
      backgroundSize: '681px 230px',
      justifyContent: 'center',
    },
  },

  title: {
    marginTop: '24px',
    marginBottom: '8px',
    textAlign: 'center',
  },

  description: (theme) => ({
    color: theme.palette.info.contrastText,
    marginBottom: '24px',
    textAlign: 'center',
  }),

  button: (theme) => ({
    letterSpacing: 0.17,
    fontSize: 14,
    fontWeight: 400,
    display: 'block',
    backgroundColor: theme.palette.iconBtn.btnSave.backgroundColor.default,
    color: theme.palette.iconBtn.btnSave.color.default,
    textTransform: 'lowercase',
    marginBottom: '12px',
    maxWidth: '271px',
    width: '100%',
    '::first-letter': {
      textTransform: 'uppercase',
    },
    ':hover': {
      backgroundColor: theme.palette.iconBtn.btnSave.backgroundColor.hover,
    },
  }),

  linkWrapper: (theme) => ({
    ' a': {
      textDecoration: 'none',
      textAlign: 'center',
      letterSpacing: 0.17,
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 400,
      display: 'block',
      backgroundColor: theme.palette.iconBtn.btnSave.backgroundColor.default,
      color: theme.palette.iconBtn.btnSave.color.default,
      textTransform: 'none',
      marginBottom: '12px',
      width: '271px',
      height: '56px',
      borderRadius: '4px',
      cursor: 'pointer',
      paddingY: '20px',
      '::first-letter': {
        textTransform: 'uppercase',
      },
      ':hover': {
        backgroundColor: theme.palette.iconBtn.btnSave.backgroundColor.hover,
      },
      boxShadow:
        '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    },
  }),
};
