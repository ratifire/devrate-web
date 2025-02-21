export const styles = {
  interviewLink: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  sideBarEventContainer: (theme) => ({
    width: '100%',
    backgroundColor: theme.palette.schedule.sideBarEvent.backgroundColor,
    backgroundImage: 'none',
    borderRadius: 1,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: '1px solid transparent',
  }),
  border: (theme) => ({
    width: '100%',
    backgroundColor: theme.palette.schedule.sideBarEvent.backgroundColor,
    backgroundImage: 'none',
    borderRadius: 1,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: '1px solid #8133F1',
  }),
  status: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }),
  title: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.titleColor,
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  }),
  titleLevelBox: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  }),
  host: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.hostColor,
  }),
  role: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.participant,
    marginBottom: theme.spacing(2),
    textTransform: 'lowercase',
    '&:first-letter': {
      textTransform: 'uppercase',
    },
    ' span': {
      display: 'inline-block',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  eventDate: (theme) => ({
    lineHeight: '20.02px',
    color: theme.palette.schedule.sideBarEvent.hostTitle,
    marginBottom: theme.spacing(2),
  }),
  hostLink: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.hostLinkColor,
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.primary[300],
    },
  }),
  Junior: (theme) => ({
    color: theme.palette.userCard.lvl.junior,
  }),
  Middle: (theme) => ({
    color: theme.palette.userCard.lvl.middle,
  }),
  Senior: (theme) => ({
    color: theme.palette.userCard.lvl.senior,
  }),
};
