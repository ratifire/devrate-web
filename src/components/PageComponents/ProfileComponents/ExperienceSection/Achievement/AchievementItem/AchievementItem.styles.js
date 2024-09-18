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

  iconBtnModal: (theme) => ({
    color: theme.palette.sliderAssessment.lightGray,
    padding: 0,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.sliderAssessment.gray,
      color: theme.palette.sliderAssessment.lightGray,
      transform: 'scale(1.1)',
    },
  }),

};
export default styles;
