export const styles = {
  title: (theme) => ({
    color: theme.palette.modals.titleColor,
    paddingRight: '38px',
    position: 'absolute',
    top: '-24px',
    left: '0px',
    textTransform: theme.typography.h6,
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
      borderColor: theme.palette.steper.inactive.backgroundColor,
      borderTopWidth: '8px',
    },
    ' .Mui-active > span': {
      borderColor: theme.palette.steper.active.backgroundColor,
    },
    ' .Mui-completed>span': {
      borderColor: theme.palette.steper.completed.backgroundColor,
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
    color: theme.palette.iconBtn.stepRight.active.color,
    borderRadius: 1,
    padding: '10px',
    '&.Mui-disabled': {
      color: theme.palette.iconBtn.stepRight.disable.color,
    },
    ':hover': {
      backgroundColor: theme.palette.iconBtn.stepRight.active.hoverColor,
    },
    svg: {
      fontSize: '24px',
    },
    ':last-child': (theme) => ({
      marginLeft: theme.spacing(3),
    }),
  }),
};