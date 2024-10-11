const styles = {
  educationItemContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.sliderAssessment.darkGray,
    borderRadius: 2,
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
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
  dateContainer: (theme) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.subtitle2.fontSize,
    position: 'absolute',
    top: '5px',
    right: '8px',
  }),
};

export default styles;
