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
  interviewHistory: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  doneInterviewsQuantity: {
    marginBottom: '-7px'
  },
  doneInterviews: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(3),
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    color: theme.palette.info.azure,
    border: 1,
    borderColor: theme.palette.info.azure,
    borderRadius: 1,
  }),
  completedInterviewsQuantity: {
    marginBottom: '-7px'
  },
  completedInterviews: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    color: theme.palette.info.main,
    border: 1,
    borderColor: theme.palette.info.main,
    borderRadius: 1,
  }),
};
