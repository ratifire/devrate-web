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
  // checkBox: (theme) => ({
  //   color: theme.palette.disabled,
  //   '&:hover': {
  //     backgroundColor: 'transparent',
  //   },
  //   '&.Mui-checked': {
  //     color: theme.palette.disabled,
  //     backgroundColor: 'white',
  //   },
  //   '& .MuiSvgIcon-root': {
  //     fontSize: 20,
  //     border: '1px',
  //   },
  //   '&.MuiCheckbox-root': {
  //     borderRadius: 0,
  //     padding: 0,
  //   },
  //   '& svg': {
  //     height: '24px',
  //     width: '24px',
  //     color: '#C5C5C6',
  //   },
  // }),
  checkBox: (theme) => ({
    color: theme.palette.disabled,

    '& .MuiSvgIcon-root': {
      fontSize: 20,
      border: '1px',
    },
    '&.Mui-checked': {
      color: theme.palette.disabled,
    },
    '& svg': {
      height: '24px',
      width: '24px',
      backgroundColor: theme.palette.sliderAssessment.violet,
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
