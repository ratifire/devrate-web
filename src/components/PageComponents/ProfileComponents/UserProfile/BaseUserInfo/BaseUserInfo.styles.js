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
  correctAvatar: {
    width: '132px',
    height: '132px',
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
    marginTop: '36px',
  }),

  contained: (theme)=> ({
    display: 'block',
    paddingY: '10px',
    paddingX: '20px',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'uppercase',
    },

    '&:hover': {
      backgroundColor: theme.palette.primary['600'],
    },
}),

  outlined: (theme) => ({
    display: 'block',
    paddingY: '10px',
    paddingX: '20px',
    color: theme.palette.primary['200'],
    fontFamily: theme.typography.fontFamily,
    border: `1px solid ${theme.palette.action.active}`,
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'uppercase',
    },

    '&:hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      borderColor: theme.palette.primary['200']
    },

  }),
};
