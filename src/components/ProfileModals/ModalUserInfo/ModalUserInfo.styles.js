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
  step: (theme) => ({
    padding: theme.spacing(0),
  }),
  stepBtn: (theme) => ({
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    ' span': {
      paddingRight: theme.spacing(0),
    },
  }),
  wrapperStepContent: (theme) => ({
    paddingTop: theme.spacing(4),
  }),
};
