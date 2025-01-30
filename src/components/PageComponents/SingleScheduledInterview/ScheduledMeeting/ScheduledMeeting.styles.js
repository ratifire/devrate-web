export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    backgroundImage: 'none',
    boxShadow: 'none',
    padding: theme.spacing(4),
    maxWidth: '606px',
    width: '100%',
    borderRadius: 2,
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
  upcoming: (theme) => ({
    color: theme.palette.scheduledMeeting.upcoming,
  }),
  progress: (theme) => ({
    color: theme.palette.scheduledMeeting.progress,
  }),
  waiting: (theme) => ({
    color: theme.palette.scheduledMeeting.waiting,
  }),
  link: (theme) => ({
    pointerEvents: 'none',
    color: theme.palette.scheduledMeeting.link,
    textDecoration: 'none',
  }),
};
