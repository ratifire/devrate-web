const styles = {
  achievementItemContainer: (theme) => ({
    width: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    borderRadius: 2,
    maxHeight: '184px',
    height: '100%',
    alignItems: 'stretch',
    display: 'flex',
    border: theme.palette.sliderAssessment.border,
    '>div': {
      width: '100%',
    },
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  }),
  logoTitleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  achievementTitleYearContainer: (theme) => ({
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  achievementTitle: (theme) => ({
    color: theme.palette.text.primary,
    wordBreak: 'break-word',
  }),
  icon: (theme) => ({
    color: theme.palette.primary[200],
  }),
  achievementItemText: (theme) => ({
    color: theme.palette.text.primary,
    wordBreak: 'break-word',
  }),
  link: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'underline',
  }),
  menuIcon: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  iconBtnModal: (theme) => ({
    flex: '1 0 35px',
    color: theme.palette.iconBtn.burgerDot.color,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      color: theme.palette.iconBtn.burgerDot.hover.color,
      backgroundColor: theme.palette.iconBtn.burgerDot.hover.backgroundColor,
    },
  }),
};
export default styles;
