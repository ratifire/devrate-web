export const styles = {
  timeSlot: (theme, currentLocale) => ({
    maxWidth: currentLocale === 'uk' ? 225 : 209,
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
  pending: (theme) => ({
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
  booked: (theme) => ({
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
    '& > :last-child:hover': {
      textDecoration: 'underline',
    },
  }),

  expired: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.requestInterview.timeSlot.statusCircle.expired,
    position: 'relative',
    '&::after': {
      content: '" "',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: theme.palette.requestInterview.timeSlot.statusCircle.expired,
      marginLeft: '4px',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  }),
  statusText: (theme) => ({
    color: theme.palette.requestInterview.timeSlot.statusText,
    marginRight: '8px',
    opacity: 1,
  }),
  statusState: (type) => ({
    cursor: type === 'booked' ? 'pointer' : 'default',
  }),
  checkBox: () => ({
    color: 'transparent',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
};
