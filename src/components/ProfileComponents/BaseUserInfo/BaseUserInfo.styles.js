export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(4),
  }),
  wrapperAvatar: (theme) => ({
    flex: '1 0 100%',
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(1),
    '> button': {
      padding: theme.spacing(0),
      borderRadius: 1,
      width: '100%',
      height: '100%',
    },
    '@media (min-width: 600px)': {
      flex: '1 0 132px',
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(0),
    },
  }),
  avatar: {
    width: 132,
    height: 132,
    borderRadius: 1,
  },
  wrapperText: {
    flex: '1 0 calc(100% - 148px)',
    position: 'relative',
  },
  wrapperTextBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    button: (theme) => ({
      color: theme.palette.neutral['100'],
    }),
  },
  userName: (theme) => ({
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    paddingRight: '38px',
  }),
  speciality: (theme) => ({
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  }),
  city: (theme) => ({
    // тут треба поправити на майбутне
    display: 'flex',
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 500,
    color: theme.palette.text.secondary,
    letterSpacing: '0.17px',
    marginBottom: theme.spacing(1),
  }),
  online: {
    // тут треба поправити на майбутне
    display: 'flex',
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 500,
    color: '#64FF2E',
    letterSpacing: '0.17px',
  },
  icon: (theme) => ({
    fontSize: 18,
    marginRight: theme.spacing(1),
  }),
  buttons: (theme) => ({
    flex: '1 1 100%',
    display: 'flex',
    width: '100%',
    gridGap: theme.spacing(4),
    marginTop: '20px',
  }),
  btn: (theme) => ({
    paddingY: '14px',
    flex: '1 0 calc(100% - 60px)',
    textTransform: 'lowercase',
    backgroundColor: theme.palette.primary['400'],
    '::first-letter': {
      textTransform: 'uppercase',
    },
  }),
  btnIcon: (theme) => ({
    flex: '1 0 44px',
    color: theme.palette.action.active,
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
