export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    backgroundImage: 'none',
    boxShadow: 'none',
    padding: theme.spacing(4),
    maxWidth: '606px',
    width: '100%',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  }),
  boxTitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxParticipants: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
  },
  boxParticipant: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  rightCircle: (theme) => ({
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: theme.palette.interviewSkills.rightCircle,
  }),
  leftCircle: (theme) => ({
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: theme.palette.interviewSkills.leftCircle,
  }),
};
