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
  step: {
    padding: '0px',
  },
  stepBtn: {
    margin: '0px',
    padding: '0px',
    ' span': {
      paddingRight: '0px',
    },
  },
  wrapperStepContent: (theme) => ({
    paddingTop: theme.spacing(4),
  }),
};
