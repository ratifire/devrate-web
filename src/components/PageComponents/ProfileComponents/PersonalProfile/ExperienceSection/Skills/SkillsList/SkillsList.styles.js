export const styles = {
  wrapper: (theme) => ({
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(3),
    backgroundColor: theme.palette.neutral[600],
    borderRadius: 2,
    width: '100%',
  }),
  title: (theme) => ({
    color: theme.palette.text.main,
  }),
  text: (theme) => ({
    textTransform: 'lowercase',
    '&.Junior': {
      color: theme.palette.info.main,
    },
    '&.Middle': {
      color: theme.palette.info.azure,
    },
    '&.Senior': {
      color: theme.palette.info.lime,
    },
    '&:first-letter': {
      textTransform: 'uppercase',
    },
    ' span': {
      display: 'inline-block',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  list: (theme) => ({
    marginTop: theme.spacing(3),
  }),
};
