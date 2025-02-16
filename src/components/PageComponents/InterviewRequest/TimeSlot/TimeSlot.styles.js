export const styles = {
  timeSlot: (theme) => ({
    width: 209,
    height: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '8px',
    border: '1px solid grey',
    borderRadius: theme.spacing(2),
  }),
  timeDateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontWeight: 'bold',
  },
  date: {
    fontStyle: 'italic',
  },
  statusCheckboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    color: 'orange',
  },
  completed: {
    color: 'green',
  },
  statusText: {
    color: 'white',
    marginRight: '4px',
  },
  // checkbox: {
  //   '&:hover': {
  //     backgroundColor: 'transparent',
  //   },
  //   '&.Mui-checked': {
  //     color: 'green',
  //   },
  // },
  checkBox: (theme) => ({
    color: theme.palette.disabled,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-checked': {
      color: theme.palette.disabled,
    },
  }),
};
