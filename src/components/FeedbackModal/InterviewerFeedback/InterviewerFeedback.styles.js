export const styles = {
  stepBorder: (theme) => ({
    paddingBottom: '28px',
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
      cursor: 'pointer',
      color: theme.palette.background.level3,
      '&.Mui-active': {
        color: theme.palette.primary['400'],
      },
      '&.Mui-completed': {
        color: theme.palette.primary['400'],
      },
    },
  }),
  sendBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '28px',
  },
  btnSend: {
    maxWidth: '196px',
  },
  title: (theme) => ({
    fontSize: '20px',
    color: theme.palette.text.primary,
    paddingBottom: '49px',
  }),
};
