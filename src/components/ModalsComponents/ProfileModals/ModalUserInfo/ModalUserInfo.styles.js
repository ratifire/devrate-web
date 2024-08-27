export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    paddingRight: '38px',
    position: 'absolute',
    top: '-24px',
    left: '0px',
    ':first-letter': {
      textTransform: 'uppercase',
    },
  }),
  wrapper: (theme) => ({
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: '100%',
    position: 'relative',
  }),
  stepBorder: (theme) => ({
    paddingX: '6px',

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
    cursor: 'default',
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
  wrapperStepContent: (theme) => ({
    paddingTop: theme.spacing(4),
  }),
  wrapperBottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  wrapperBtn: {
    marginLeft: 'auto',
  },
  btnIcon: (theme) => ({
    color: theme.palette.action.active,
    borderRadius: 1,
    padding: '10px',
    '&.Mui-disabled': {
      color: theme.palette.neutral['500'],
    },
    ':hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
    svg: {
      fontSize: '24px',
    },
    ':last-child': (theme) => ({
      marginLeft: theme.spacing(3),
    }),
  }),
};
