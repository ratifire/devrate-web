export const styles = {
  wrapper: (theme) => ({
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(3),
    backgroundColor: theme.palette.neutral[600],
    borderRadius: 2,
    width: 'calc(25% - 12px)',
  }),
  title: (theme) => ({
    color: theme.palette.text.main,
  }),
  text: (theme) => ({
    textTransform: 'lowercase',
    color: theme.palette.neutral[900],
    '&.JUNIOR': {
      color: theme.palette.info.main,
    },
    '&.MIDDLE': {
      color: theme.palette.info.azure,
    },
    '&.SENIOR': {
      color: theme.palette.warning.main,
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
    ' > div': {
      paddingY: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.neutral[400]}`,
    },
  }),
};
