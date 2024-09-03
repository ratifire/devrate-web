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
    '& > :first-of-type': {
      fontFamily: theme.typography.caption1,
      textTransform: 'capitalize',

      backgroundColor: theme.palette.primary['400'],
      color: theme.palette.common.white,
      padding: '10px 20px',
      borderRadius: '4px',
      flex: '1',

      // '&:hover': {
      //   backgroundColor: theme.palette.primary['500'], // Меняем цвет при наведении
      //   boxShadow: `0px 4px 12px ${theme.palette.primary['200']}`, // Пример добавления тени
      // },
    },
    '& > :last-of-type': {
      fontFamily: theme.typography.caption1,
      textTransform: 'capitalize',

      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary['400']}`,
      color: theme.palette.primary['200'],
      padding: '10px 20px',
      borderRadius: '4px',
      flex: '1',

      '&:hover': {
        borderColor: theme.palette.primary['500'], // Меняем цвет рамки при наведении
        color: theme.palette.primary['200'],
      },
    },
  }),
};
