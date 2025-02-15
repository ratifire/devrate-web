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
  },
  boxDataTime: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  boxInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  boxImg: {
    display: 'flex',
    position: 'relative',
    marginRight: '15px',
  },
  activeImg: {
    position: 'absolute',
    left: '50%',
  },
  boxInfoText: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  boxParameters: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  platformIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  boxParametersInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  boxBtn: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    '& > :first-of-type': {
      color: theme.palette.iconBtn.bookInterview.color,
    },
  }),
  btn: {
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0.17px',
    textTransform: 'none',
  },
  ['UPCOMING']: (theme) => ({
    color: theme.palette.scheduledMeeting.upcoming,
  }),
  ['IN PROCESS']: (theme) => ({
    color: theme.palette.scheduledMeeting.progress,
  }),
  ['AWAITING FEEDBACK']: (theme) => ({
    color: theme.palette.scheduledMeeting.waiting,
  }),
  link: (theme) => ({
    pointerEvents: 'none',
    color: theme.palette.scheduledMeeting.link,
    textDecoration: 'none',
  }),
};
