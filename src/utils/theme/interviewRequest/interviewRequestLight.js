export const interviewRequestLight = {
  requestInterview: {
    participant: {
      borderShadow: '#C5C5C6',
      backgroundColor: '#F8F8F8',
    },
    timeSlot: {
      borderColor: '#69696B',
      statusText: '#1D1D1D',
      statusCircle: {
        expired: '#F44336',
        booked: '#3AB310',
        pending: '#EE7538',
        completed: '#00855D',
      },
    },
    role: {
      candidate: '#007CA3',
      interviewer: '#00855D',
    },
    interviewCount: {
      foundInterviews: '#6200EE',
      totalInterviews: '#6200EE',
      selectedTimeslots: '#6200EE',
      languageName: '#6200EE',
    },
    statItem: {
      color: '#1D1D1D',
    },
    description: {
      color: '#1D1D1D',
    },
    buttons: {
      delete: {
        color: '#A70000',
        hover: {
          color: '#D32F2F',
          backgroundColor: 'transparent',
        },
        disable: {
          color: '#69696B',
        },
      },
      addTimeslot: {
        color: '#6200EE',
        backgroundColor: '#CEB0FA29',
        hover: {
          color: '#360083',
          backgroundColor: '#CEB0FA29',
        },
        disable: '#828283',
      },
      openMenuDots: {
        color: '#8133F1',
        backgroundColor: 'transparent',
        disable: {
          color: '#A9A9AA',
        },
        hover: {
          color: '#8133F1',
          backgroundColor: '#CEB0FA29',
        },
      },
      deleteAllTimeslots: {
        cancel: {
          color: '#6200EE',
          hover: {
            color: '#360083',
            backgroundColor: '#CEB0FA29',
          },
        },
        remove: {},
      },
    },
  },
};
