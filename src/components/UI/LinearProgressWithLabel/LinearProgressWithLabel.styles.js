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
    backgroundColor: theme.palette.specialization.progress.bgColor,
    borderRadius: 3,
    color: theme.palette.primary['400'],
    '>span': {
      borderRadius: 3,
      background: theme.palette.specialization.progress.color,
    },
  }),
  m: (theme) => ({
    height: 8,
    backgroundColor: theme.palette.modals.progressBgColor,
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
    color: theme.palette.baseUserInfo.completeText.color,
    marin: '24px 0 37px',
  }),

  completeIcon: (theme) => ({
    color: theme.palette.baseUserInfo.completeText.iconColor,
    marginLeft: theme.spacing(1),
  }),
};
