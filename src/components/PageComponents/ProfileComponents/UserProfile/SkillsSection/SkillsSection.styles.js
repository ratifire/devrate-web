export const styles = {
  skillsWrapper: (theme) => ({
    width: '100%',
    height: '100%',
    padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(0)}`,
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
    fontSize: '14px',
    '@media (min-width: 1272px)': {
      fontSize: '20px',
    },
  }),

  skillsRatingValue: () => ({
    marginRight: '10px',
  }),

  skillMark: {
    textAlign: 'start',
    fontSize: '14px',
    '@media (min-width: 1272px)': {
      fontSize: '16px',
    },
  },

  softSkills: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (min-width: 1272px)': {
      marginBottom: '29px',
    },
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
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gridGap: theme.spacing(2),
    '@media (min-width: 1272px)': {
      gridGap: theme.spacing(3),
      flexDirection: 'row',
    },
  }),
  skillsInterviewBtn: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: theme.spacing(2),
    textAlign: 'center',
    height: '48px',
    width: '100%',
    padding: '8px 0 8px',
    border: 1,
    borderRadius: 1,
    '@media (min-width: 1272px)': {
      flexDirection: 'column',
      gridGap: theme.spacing(0),
      height: '72px',
      padding: '12px 0 16px',
    },
  }),
  conductedInterviewsBtn: (theme) => ({
    color: theme.palette.skillsSection.completedInterviews.color,
    borderColor: theme.palette.skillsSection.completedInterviews.borderColor,
    backgroundColor: theme.palette.skillsSection.completedInterviews.backgroundColor,
  }),
  completedInterviewsBtn: (theme) => ({
    color: theme.palette.skillsSection.doneInterviews.color,
    borderColor: theme.palette.skillsSection.doneInterviews.borderColor,
    backgroundColor: theme.palette.skillsSection.doneInterviews.backgroundColor,
  }),
};
