export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingY: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.background.level3}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  }),
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
  userProgress: (theme) => ({
    '& > span': {
      backgroundColor: theme.palette.interviewSkills.userCircle,
    },
  }),
  hostProgress: (theme) => ({
    '& > span': {
      backgroundColor: theme.palette.interviewSkills.hostCircle,
    },
  }),
  grade: {
    textAlign: 'right',
    maxWidth: '40px',
    width: '100%',
  },
};
