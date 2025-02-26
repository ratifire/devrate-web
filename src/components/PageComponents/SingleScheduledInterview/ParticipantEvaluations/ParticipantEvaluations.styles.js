export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }),
  boxTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxParticipants: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  Junior: (theme) => ({
    color: theme.palette.userCard.lvl.junior,
  }),
  Middle: (theme) => ({
    color: theme.palette.userCard.lvl.middle,
  }),
  Senior: (theme) => ({
    color: theme.palette.userCard.lvl.senior,
  }),
  boxChart: (theme) => ({
    width: '100%',
    height: '400px',
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: theme.palette.interviewSkills.skillsBox,

    '& .recharts-default-legend': {
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: '16px !important',
    },
    '& .legend-item-0': {
      display: 'flex !important',
      alignItems: 'center',
      paddingLeft: '30px',

      '& svg > path': {
        fill: theme.palette.interviewSkills.rightCircle,
      },
    },
    '& .legend-item-1': {
      display: 'flex !important',
      alignItems: 'center',
      marginRight: '0 !important',

      '& svg > path': {
        fill: theme.palette.interviewSkills.leftCircle,
      },
    },
  }),
};
