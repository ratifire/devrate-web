export const styles = {
  skillsWrapper: (theme) => ({
    width: '100%',
    height: 260,
    padding: theme.spacing(4),
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
  }),
  skillsText: (theme) => ({
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  }),
  skillsRating: (theme) => ({
    '& .MuiRating-iconFilled': {
      color: theme.palette.action.active,
    },
    '& .MuiRating-iconEmpty': {
      color: theme.palette.action.active,
    },
    marginRight: '10px',
  }),
  softSkills: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '29px',
    '& .MuiRating-iconFilled': {
      color: theme.palette.action.active,
    },
    '& .MuiRating-iconEmpty': {
      color: theme.palette.action.active,
    },
  }),
  interviewHistory: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: theme.spacing(3),
  }),
  doneInterviewsQuantity: {
  },

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
    color: theme.palette.info.azure,
    borderColor: theme.palette.info.azure,

  }),
  completedInterviewsQuantity: {
  },
  completedInterviewsBtn: (theme) => ({
    color: theme.palette.info.main,
    borderColor: theme.palette.info.main,
  }),
};
