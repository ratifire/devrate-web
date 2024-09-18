const styles = {
  achievementItemContainer: (theme) => ({
    width: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.sliderAssessment.darkGray,
    borderRadius: 2,
    height: '184px',
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
    color: theme.palette.action.hover,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-8px',
    borderRadius: 1,
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      borderRadius: '4px',
      color: theme.palette.action.active,
      cursor: 'pointer',
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