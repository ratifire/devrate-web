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
    border: '1px solid grey',
    borderRadius: theme.spacing(2),
  }),
  timeDateContainer: () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  time: {},
  date: {},
  statusCheckboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: () => ({
    display: 'flex',
    alignItems: 'center',
    color: 'orange',
  }),
  completed: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'green',
  },
  statusText: {
    color: 'white',
    marginRight: '8px',
  },
  checkBox: () => ({
    color: 'transparent',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
  statusCircle: (type) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: type === 'assigned' ? 'green' : 'orange',
    marginLeft: '4px',
  }),
};
