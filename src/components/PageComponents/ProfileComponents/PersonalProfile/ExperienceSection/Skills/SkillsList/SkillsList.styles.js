export const styles = {
  wrapper: (theme) => ({
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(3),
    backgroundColor: theme.palette.neutral[600],
    borderRadius: 2,
    width: '100%',
  }),
  star: (theme) => ({
    width: '18px',
    height: '18px',
    color: theme.palette.primary['200'],
  }),
  titleWrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(1),
    width: '100%',
  }),
  title: (theme) => ({
    color: theme.palette.text.main,
    flex: '1 2 max(199px)',
    maxWidth: '199px',
    textWrap: 'nowrap',
    width: '2vw',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),
  text: (theme) => ({
    textTransform: 'lowercase',
    '&.JUNIOR': {
      color: theme.palette.info.main,
    },
    '&.MIDDLE': {
      color: theme.palette.info.azure,
    },
    '&.SENIOR': {
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
