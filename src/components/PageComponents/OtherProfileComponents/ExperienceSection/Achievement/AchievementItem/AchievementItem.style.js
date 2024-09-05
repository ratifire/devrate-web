const styles = {
  achievementItemContainer: (theme) => ({
    width: '100%',
    padding: theme.spacing(4),
    backgroundColor: '#3E3E40',
    borderRadius: theme.shape.borderRadius,
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  }),
  logoTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  achievementTitleYearContainer: (theme) => ({
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  achievementTitle: (theme) => ({
    color: theme.palette.text.primary,
  }),
  link: (theme) => ({
    color: theme.palette.primary['200'],
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      borderRadius: '4px',
      color: theme.palette.action.active,
    },
  }),
  achievementItemText: (theme) => ({
    color: theme.palette.text.primary,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: theme.spacing(1),
  }),
};

export default styles;