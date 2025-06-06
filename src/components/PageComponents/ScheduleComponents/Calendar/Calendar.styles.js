export const styles = {
  demoApp: {
    display: 'flex',
    minHeight: '100%',
    fontSize: '14px',
  },
  demoAppMain: (theme) => ({
    flexGrow: '1',
    '& .fc-scroller.fc-scroller-liquid-absolute': {
      '&::-webkit-scrollbar': {
        width: 10,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.schedule.scroll.track,
        borderRadius: 8,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 6,
        backgroundColor: theme.palette.schedule.scroll.thumb,
      },
    },

    '& .fc-v-event': {
      boxShadow: 'none',
      borderColor: 'transparent',
    },
  }),
  fc: {
    margin: '0 auto',
  },
  timeGridSlot: {
    height: '70px', // Adjust this value to change the width of the time-axis slots
    borderColor: '#303032',
  },
  timeGridTableDataDark: {
    height: '70px', // Adjust this value to change the width of the time-axis slots
    borderColor: '#303032',
  },
  timeGridTableDataLight: {
    height: '70px',
    borderColor: '#C5C5C6',
  },
  timeGridTableHeadDark: {
    borderColor: '#303032',
    borderTop: '0px',
    color: '#C5C5C6',
    fontSize: '14px',
    lineHeight: '20.02px',
  },
  timeGridTableHeadLight: {
    borderColor: '#C5C5C6',
    color: '#303032',
    fontSize: '14px',
    lineHeight: '20.02px',
  },
  timeGridTodayElements: {
    backgroundColor: '#25CBFF1A',
  },
  timeGridEventElements: {
    height: '100%',
    border: 'none',
    borderRadius: '2px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '22px',
    color: '#303032',
    boxShadow: 'none',
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
};
