export const styles = {
  skillsWrapper: (theme) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    '@media (min-width: 1272px)': {
      padding: theme.spacing(4),
    },
  }),
  skillsTitle: (theme) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
  hardSkills: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiRating-iconFilled': {
      color: theme.palette.skillsSection.stars.iconFilled,
    },
    '& .MuiRating-iconEmpty': {
      color: theme.palette.skillsSection.stars.iconEmpty,
    },
  }),
  skillsText: (theme) => ({
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: '108px',
  }),
  skillsRatingValue: () => ({
    marginRight: '10px',
  }),
  skillMark: {
    textAlign: 'start',
  },
  softSkills: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '29px',
    '& .MuiRating-iconFilled': {
      color: theme.palette.skillsSection.stars.iconFilled,
    },
    '& .MuiRating-iconEmpty': {
      color: theme.palette.skillsSection.stars.iconEmpty,
    },
  }),
  interviewHistory: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: theme.spacing(3),
  }),
  skillsInterviewBtn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: '72px',
    width: '100%',
    padding: '12px 0 16px',
    border: 1,
    borderRadius: 1,
  },
  doneInterviewsBtn: (theme) => ({
    color: theme.palette.skillsSection.doneInterviews.color,
    borderColor: theme.palette.skillsSection.doneInterviews.borderColor,
    backgroundColor: theme.palette.skillsSection.doneInterviews.backgroundColor,
  }),
  completedInterviewsBtn: (theme) => ({
    color: theme.palette.skillsSection.completedInterviews.color,
    borderColor: theme.palette.skillsSection.completedInterviews.borderColor,
    backgroundColor: theme.palette.skillsSection.completedInterviews.backgroundColor,
  }),
};
