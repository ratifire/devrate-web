export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  }),
  boxTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  userCircle: (theme) => ({
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: theme.palette.interviewSkills.userCircle,
  }),
  hostCircle: (theme) => ({
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: theme.palette.interviewSkills.hostCircle,
  }),
};
