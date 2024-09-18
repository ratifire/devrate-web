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
  // timeGridSlot: {
  //   height: '80.92px', // Adjust this value to change the width of the time-axis slots
  //   borderColor: '#303032',
  //   backgroundColor: 'red',
  // },
  timeGridTableData: (theme) => ({
    height: '80.92px', // Adjust this value to change the width of the time-axis slots
    borderColor: theme.palette.neutral[700],
  }),
  timeGridTableHead: (theme) => ({
    borderColor: theme.palette.neutral[700],
    color: theme.palette.sliderAssessment.lightGray,
    fontSize: '14px',
    lineHeight: '20.02px',
  }),
  timeGridTodayElements: (theme) => ({
    backgroundColor: theme.palette.sliderAssessment.darkGray,
  }),
  timeGridEventElements: (theme) => ({
    backgroundColor: theme.palette.info.main,
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21.98px',
    color: theme.palette.neutral[700],
  }),
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
};
