export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    backgroundImage: 'none',
    boxShadow: 'none',
    padding: theme.spacing(3),
    maxWidth: '480px',
    width: '100%',
    borderRadius: 2,
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
  boxChart: {
    width: '100%',
    height: '400px',

    '& .recharts-default-legend': {
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '16px !important',
    },
    '& .legend-item-0': {
      paddingLeft: '30px',
    },
    '& .legend-item-1': {
      marginRight: '0 !important',
    },
  },
};
