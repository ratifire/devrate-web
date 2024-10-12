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
    height: 8,
    backgroundColor: theme.palette.neutral['400'],
    borderRadius: 3,
    color: theme.palette.primary['400'],
    '>span': {
      borderRadius: 3,
      background: 'linear-gradient(90deg, #4A1D8B, #8233F1, #A756B4, #FCA728)',
    },
  }),
  m: (theme) => ({
    height: 8,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.neutral[400]: theme.palette.neutral[50],
    borderRadius: 3,
    '>span': {
      background: 'linear-gradient(90deg, #4A1D8B, #8233F1, #A756B4, #FCA728)',
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
