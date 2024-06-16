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
    '>div>span': {
      borderColor: theme.palette.background.level3,
      borderTopWidth: '8px',
    },
  }),
  step: (theme) => ({
    padding: theme.spacing(0),
    '>div>span': {
      borderColor: theme.palette.background.level3,
      borderTopWidth: '8px',
    },
  }),
  stepBtn: (theme) => ({
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    ' span': {
      paddingRight: theme.spacing(0),
    },
    ':nth-of-type(1n) svg': {
      marginX: '-6px',
      width: '24px',
      height: '24px',
      color: theme.palette.background.level3,
      '&.Mui-active': {
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
