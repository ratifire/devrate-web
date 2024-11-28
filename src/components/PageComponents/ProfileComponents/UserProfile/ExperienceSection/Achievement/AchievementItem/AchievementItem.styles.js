const styles = {
  achievementItemContainer: (theme) => ({
    width: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    border: theme.palette.sliderAssessment.border,
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
    color: theme.palette.iconBtn.link.color,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-8px',
    borderRadius: 1,
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
      color: theme.palette.iconBtn.link.hover.color,
      backgroundColor: theme.palette.iconBtn.link.hover.backgroundColor,
      borderRadius: '4px',
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
