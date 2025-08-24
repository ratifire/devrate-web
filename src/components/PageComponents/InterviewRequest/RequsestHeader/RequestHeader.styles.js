export const styles = {
  container: {
    marginBottom: '24px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  candidateColor: (theme) => theme.palette.requestInterview.role.candidate,
  interviewerColor: (theme) => theme.palette.requestInterview.role.interviewer,

  foundInterviews: (theme) => ({
    color: theme.palette.requestInterview.interviewCount.foundInterviews,
    marginLeft: '8px',
  }),
  totalInterviews: (theme) => ({
    color: theme.palette.requestInterview.interviewCount.totalInterviews,
    marginLeft: '8px',
  }),
  selectedTimeslots: (theme) => ({
    color: theme.palette.requestInterview.interviewCount.selectedTimeslots,
    marginLeft: '8px',
  }),
  languageName: (theme) => ({
    color: theme.palette.requestInterview.interviewCount.languageName,
    marginLeft: '8px',
  }),

  menuIcon: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  openMenuDots: (theme) => ({
    flex: '1 0 35px',
    color: theme.palette.requestInterview.buttons.openMenuDots.color,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.5s, transform 0.5s',
    '&:hover': {
      color: theme.palette.requestInterview.buttons.openMenuDots.hover.color,
      backgroundColor: theme.palette.requestInterview.buttons.openMenuDots.hover.backgroundColor,
    },
    '&.Mui-disabled': {
      color: theme.palette.requestInterview.buttons.openMenuDots.disable.color,
    },
  }),

  statsContainer: {
    display: 'flex',
    gap: '32px',
    marginBottom: '16px',
  },
  statItem: (theme) => ({
    color: theme.palette.requestInterview.statItem.color,
  }),
  description: (theme) => ({
    color: theme.palette.requestInterview.description.color,
    marginBottom: '16px',
  }),
  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  iconDelete: (theme) => ({
    flex: '1 0 35px',
    borderRadius: 1,
    color: theme.palette.requestInterview.buttons.delete.color,
    '&:hover': {
      color: theme.palette.requestInterview.buttons.delete.hover.color,
      backgroundColor: theme.palette.requestInterview.buttons.delete.hover.backgroundColor,
    },
    '&.Mui-disabled': {
      color: theme.palette.requestInterview.buttons.delete.disable.color,
    },
  }),
  refuseBtn: (theme) => ({
    width: '216px',
    color: theme.palette.requestInterview.buttons.addTimeslot.color,
    padding: '12px 16px',
    '&:hover': {
      backgroundColor: theme.palette.requestInterview.buttons.addTimeslot.hover.backgroundColor,
      color: theme.palette.requestInterview.buttons.addTimeslot.hover.color,
    },
    '&.Mui-disabled': {
      color: theme.palette.requestInterview.buttons.addTimeslot.disable,
      '& .MuiButton-startIcon': {
        '& .MuiSvgIcon-root': {
          color: theme.palette.requestInterview.buttons.addTimeslot.disable,
        },
      },
    },
  }),
};
