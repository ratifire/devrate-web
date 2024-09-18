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
    width: '132px',
    height: '132px',
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
    color: theme.palette.info.main,
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
    color: theme.palette.primary['100'],
    borderRadius: 1,transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      transform: 'scale(1.1)',
    },
    svg: {
      fontSize: '18px',
    },
  }),
};
