export const styles = {
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4)
  }),
  stepBorder: (theme) => ({
    ' .MuiStepConnector-horizontal >span': {
      borderColor: theme.palette.background.level3,
      borderTopWidth: '8px',
    },
    ' .Mui-active > span': {
      borderColor: theme.palette.primary['400'],
    },
    ' .Mui-completed>span': {
      borderColor: theme.palette.primary['400'],
    },
  }),
  step: (theme) => ({
    padding: theme.spacing(0),
    cursor: 'pointer',
  }),
  stepBtn: (theme) => ({
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    display: 'block',
    width: '24px',
    height: '24px',
    marginX: '-2px',
    ' span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      paddingRight: theme.spacing(0),
      position: 'relative',
      '>span': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
      },
      '&.Mui-completed:before': {
        content: '""',
        display: 'block',
        width: '22px',
        height: '22px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: theme.palette.text.primary,
        borderRadius: '50%',
        color: theme.palette.primary['400'],
      },
    },
    ':nth-of-type(1n) svg': {
      marginX: '-6px',
      width: '24px',
      height: '24px',
      position: 'relative',
      cursor: 'default',
      color: theme.palette.background.level3,
      '&.Mui-active': {
        color: theme.palette.primary['400'],
      },
      '&.Mui-completed': {
        color: theme.palette.primary['400'],
      },
    },
  }),
  sendBox: (theme) => ({
    display: 'flex',
    gap: theme.spacing(3),
    alignSelf: 'end',
    maxWidth: '472px',
    width: '100%',
  }),
  btn: {
    maxWidth: '228px',
  },
};
