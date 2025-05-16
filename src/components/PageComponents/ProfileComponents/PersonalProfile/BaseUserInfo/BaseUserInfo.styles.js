export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(3),
    height: '100%',
    '@media (min-width: 1272px)': {
      padding: theme.spacing(4),
    },
  }),
  wrapperAvatar: (theme, isProgressCompleted) => ({
    flex: isProgressCompleted ? '0 0 212px' : '1 0 132px',
    marginRight: isProgressCompleted ? theme.spacing(3) : theme.spacing(0),
    marginBottom: isProgressCompleted ? '0px' : theme.spacing(1),
    '> button': {
      padding: theme.spacing(0),
      borderRadius: 1,
      width: 'auto',
      height: '100%',
    },
    '@media (min-width: 1272px)': {
      flex: isProgressCompleted ? '0 0 212px' : '1 0 152px',
      marginRight: theme.spacing(3),
      marginBottom: isProgressCompleted ? '0px' : theme.spacing(0),
    },
  }),
  avatar: {
    '@media (min-width: 1272px)': {
      width: '152px',
      height: '152px',
    },
  },
  avatarBig: {
    width: '212px',
    height: '212px',
  },
  wrapperText: (isProgressCompleted) => ({
    flex: isProgressCompleted ? '1' : '1 0 calc(100% - 168px)',
    position: 'relative',
  }),
  wrapperTextBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
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
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.baseUserInfo.city.color,
    textTransform: 'capitalize',
  }),
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
  btnIcon: (theme) => ({
    flex: '1 0 44px',
    color: theme.palette.action.hover,
    borderRadius: 1,
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      color: theme.palette.action.active,
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
