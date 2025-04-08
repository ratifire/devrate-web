export const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxProgress: {
    maxWidth: '188px',
    width: '100%',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  divider: (theme) => ({
    marginY: theme.spacing(2),
    backgroundColor: theme.palette.background.level3,
  }),
  progress: (theme) => ({
    maxWidth: '70px',
    width: '100%',
    height: '6px',
    borderRadius: '3px',
    backgroundColor: theme.palette.specialization.progress.bgColor,
    '& > span': {
      borderRadius: '3px',
    },
  }),
  leftProgress: (theme) => ({
    '& > span': {
      backgroundColor: theme.palette.interviewSkills.leftCircle,
    },
  }),
  rightProgress: (theme) => ({
    '& > span': {
      backgroundColor: theme.palette.interviewSkills.rightCircle,
    },
  }),
  grade: {
    maxWidth: '40px',
    width: '100%',
  },
};
