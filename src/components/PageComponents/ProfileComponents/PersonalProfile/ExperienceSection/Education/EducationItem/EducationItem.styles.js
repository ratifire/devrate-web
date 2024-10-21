const styles = {
  educationItemContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    borderRadius: 2,
    border: theme.palette.sliderAssessment.border,
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
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
  courseTitle: (theme) => ({
    color: theme.palette.text.primary,
  }),
  schoolTitle: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  link: (theme) => ({
    color: theme.palette.primary[200],
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
