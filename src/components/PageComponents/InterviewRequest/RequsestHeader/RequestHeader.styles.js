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
  respondentColor: (theme) => theme.palette.requestInterviewe.role.respondent,
  interviewerColor: (theme) => theme.palette.requestInterviewe.role.interviewer,

  foundInterviews: (theme) => ({
    color: theme.palette.requestInterviewe.interviewCount.foundInterviews,
  }),
  totalInterviews: (theme) => ({
    color: theme.palette.requestInterviewe.interviewCount.totalInterviews,
  }),
  selectedTimeslots: (theme) => ({
    color: theme.palette.requestInterviewe.interviewCount.selectedTimeslots,
  }),

  menuIcon: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  openMenuDots: (theme) => ({
    flex: '1 0 35px',
    color: theme.palette.requestInterviewe.buttons.openMenuDots.color,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.5s, transform 0.5s',
    '&:hover': {
      color: theme.palette.requestInterviewe.buttons.openMenuDots.hover.color,
      backgroundColor: theme.palette.requestInterviewe.buttons.openMenuDots.hover.backgroundColor,
    },
  }),

  statsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
  statItem: (theme) => ({
    color: theme.palette.requestInterviewe.statItem.color,
  }),
  description: (theme) => ({
    color: theme.palette.requestInterviewe.description.color,
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
    color: theme.palette.requestInterviewe.buttons.delete.color,
    '&:hover': {
      color: theme.palette.requestInterviewe.buttons.delete.hover.color,
      backgroundColor: theme.palette.requestInterviewe.buttons.delete.hover.backgroundColor,
    },
    '&.Mui-disabled': {
      color: theme.palette.requestInterviewe.buttons.delete.disable.color,
    },
  }),
  outlined: (theme) => ({
    width: '216px',
    marginLeft: '16px',
    display: 'flex',
    justifyContent: 'flex-start',
    gridGap: theme.spacing(2),
    paddingY: '13px',
    paddingX: '22px',
    color: theme.palette.iconBtn.bookInterview.color,
    fontFamily: theme.typography.fontFamily,
    border: `1px solid ${theme.palette.iconBtn.bookInterview.borderColor}`,
    textTransform: 'lowercase',
    '& .loadingBtnText::first-letter': {
      textTransform: 'uppercase',
    },
    '&:hover': {
      backgroundColor: theme.palette.iconBtn.bookInterview.hover.backgroundColor,
      borderColor: theme.palette.iconBtn.bookInterview.hover.borderColor,
      color: theme.palette.iconBtn.bookInterview.hover.color,
    },
    '&.Mui-disabled': {
      backgroundColor: '#252527',
      '& .MuiButton-startIcon': {
        '& .MuiSvgIcon-root': {
          color: '#828283',
        },
      },
      '& .loadingBtnText': {
        color: '#828283',
      },
    },
  }),
};
