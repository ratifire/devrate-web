export const styles = {
  demoApp: {
    display: 'flex',
    minHeight: '100%',
    fontSize: '14px',
  },
  demoAppMain: (theme) => ({
    flexGrow: '1',

    padding: theme.spacing(4),
  }),
  fc: {
    margin: '0 auto',
  },
  timeGridSlot: {
    height: '80.92px', // Adjust this value to change the width of the time-axis slots
    borderColor: '#303032',
    backgroundColor: 'red',
  },
  timeGridTableData: {
    height: '80.92px', // Adjust this value to change the width of the time-axis slots
    borderColor: '#303032',
  },
  timeGridTableHead: {
    borderColor: '#303032',
    color: '#C5C5C6',
    fontSize: '14px',
    lineHeight: '20.02px',
  },
  timeGridTodayElements: {
    backgroundColor: '#3E3E40',
  },
  timeGridEventElements: {
    backgroundColor: '#25CBFF',
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21.98px',
    color: '#303032',
  },
  eventTooltip: {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '3px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  //needed to hide toolbar
  // toolBarElements: {
  //   display: 'none',
  // },
};
