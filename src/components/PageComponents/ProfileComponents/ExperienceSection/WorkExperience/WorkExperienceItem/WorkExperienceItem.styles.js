const styles = {
  workExperienceItemContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.sliderAssessment.darkGray,
    borderRadius: 2,
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  }),
  workTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  workPosition: (theme) => ({
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
  }),
  workPlaceTitle: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  menuIcon: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  workDutiesContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  }),
  workDutiesTitle: (theme) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
  }),
  workDuties: {},

  iconBtnModal: (theme) => ({
    flex: '1 0 35px',
    color: theme.palette.neutral['200'],
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.neutral['700'],
      color: theme.palette.neutral['200'],
    },
  }),
};
export default styles;
