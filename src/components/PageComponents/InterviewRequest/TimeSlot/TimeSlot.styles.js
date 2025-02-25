export const styles = {
  timeSlot: (theme) => ({
    maxWidth: 209,
    minWidth: 209,
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '8px',
    border: `1px solid ${theme.palette.requestInterview.timeSlot.borderColor}`,
    borderRadius: theme.spacing(2),
  }),
  timeDateContainer: () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  statusCheckboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  panding: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.requestInterview.timeSlot.statusCircle.panding,
    position: 'relative',
    '&::after': {
      content: '" "',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: theme.palette.requestInterview.timeSlot.statusCircle.panding,
      marginLeft: '4px',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  }),
  assigned: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.requestInterview.timeSlot.statusCircle.assigned,
    position: 'relative',
    '&::after': {
      content: '" "',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: theme.palette.requestInterview.timeSlot.statusCircle.assigned,
      marginLeft: '4px',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  }),
  statusText: (theme) => ({
    color: theme.palette.requestInterview.timeSlot.statusText,
    marginRight: '8px',
  }),
  checkBox: () => ({
    color: 'transparent',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
};
