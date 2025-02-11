export const styles = {
  sideBarEventContainer: (theme) => ({
    backgroundColor: theme.palette.schedule.sideBarEvent.backgroundColor,
    borderRadius: 2,
    padding: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
    marginBottom: theme.spacing(2),
  }),
  role: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.participant,
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
  host_link: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.hostLinkColor,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary[300],
    },
  }),
  ellipse: (theme) => ({
    marginRight: theme.spacing(2),
    width: '14px',
    height: '14px',
  }),
};
