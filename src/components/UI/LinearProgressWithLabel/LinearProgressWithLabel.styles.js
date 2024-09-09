export const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
  },
  wrapperProgress: {
    width: '100%',
  },
  horizontal: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  vertical: (theme) => ({
    alignItems: 'flex-start',
    flexDirection: 'column',
    '>h6': {
      marginBottom: theme.spacing(2),
    },
  }),
  s: (theme) => ({
    height: 6,
    backgroundColor: theme.palette.neutral['400'],
    borderRadius: 3,
    color: theme.palette.primary['400'],
    '>span': {
      borderRadius: 3,
      backgroundColor: theme.palette.primary['400'],
    },
  }),
  m: (theme) => ({
    height: 20,
    backgroundColor: theme.palette.neutral['400'],
    borderRadius: 3,
    '>span': {
      backgroundColor: theme.palette.primary['400'],
      borderRadius: 3,
    },
  }),
  text: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  completeContainer: (theme) => ({
    display: 'flex',
    justifyContent: 'start',
    marginTop: theme.spacing(2),
  }),
  completeText: (theme) => ({
    color: theme.palette.neutral['100'],
    marin: '24px 0 37px',
  }),

  completeIcon: (theme) => ({
    color: theme.palette.info.azure,
    marginLeft: theme.spacing(1),
  }),
};
