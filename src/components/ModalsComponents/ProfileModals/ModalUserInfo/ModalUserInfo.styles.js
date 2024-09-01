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
  label: () => ({
  '& .MuiStepLabel-iconContainer': {
    paddingRight: '0',
  },
  padding: '0',
    margin: '0',
    '& .MuiStepLabel-label': {
    padding: '0',
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